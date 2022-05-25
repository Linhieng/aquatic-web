import { createRouter, createWebHistory } from 'vue-router'
import Home from '../layout/Home.vue'
import Login from '../views/Login/index'

import UploadMsg from '../components/UploadMsg/index.vue'
// const UploadMsg = () => import('../components/UploadMsg/index.vue')
import InquireMsg from '../components/InquireMsg/index.vue'
// const InquireMsg = () => import('../components/InquireMsg/index.vue')
import StatisticsMsg from '../components/StatisticsMsg/index.vue'
// const StatisticsMsg = () => import('../components/StatisticsMsg/index.vue')
import ShowMap from '../components/ShowMap/index.vue'
// const ShowMap = () => import('../components/ShowMap/index.vue')
import UserMsg from '../components/UserMsg/index.vue'
// const UserMsg = () => import('../components/UserMsg/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/login', // 重定向登录
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    redirect: '/uploadMsg',
    component: Home,
    children: [
      {path: '/uploadMsg', component: UploadMsg},
      {path: '/inquireMsg', component: InquireMsg},
      {path: '/statisticsMsg', component: StatisticsMsg},
      {path: '/showMap', component: ShowMap},
      {path: '/userMsg', component: UserMsg},
    ],
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
