import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main'
import Auth from '@/pages/Auth'
import Manager from '@/pages/Manager'
import Owner from '@/pages/Owner'
import ChatModerator from '@/components/ManagerPage/ChatModerator'
import Product from '@/pages/Product'
import CatalogProducts from '@/pages/CatalogProducts'
import NotFound from '@/pages/NotFound'
const prefix = 'owner'
const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {path: '/auth', component: Auth},
  {path: '/manager', component:Manager},
  {path: '/manager/chat', name: 'chat', component: ChatModerator},
  {path: '/owner', name: 'owner', component: Owner},  
  {path: '/product', name: 'product', component: Product},
  {path: '/catalog', name: 'catalog', component: CatalogProducts},
  {
    path: '/404',
    name: 'notFound',
    component: NotFound,
  }
  // {
    //   path: '/owner',
    //   name: 'ownerMain',
    //   component: Owner,
    // },
    //   {
    //     path: '/owner/chat', 
    //     name: 'owner',
    //     component: ChatModerator,
    //     beforeEnter: (to, from, next) => {
    //       if (prefix == 'owner'){
    //         next()
    //       }else{
    //         next({name: 'notFound'})
    //       }
    //     }
    // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async (to, from) => {
  if (prefix != 'manager' && to.name == 'chat') {
    return { name: 'notFound' }
  }
})

export default router
