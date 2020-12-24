import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: {
      primary: '#50C18B',
      secondary: '#46596C',
    }
  },
  mutations: {
    setTheme (state, value) { state.app = value },
  },
  actions: {
  },
  modules: {
  }
})
