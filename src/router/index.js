import Vue from 'vue'
import VueRouter from 'vue-router'

const layout = () => import('@/layout')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login')
  },
  {
    path: '/dashboard',
    component: layout,
    children: [
      {
        path: '',
        name: '首页',
        component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
