import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login')
  },
  {
    path: '/dashboard',
    component: () => import('@/layout'),
    children: [
      {
        path: '',
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
