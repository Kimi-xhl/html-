import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/MyView')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/DashBoard')
  }
]

const router = new VueRouter({
  routes
})

export default router
