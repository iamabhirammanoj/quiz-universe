export function migrateSave(saved, fresh) {
  if (!saved || typeof saved !== 'object') return fresh;
  if (saved.version === 1) {
    Object.assign(fresh, saved, { version: 3 });
    fresh.worldProgress.space = {
      highestUnlocked: Math.max(1, Math.min(100, saved.highestUnlocked || 1)),
      completed: saved.completed || {},
      replayRewards: saved.replayRewards || {},
      runHistory: saved.runHistory || [],
      treasureClaimed: [],
      secretUnlocked: false,
    };
    fresh.starBalance = Object.values(fresh.worldProgress.space.completed).reduce((sum, result) => sum + (result.stars || 0), 0);
    fresh.unlockedWorlds = ['space', 'general'];
    fresh.lifelines = { ...fresh.lifelines, fifty: saved.lifelines?.fifty ?? 1, hint: saved.lifelines?.hint ?? 1, extraTime: saved.lifelines?.time ?? 1 };
    delete fresh.lifelines.time;
    return fresh;
  }
  if (saved.version === 2) {
    Object.assign(fresh, saved, { version: 3 });
    fresh.lifelines = { ...fresh.lifelines, ...(saved.lifelines || {}) };
    if (fresh.lifelines.time !== undefined) {
      fresh.lifelines.extraTime = fresh.lifelines.time;
      delete fresh.lifelines.time;
    }
    return fresh;
  }
  return { ...fresh, ...saved, version: 3 };
}

export function prepareActiveRun(snapshot) {
  if (!snapshot || !Array.isArray(snapshot.questions)) return null;
  const game = JSON.parse(JSON.stringify(snapshot));
  const pendingTransition = game.pendingTransition || '';
  const needsNextEndlessQuestion = Boolean(!pendingTransition && game.answered && game.mode === 'endless');
  if (game.answered && !needsNextEndlessQuestion && !pendingTransition) {
    game.index += 1;
    game.answered = false;
    game.feedback = '';
    game.time = 45;
    game.used = {};
    game.disabled = [];
  }
  if (needsNextEndlessQuestion) {
    game.answered = false;
    game.feedback = '';
    game.used = {};
    game.disabled = [];
  }
  return { game, needsNextEndlessQuestion, pendingTransition };
}
