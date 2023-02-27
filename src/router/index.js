import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/'

import MainAppRendering from '@/pages/MainAppRendering.vue'
import Main from '@/pages/Main'
import Manager from '@/pages/Manager'
import Owner from '@/pages/Owner'
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
                meta: {auth: true, employ: true},
            },

            // Чат Менеджера(Модератора)
            {
                path: 'manager-tool/chat', 
                name: 'manager-chat', 
                meta: {auth: true, employ: true},
                component: () => import('@/pages/Chat.vue')
            },

            // Рабочая панель ВЛАДЕЛЬЦА
            {
                path: 'owner-tools', 
                name: 'owner', 
                meta: {auth: true, employ: true},
                component: Owner,
            },
            
            // Чат ВЛАДЕЛЬЦА
            {
                path: 'owner-tools/chat', 
                name: 'owner-chat', 
                meta: {auth: true, employ: true},
                component: () => import('@/pages/Chat.vue')
            },

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

async function verificateEmploy(){
    let isVerificate = false
    const ACCESS_TOKEN = (localStorage.getItem('ACCESS_TOKEN'))
    if(ACCESS_TOKEN){
        try{
            await axios.get(state.localhost + 'manager/verificate/', {
                headers: {
                    'Authorization': 'Bearer ' + ACCESS_TOKEN
                    }
            }).then(response => {
                isVerificate = true
            })
        }catch (e){
            return false
        }
    }else{
        router.push({name: 'auth_manager'})
    }
    return isVerificate
}
import axios from 'axios'

// router.beforeEach(async(to, from, next) => {
//     const employ = to.matched.some(record => record.meta.employ)
//     const requireAuth = to.matched.some(record => record.meta.auth)
//     if(requireAuth){
//         if(employ){
            
//         }
//     }

// })

export default router
