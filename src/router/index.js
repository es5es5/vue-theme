import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('../components/Example'),
  },
  {
    path: '/emxample/pines2',
    name: 'Pines2',
    component: () => import('@/templates/pines2/Pines2'),
  },
  {
    path: '/emxample/t-system',
    name: 'TSystem',
    component: () => import('@/templates/tSystem/TSystem'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'Vue Theme'
  next()
})

export default router
