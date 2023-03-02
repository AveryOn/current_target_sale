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
let isAuth = {isAuth: false, role: null, id: null}
const isAuth_localStorage = JSON.parse(localStorage.getItem('isAuth'))
if(isAuth_localStorage){
    isAuth = isAuth_localStorage
}

const routes = [
    {
        // Роль пользователя подставляется в URL если он авторизован
        path: (isAuth.isAuth)? '/'+isAuth.role+'/'+isAuth.id : '/',
        // Контейнер для отображения основных компонентов
        name: 'MainAppRendering',
        component: MainAppRendering,
        children: [

            // Главная страница
            {
                path: '',
                name: 'main',
                component: Main,
                meta: {auth: false},
            },

            // Страница авторизации ПОЛЬЗОВАТЕЛЕЙ
            {
                path: 'auth', 
                name: 'auth', 
                component: () => import('@/pages/Auth.vue'),
            },

            // Страница авторизации СОТРУДНИКОВ
            {
                path: 'auth-manager', 
                name: 'auth_manager', 
                component: () => import('@/pages/AuthManager.vue')
            },

            // Страница данных пользователя/сотрудника (Аккаунт клиента)
            {
                path: 'me', 
                name: 'account', 
                meta: {auth: true}, 
                component: () => import('@/pages/Account.vue'),
            },

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

store.commit('changeRoutes', routes)



// Роутер защита от перенаправления на страницу Модератора и Владельца 
// Также от перенаправления на аккаунт пользователя/сотрудника
router.beforeEach(async(to, from) => {
    const employ = to.matched.some(record => record.meta.employ)
    const requireAuth = to.matched.some(record => record.meta.auth)
    if(requireAuth){
        const auth = JSON.parse(localStorage.getItem('isAuth'))
        if(employ){
             // если маршрут имеет мета-свойство auth=true  и  мета-свойство employ = true
            if(!auth){
                return {name: 'notFound'}
            }
            if(auth && auth.isAuth && localStorage.getItem('ACCESS_TOKEN')){
                return true
            }
        }
        // если маршрут имеет мета-свойство auth=true
        if(!auth){
            return {name: 'notFound'}
        }
        if(auth && auth.isAuth && localStorage.getItem('ACCESS_TOKEN')){
            return true
        }
    }
})

export default router
