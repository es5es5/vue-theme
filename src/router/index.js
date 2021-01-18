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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
