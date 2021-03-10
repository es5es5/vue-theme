import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: {
      primary: '#00D231',
      secondary: '#46596C',
      font: '#000000',
      border: '#F0F0F0',
    }
  },
  mutations: {
    setThemePrimary (state, value) { state.theme.primary = value },
    setThemeSecondary (state, value) { state.theme.secondary = value },
    setThemeFont (state, value) { state.theme.font = value },
    setThemeBorder (state, value) { state.theme.border = value },
  },
  getters: {
    getTheme: state => state.theme,
  },
  actions: {
  },
  modules: {
  }
})
