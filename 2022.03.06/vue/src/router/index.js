import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 注册路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/DashBoard')
  },
  {
    path: '/MyView',
    name: 'dashboard',
    component: () => import('@/views/MyView')
  }
]

const router = new VueRouter({
  routes
})

export default router
