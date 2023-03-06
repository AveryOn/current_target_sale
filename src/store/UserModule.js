// МОДУЛЬ ДЛЯ РАБОТЫ ПОЛЬЗОВАТЕЛЯ САЙТА
import store from "@/store"
import router from '@/router'
import axios from 'axios'

export const UserModule = {
    state: () => ({
        
        // Токен доступа
        ACCESS_TOKEN: (localStorage.getItem('ACCESS_TOKEN'))? localStorage.getItem('ACCESS_TOKEN') : null,

        userData: (JSON.parse(localStorage.getItem('userData')))? JSON.parse(localStorage.getItem('userData')) : {},

    }),
    mutations: {
        changeUserData(state, newValue){
            state.userData = {...newValue}
        }
    },

    getters: {},

    actions: {

        // ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ
        async getDataUser({state, commit}){
            if(!JSON.parse(localStorage.getItem('userData'))){
                try{
                    let data
                    store.commit('showLoading')
                    await axios.get(store.state.AuthModule.localhost + 'user/me/', {
                        headers: {
                            'Authorization': 'Bearer ' + state.ACCESS_TOKEN
                        }
                    }).then(response => {
                        commit('changeUserData', response.data)
                        localStorage.setItem('userData', JSON.stringify(response.data))
                        data = response.data
                    })
        
                    return data
                }
                catch (e){
                    console.log(e);
                    router.push({name: 'notFound'})
                }
                finally{
                    store.commit('hideLoading')
                }
            }else{
                return state.userData
            }
        },

        // ПРОВЕРКА СУЩЕСТВУЮЩИЙ EMAIL ПОЛЬЗОВАТЕЛЯ
        async checkEmailUser({state}, {email}){
            if(state.userData){
                let data = {status: null, detail: null}
                try{
                    store.commit('showLoading')
                    await axios.post(store.state.AuthModule.localhost + `user/${state.userData.id}/check-email/`, {
                        email: email
                    }).then(response => {
                        data = {status: true, detail: 'successful'}
                    })
                    return data
                }
                catch (e){
                    if(e?.response?.data){
                        data = {status: false, detail: e.response.data.detail}
                        return data
                    }
                }
                finally{
                    store.commit('hideLoading')
                }
            }
        },

        // ПРОВЕРКА СУЩЕСТВУЮЩИЙ EMAIL ПОЛЬЗОВАТЕЛЯ
        async checkUsernameUser({state}, {username}){
            if(state.userData){
                let data = {status: null, detail: null}
                try{
                    store.commit('showLoading')
                    await axios.post(store.state.AuthModule.localhost + `user/${state.userData.id}/check-username/`, {
                        username: username
                    }).then(response => {
                        data = {status: true, detail: 'successful'}
                    })
                    return data
                }
                catch (e){
                    if(e?.response){
                        data = {status: false, detail: e.response.data.detail}
                        return data
                    }
                }
                finally{
                    store.commit('hideLoading')
                }
            }
        },

    },

    namespaced: true,
} 