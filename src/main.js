import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MIXSINS from './js/mixins'

import './plugins'

Vue.use(MIXSINS)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
