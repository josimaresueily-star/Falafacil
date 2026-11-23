// Persistência local (LocalStorage) — Zero backend necessário no Cloudflare Pages
const STORAGE_KEY = 'falafacil_state_v1';

const DEFAULT_STATE = {
  streak: 0,
  lastStudyDate: null,
  todayMinutes: 0,
  dailyGoal: 15,
  accent: 'en-US',
  rate: 0.95,
  completedLessons: {}, // { lessonId: stars (1-3) }
  favorites: [],        // array of English phrases
  unlockAll: false      // modo teste (desbloqueia todas as lições e níveis)
};

window.AppStorage = {
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = { ...DEFAULT_STATE, ...JSON.parse(raw) };
      // Reset todayMinutes if it's a new calendar day
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

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    return { ...DEFAULT_STATE };
  }
};
