import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main'
import Auth from '@/pages/Auth'
import Manager from '@/pages/Manager'
import Owner from '@/pages/Owner'
import ChatModerator from '@/components/ManagerPage/ChatModerator'

const routes = [
  {path: '/', component: Main},
  {path: '/auth', component: Auth},
  {path: '/manager', component:Manager},
  {path: '/manager/chat', component: ChatModerator},
  {path: '/owner', component: Owner},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
