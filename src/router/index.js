import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/'

import MainAppRendering from '@/pages/MainAppRendering.vue'
import Main from '@/pages/Main'
import Manager from '@/pages/Manager'
import Owner from '@/pages/Owner'
import Chat from '@/pages/Chat'
import Product from '@/pages/Product'
import CatalogProducts from '@/pages/CatalogProducts'
import SortedCatalog from '@/components/CatalogPage/SortedCatalog'
import CategoryProducts from '@/components/CatalogPage/CategoryProducts'
import Cart from '@/pages/Cart'
import NotFound from '@/pages/NotFound'

// Поле isAuth в AuthModule (vuex)
const isAuth = store._modules.root.state.AuthModule.isAuth

const routes = [
    {
        // Роль пользователя подставляется в URL если он авторизован
        path: (isAuth.isAuth)? '/'+isAuth.prefix+'/'+isAuth.id : '/',
        // Контейнер для отображения основных компонентов
        name: 'MainAppRendering',
        component: MainAppRendering,
        children: [

            // Главная страница
            {
                path: '',
                name: 'main',
                component: Main
            },

            // Страница авторизации ПОЛЬЗОВАТЕЛЕЙ
            {path: 'auth', name: 'auth', component: () => import('@/pages/Auth.vue'),},

            // Страница авторизации СОТРУДНИКОВ
            {path: 'auth-manager', name: 'auth_manager', component: () => import('@/pages/AuthManager.vue')},

            // Рабочая панель Менеджера(Модератора)
            {
                path: 'manager-tools', 
                name: 'manager', 
                component: Manager,
                meta: {auth: {isAuth: true, role: 'manager'}}
            },

            // Чат Менеджера(Модератора)
            {
                path: 'manager-tool/chat', 
                name: 'manager-chat', 
                component: Chat
            },

            // Рабочая панель ВЛАДЕЛЬЦА
            {path: 'owner-tools', name: 'owner', component: Owner},
            
            // Чат ВЛАДЕЛЬЦА
            {path: 'owner-tools/chat', name: 'owner-chat', component: Chat},

            // Страница товара
            {
                path: 'product/:productId?', 
                name: 'product',
                component: Product
            },
            
            // Корзина
            {path: 'cart', name: 'cart', component: Cart},
            
            // Каталог товара
            {
                path: 'catalog', 
                name: 'catalog', 
                component: CatalogProducts,
                children: [

                    // Компонент с Категориями товра
                    {
                        path: '',
                        name: 'category',
                        component: CategoryProducts,
                    },
                    // Компонент с выбранным товаром
                    {
                        path: 'sorted',
                        name: 'sorted',
                        component: SortedCatalog,
                    },
                ]
            },
        ]
    },
    
    // СТРАНИЦА 404
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
//     if (store.state.isAuth.isAuth === false && to.name == 'owner') {
//         return { name: 'notFound' }
//     }
//     if (store.state.isAuth.prefix != 'owner' && to.name == 'owner'){
//         return { name: 'notFound' }
//     }
// })

// router.beforeEach(async (to) => {
//     if (store.state.isAuth.isAuth === false && to.name == 'manager') {
//         return { name: 'notFound' }
//     }
//     if (store.state.isAuth.prefix != 'manager' && to.name == 'manager'){
//         return { name: 'notFound' }
//     }
// })

export default router
