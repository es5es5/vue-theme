import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: {
      primary: '#00d231',
      secondary: '#46596C',
    }
  },
  mutations: {
    setThemePrimary (state, value) { state.theme.primary = value },
    setThemeSecondary (state, value) { state.theme.secondary = value },
  },
  getters: {
    getTheme: state => state.theme,
  },
  actions: {
  },
  modules: {
  }
})
