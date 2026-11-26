// Persistência local (LocalStorage) + Cache Offline por Nível + Backup/Restore
const STORAGE_KEY = 'falafacil_state_v1';
const LEVEL_PREFIX = 'falafacil_level_data_';
const DATA_VERSION_KEY = 'falafacil_data_version';
const CURRENT_DATA_VERSION = '10.3';

const DEFAULT_STATE = {
  streak: 0,
  lastStudyDate: null,
  todayMinutes: 0,
  dailyGoal: 15,
  accent: 'en-US',
  voiceGender: 'female',
  rate: 0.95,
  completedLessons: {},     // { lessonId: stars (1-3) }
  completedCheckpoints: {}, // { levelNum: bestPct }
  frequentErrors: [],       // array of { en, pt, tip, category, level }
  favorites: [],            // array of English phrases
  micMutedUntil: 0,         // timestamp ms (pular microfone por 15 min)
  unlockAll: false          // modo teste
};

window.AppStorage = {
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = { ...DEFAULT_STATE, ...JSON.parse(raw) };
      const today = new Date().toISOString().slice(0, 10);
      if (parsed.lastStudyDate && parsed.lastStudyDate !== today) {
        parsed.todayMinutes = 0;
      }
      return parsed;
    } catch {
      return { ...DEFAULT_STATE };
    }
  },

  save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Erro ao salvar estado:', e);
    }
  },

  recordStudy(state, minutes = 5) {
    const today = new Date().toISOString().slice(0, 10);
    if (state.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      state.streak = state.lastStudyDate === yesterday ? state.streak + 1 : 1;
      state.lastStudyDate = today;
      state.todayMinutes = minutes;
    } else {
      state.todayMinutes += minutes;
    }
    this.save(state);
    return state;
  },

  recordErrorPhrase(state, phraseObj, meta = {}) {
    if (!phraseObj || !phraseObj.en) return;
    if (!Array.isArray(state.frequentErrors)) state.frequentErrors = [];
    const exists = state.frequentErrors.some((e) => e.en === phraseObj.en);
    if (!exists) {
      state.frequentErrors.unshift({
        en: phraseObj.en,
        pt: phraseObj.pt,
        tip: phraseObj.tip || '',
        category: meta.category || phraseObj.category || 'Revisão',
        level: meta.level || phraseObj.level || 1
      });
      if (state.frequentErrors.length > 40) state.frequentErrors.pop();
      this.save(state);
    }
  },

  removeErrorPhrase(state, enText) {
    if (!Array.isArray(state.frequentErrors)) return;
    state.frequentErrors = state.frequentErrors.filter((e) => e.en !== enText);
    this.save(state);
  },

  // Armazenamento offline por nível (1..7)
  getLevelData(levelNum) {
    try {
      const raw = localStorage.getItem(LEVEL_PREFIX + levelNum);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  saveLevelData(levelNum, scenariosArray) {
    try {
      localStorage.setItem(LEVEL_PREFIX + levelNum, JSON.stringify(scenariosArray));
      return true;
    } catch (e) {
      console.warn('Erro ao salvar nível offline:', e);
      return false;
    }
  },

  isLevelDownloaded(levelNum) {
    return localStorage.getItem(LEVEL_PREFIX + levelNum) !== null;
  },

  getDataVersion() {
    return localStorage.getItem(DATA_VERSION_KEY) || '';
  },

  setDataVersion(ver = CURRENT_DATA_VERSION) {
    try {
      localStorage.setItem(DATA_VERSION_KEY, ver);
    } catch {}
  },

  needsDataRefresh() {
    return this.getDataVersion() !== CURRENT_DATA_VERSION;
  },

  // Backup em Código Curto (Base64 UTF-8) ou Arquivo JSON
  exportBackupCode(state) {
    const json = JSON.stringify(state);
    return btoa(unescape(encodeURIComponent(json)));
  },

  importBackupCode(code) {
    const trimmed = (code || '').trim();
    let parsed = null;
    if (trimmed.startsWith('{')) {
      parsed = JSON.parse(trimmed);
    } else {
      const json = decodeURIComponent(escape(atob(trimmed)));
      parsed = JSON.parse(json);
    }
    if (!parsed || typeof parsed !== 'object' || !('completedLessons' in parsed)) {
      throw new Error('Formato inválido');
    }
    const merged = { ...DEFAULT_STATE, ...parsed };
    this.save(merged);
    return merged;
  },

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    return { ...DEFAULT_STATE };
  }
};
