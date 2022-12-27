import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main'
import Auth from '@/pages/Auth'
import Manager from '@/pages/Manager'
import Owner from '@/pages/Owner'
import ChatModerator from '@/components/ManagerPage/ChatModerator'
import Product from '@/pages/Product'
import CatalogProducts from '@/pages/CatalogProducts'
import SortedCatalog from '@/components/CatalogPage/SortedCatalog'
import CategoryProducts from '@/components/CatalogPage/CategoryProducts'
import Cart from '@/pages/Cart'
import NotFound from '@/pages/NotFound'
const prefix = 'owner'
const routes = [
  {
    path: '/:username?/',
    name: 'main',
    component: Main,
  },
  {path: '/auth', name: 'auth', component: Auth},
  {path: '/manager', name: 'manager', component:Manager},
  {path: '/manager/chat', name: 'chat', component: ChatModerator},
  {path: '/owner', name: 'owner', component: Owner},  
  {path: '/product', name: 'product', component: Product},

  {
  path: '/catalog', 
  name: 'catalog', 
  component: CatalogProducts,
  children: [
    {
      path: 'category',
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

  {path: '/cart', name: 'cart', component: Cart},
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
