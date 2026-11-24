// Persistência local (LocalStorage) + Cache Offline por Nível
const STORAGE_KEY = 'falafacil_state_v1';
const LEVEL_PREFIX = 'falafacil_level_data_';

const DEFAULT_STATE = {
  streak: 0,
  lastStudyDate: null,
  todayMinutes: 0,
  dailyGoal: 15,
  accent: 'en-US',
  voiceGender: 'female', // 'female' | 'male'
  rate: 0.95,
  completedLessons: {},  // { lessonId: stars (1-3) }
  favorites: [],         // array of English phrases
  unlockAll: false       // modo teste
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

  // Armazenamento offline por nível
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

  getDownloadedLevels() {
    const list = [];
    for (let i = 1; i <= 6; i++) {
      if (this.isLevelDownloaded(i)) list.push(i);
    }
    return list;
  },

  removeLevelData(levelNum) {
    localStorage.removeItem(LEVEL_PREFIX + levelNum);
  },

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    return { ...DEFAULT_STATE };
  }
};
