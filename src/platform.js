const hasYT = () => typeof window !== 'undefined' && typeof window.ytgame !== 'undefined';
const inPlayablesHost = () => hasYT() && Boolean(window.ytgame.IN_PLAYABLES_ENV);
let cloudLoadReady = false;
const cloudErrorListeners = [];

export function onCloudSaveError(listener) {
  if (typeof listener === 'function') cloudErrorListeners.push(listener);
}

function notifyCloudError(op, error) {
  cloudErrorListeners.forEach(fn => {
    try { fn(op, error); } catch {}
  });
}

export async function loadSave() {
  if (inPlayablesHost()) {
    try {
      const raw = await window.ytgame.game.loadData();
      cloudLoadReady = true;
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      cloudLoadReady = false;
      console.warn('Playables cloud save unavailable; avoiding overwriting existing cloud progress.', error);
      notifyCloudError('load', error);
      return null;
    }
  }
  cloudLoadReady = false;
  try { return JSON.parse(localStorage.getItem('quiz-universe-save') || 'null'); }
  catch { return null; }
}

export function saveGame(data) {
  const raw = JSON.stringify(data);
  if (inPlayablesHost()) {
    if (!cloudLoadReady) {
      console.warn('Skipping cloud save because initial cloud load was not successful.');
      notifyCloudError('save', new Error('Initial cloud load failed; cloud saving disabled to avoid overwriting host data.'));
      return;
    }
    try {
      const p = window.ytgame.game.saveData(raw);
      if (p && typeof p.catch === 'function') {
        p.catch(error => {
          console.warn('Playables saveData promise rejected:', error);
          notifyCloudError('save', error);
        });
      }
    } catch (error) {
      console.warn('Playables saveData call threw:', error);
      notifyCloudError('save', error);
    }
    return;
  }
  try { localStorage.setItem('quiz-universe-save', raw); } catch { /* storage may be unavailable */ }
}

export function reportBestScore(value) {
  if (hasYT() && window.ytgame.IN_PLAYABLES_ENV && window.ytgame.engagement?.sendScore) {
    try { window.ytgame.engagement.sendScore({ value: Math.max(0, Math.trunc(value)) }).catch(() => {}); } catch { /* best effort */ }
  }
}

export function rewardedAdAvailable() {
  return hasYT() && Boolean(window.ytgame.IN_PLAYABLES_ENV && window.ytgame.ads?.requestRewardedAd);
}

export function rewardedLifeAvailable() {
  return rewardedAdAvailable();
}

export function rewardedLifelineAvailable() {
  return rewardedAdAvailable();
}

export async function requestRewardedLife() {
  if (!rewardedLifeAvailable()) return false;
  try {
    const result = await window.ytgame.ads.requestRewardedAd('cosmic-trail-extra-life');
    return result === true;
  } catch (error) {
    console.warn('Rewarded life ad request failed:', error);
    return false;
  }
}

export async function requestRewardedLifeline() {
  if (!rewardedLifelineAvailable()) return false;
  try {
    const result = await window.ytgame.ads.requestRewardedAd('cosmic-trail-extra-lifeline');
    return result === true;
  } catch (error) {
    console.warn('Rewarded lifeline ad request failed:', error);
    return false;
  }
}

export function connectSystem({ onPause, onResume, onAudio }) {
  if (!hasYT()) return;
  const system = window.ytgame.system;
  try { system.onPause(onPause); system.onResume(onResume); } catch { /* optional host callbacks */ }
  try { onAudio(system.isAudioEnabled()); system.onAudioEnabledChange(onAudio); } catch { /* browser audio setting is used */ }
}

export function signalFirstFrame() {
  if (!hasYT()) return;
  try { window.ytgame.game.firstFrameReady(); } catch { /* no-op in local preview */ }
}

export function signalGameReady() {
  if (!hasYT()) return;
  try { window.ytgame.game.gameReady(); } catch { /* no-op in local preview */ }
}

export function signalReady() {
  signalFirstFrame();
  signalGameReady();
}
