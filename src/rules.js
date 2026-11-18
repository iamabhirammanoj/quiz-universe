export const MAX_LIVES = 5;
export const LIFE_RECOVERY_MS = 20 * 60 * 1000;
export const BOSS_START_HEALTH = 15;

export function bossHealthForRun({ health, score = 0 } = {}) {
  if (health !== undefined && health !== null) {
    return Math.min(BOSS_START_HEALTH, Math.max(0, Number(health) || 0));
  }
  return Math.max(0, BOSS_START_HEALTH - Math.max(0, Number(score) || 0));
}

export function bossHealthAfterAnswer(health, correct) {
  return correct ? Math.max(0, Math.max(0, Number(health) || 0) - 1) : Math.max(0, Number(health) || 0);
}

export function questionInteractionType(question, requestedType = 'multiple-choice', context) {
  if (typeof question === 'string') {
    const options = typeof requestedType === 'object' && requestedType !== null ? requestedType : context;
    if (options?.mode === 'endless' && options.endlessQuestions % 3 === 2) {
      return 'progressive-clue';
    }
    return 'multiple-choice';
  }
  const supported = Array.isArray(question?.supportedInteractionTypes)
    ? question.supportedInteractionTypes
    : ['multiple-choice'];
  if (!supported.includes(requestedType)) return 'multiple-choice';

  if (question?.options) {
    if (requestedType === 'map-selection' && !question.mapData) return 'multiple-choice';
    if (requestedType === 'timeline-ordering' && !question.timelineData) return 'multiple-choice';
    if (requestedType === 'sequence-completion' && !question.sequenceData) return 'multiple-choice';
    if (requestedType === 'image-identification' && !question.imageData) return 'multiple-choice';
  }
  return requestedType;
}

export function revealProgressiveClue({ stage = 0, time = 45 } = {}) {
  const currentStage = Math.min(2, Math.max(0, Number(stage) || 0));
  if (currentStage >= 2) return { stage:2, time:Math.max(1, Number(time) || 1), penaltySeconds:0 };
  const nextStage = currentStage + 1;
  const penaltySeconds = nextStage === 2 ? 5 : 0;
  return {
    stage:nextStage,
    time:Math.max(1, (Number(time) || 1) - penaltySeconds),
    penaltySeconds,
  };
}

export function levelSpec(level) {
  const milestone = level % 5 === 0;
  return {
    level,
    milestone,
    boss: level % 10 === 0,
    questionCount: milestone ? 20 : 10,
    passScore: milestone ? 15 : 7,
  };
}

export function starsFor(level, correct) {
  if (level % 5 === 0) {
    if (correct >= 20) return 3;
    if (correct >= 18) return 2;
    if (correct >= 16) return 1;
    return 0;
  }
  if (correct >= 10) return 3;
  if (correct >= 9) return 2;
  if (correct >= 8) return 1;
  return 0;
}

export function levelResult(level, correct) {
  const spec = levelSpec(level);
  return { ...spec, correct, passed: correct >= spec.passScore, stars: starsFor(level, correct) };
}

export function lifeCountAt({ lives, updatedAt, now = Date.now() }) {
  const elapsed = Math.max(0, now - updatedAt);
  return Math.min(MAX_LIVES, Math.max(0, lives) + Math.floor(elapsed / LIFE_RECOVERY_MS));
}

export function lifeRecoveryAt({ lives, updatedAt, now = Date.now() }) {
  const count = lifeCountAt({ lives, updatedAt, now });
  if (count >= MAX_LIVES) return 0;
  return LIFE_RECOVERY_MS - (Math.max(0, now - updatedAt) % LIFE_RECOVERY_MS);
}

export function chooseQuestions(pool, { count, history = [], level = 1, random = Math.random } = {}) {
  const used = new Set();
  const recent = new Set(history);
  const eligible = pool.filter(q => Array.isArray(q.eligibleLevels) ? q.eligibleLevels.includes(level) : true);
  const fresh = eligible.filter(q => !recent.has(q.id));
  const source = fresh.length >= count ? fresh : eligible;
  const shuffled = [...source];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const result = [];
  for (const question of shuffled) {
    if (used.has(question.id)) continue;
    used.add(question.id);
    result.push(question);
    if (result.length === count) break;
  }
  return result;
}

export function chapterQuestionPool(pool, { chapterId, count } = {}) {
  if (!Number.isInteger(chapterId) || chapterId < 1 || chapterId > 10 || !Number.isInteger(count) || count < 1) return pool;
  const current = pool.filter(question => question.chapterId === chapterId);
  if (current.length >= count) return current;
  const selectedIds = new Set(current.map(question => question.id));
  const cumulative = [...current];
  for (let chapter = chapterId - 1; chapter >= 1 && cumulative.length < count; chapter--) {
    for (const question of pool) {
      if (question.chapterId === chapter && !selectedIds.has(question.id)) {
        selectedIds.add(question.id);
        cumulative.push(question);
      }
    }
  }
  // Never pull future-topic questions to hide a short chapter pool. The caller
  // can surface the deficit and wait for the missing curriculum content.
  return cumulative;
}

export function chooseAdaptiveQuestions(pool, { count, history = [], level = 1, accuracy = 0.65, random = Math.random } = {}) {
  const ratios = accuracy < 0.55
    ? { easy: 0.65, medium: 0.35, hard: 0, expert:0 }
    : accuracy < 0.82
      ? { easy: 0.35, medium: 0.5, hard: 0.15, expert:0 }
      : { easy: 0.2, medium: 0.45, hard: 0.35 };
  ratios.expert ??= 0;
  if (level >= 50 && accuracy >= 0.9) {
    ratios.easy = Math.max(0.1, ratios.easy - 0.05);
    ratios.medium = Math.max(0.2, ratios.medium - 0.05);
    ratios.expert = 0.1;
  }
  if (level % 10 === 0 && accuracy >= 0.65) {
    ratios.easy = Math.max(0.1, ratios.easy - 0.1);
    ratios.hard += 0.1;
  }
  const selected = [];
  const chosen = new Set();
  for (const difficulty of ['easy', 'medium', 'hard', 'expert']) {
    const target = Math.round(count * ratios[difficulty]);
    const group = chooseQuestions(pool.filter(q => q.difficulty === difficulty && !chosen.has(q.id)), {
      count: target, history, level, random,
    });
    group.forEach(question => { chosen.add(question.id); selected.push(question); });
  }
  if (selected.length < count) {
    chooseQuestions(pool.filter(q => !chosen.has(q.id)), { count: count - selected.length, history, level, random })
      .forEach(question => { chosen.add(question.id); selected.push(question); });
  }
  return selected.length > count ? selected.slice(0, count) : selected;
}

export function levelTransitionPlan(fromLevel, toLevel, { reducedMotion = false } = {}) {
  const from = Math.max(1, Math.min(100, Math.trunc(fromLevel)));
  const to = Math.max(1, Math.min(100, Math.trunc(toLevel)));
  const fromChapter = Math.floor((from - 1) / 10) + 1;
  const toChapter = Math.floor((to - 1) / 10) + 1;
  return { fromLevel:from, toLevel:to, fromChapter, toChapter, chapterChanged:fromChapter !== toChapter, animate:!reducedMotion && to > from };
}

export function nextUnlockedLevel(highestUnlocked, passedLevel, maxLevel = 100) {
  return Math.max(highestUnlocked, Math.min(maxLevel, passedLevel + 1));
}

export function cappedReplayReward({ firstClear, replayCount, stars }) {
  if (firstClear) return 25 + stars * 10;
  if (replayCount >= 3) return 0;
  return Math.max(5, stars * 5);
}

export function lifelineEffect(kind, state, question) {
  switch (kind) {
    case 'fifty': {
      const incorrect = [0, 1, 2, 3].filter(index => index !== question.correct);
      return { ...state, eliminated: incorrect.slice(0, 2) };
    }
    case 'extraTime': return { ...state, time: Math.min(60, state.time + 15) };
    case 'skip': return { ...state, skipped: true };
    case 'secondChance': return { ...state, secondChance: true };
    case 'hint': return { ...state, hint: question.hint || question.why };
    case 'reveal': return { ...state, revealed: [0, 1, 2, 3].find(index => index !== question.correct) };
    case 'double': return { ...state, double: true };
    case 'freeze': return { ...state, frozenUntil: Date.now() + 10000 };
    case 'shield': return { ...state, shield: true };
    case 'aiHint': return { ...state, hint: question.hint || `Think about ${question.topic}.` };
    default: return state;
  }
}
