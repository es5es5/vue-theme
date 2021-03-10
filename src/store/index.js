import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: {
      primary: '#00D231',
      secondary: '#46596C',
      font: '#000000',
      background: '#F0F0F0',
    }
  },
  mutations: {
    setThemePrimary (state, value) { state.theme.primary = value },
    setThemeSecondary (state, value) { state.theme.secondary = value },
    setThemeFont (state, value) { state.theme.font = value },
    setThemeBackground (state, value) { state.theme.background = value },
  },
  getters: {
    getTheme: state => state.theme,
  },
  actions: {
  },
  modules: {
  }
})
