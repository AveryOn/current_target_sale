import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import MainAppRendering from '@/pages/MainAppRendering.vue'
import Main from '@/pages/Main'
import Auth from '@/pages/Auth'
import Manager from '@/pages/Manager'
import Owner from '@/pages/Owner'
import Chat from '@/pages/Chat'
import Product from '@/pages/Product'
import CatalogProducts from '@/pages/CatalogProducts'
import SortedCatalog from '@/components/CatalogPage/SortedCatalog'
import CategoryProducts from '@/components/CatalogPage/CategoryProducts'
import Cart from '@/pages/Cart'
import NotFound from '@/pages/NotFound'
const routes = [
  {
    path: (store.state.isAuth.isAuth)? '/'+store.state.isAuth.prefix+'/'+store.state.isAuth.id : '/',
    name: 'MainAppRendering',
    component: MainAppRendering,
    children: [
      {
        path: '',
        name: 'main',
        component: Main
      },
      {path: 'auth', name: 'auth', component: Auth},
      {path: 'manager-tools', name: 'manager', component:Manager},
      {path: 'manager-tool/chat', name: 'manager-chat', component: Chat},
      {path: 'owner-tools', name: 'owner', component: Owner},  
      {path: 'owner-tools/chat', name: 'owner-chat', component: Chat},
      {path: 'product', name: 'product', component: Product},
      {path: 'cart', name: 'cart', component: Cart},
      {
      path: 'catalog', 
      name: 'catalog', 
      component: CatalogProducts,
      children: [
        {
          path: '',
          name: 'category',
          component: CategoryProducts,
        },    
        {
          path: 'sorted',
          name: 'sorted',
          component: SortedCatalog,
        },
      ]
    },
    ]
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Роутер защита от перенаправления на страницу Модератора и Владельца 

// router.beforeEach(async (to) => {
//   if (store.state.isAuth.isAuth === false && to.name == 'owner') {
//     return { name: 'notFound' }
//   }
//   if (store.state.isAuth.prefix != 'owner' && to.name == 'owner'){
//     return { name: 'notFound' }
//   }
// })

// router.beforeEach(async (to) => {
//   if (store.state.isAuth.isAuth === false && to.name == 'manager') {
//     return { name: 'notFound' }
//   }
//   if (store.state.isAuth.prefix != 'manager' && to.name == 'manager'){
//     return { name: 'notFound' }
//   }
// })

export default router
