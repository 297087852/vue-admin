import Vue from 'vue'
import VueRouter from 'vue-router'

const layout = () => import('@/layout')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    hidden: true,
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login')
  },
  {
    path: '/dashboard',
    component: layout,
    children: [
      {
        path: '',
        name: '首页',
        icon: 'menu_dashboard',
        component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard')
      }
    ]
  },
  {
    path: '/table',
    component: layout,
    children: [
      {
        path: '',
        name: '表格',
        icon: 'menu_table',
        component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/table')
      }
    ]
  }
]

export { routes }

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
