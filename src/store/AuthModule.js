// МОДУЛЬ ДЛЯ АВТОРИЗАЦИИ, РЕГИСТРАЦИИ, И ВЕРИФИКАЦИИ КЛИЕНТОВ (ПОЛЬЗОВАТЕЛЕЙ И СОТРУДНИКОВ)
import axios from 'axios'
import router from '@/router'
import store from '@/store'

export const AuthModule = {
    state: () => ({

        // Обьект для отображения уведомления об ошибке авторизации
        error: {isError: false, data: null},

        // Поле для допуска к аутентифицированным ресурсам
        isAuth: {isAuth: false, role: null, id: null},
        // Модель для отображения окна РЕГИСТРАЦИИ на странице 'Auth'
        isRegistration: false,

        // Хост-Сервер
        localhost: 'http://127.0.0.1:8000/',

        // Токен доступа
        ACCESS_TOKEN: (localStorage.getItem('ACCESS_TOKEN'))? localStorage.getItem('ACCESS_TOKEN') : null,
    }),

    mutations:{
        openRegBlock(state){
            state.isRegistration = true
        },
        closeRegBlock(state){
            state.isRegistration = false
        },
        changeIsAuth(state, newValue){
            state.isAuth = newValue
        },
        changeACCESS_TOKEN(state, newValue){
            state.ACCESS_TOKEN = newValue
        },
        errorTrue(state, newValue){
            state.error = newValue
        },
        errorFalse(state){
            state.error = {isError: false, data: null}
        }
    },

    actions: {
        
        // РЕГИСТРАЦИЯ НОВОГО ПОЛЬЗОВАТЕЛЯ
        async registrationUser({state, commit}, {email, username, password}){
            try{
                store.commit('showLoading')
                await axios.post(state.localhost + 'user/registration/', {
                  email: email,
                  username: username, 
                  password: password,
                  creation_time: JSON.stringify(Date.now()),
                }).then(res => {
                  console.log(res);
                  window.location.reload()
                })
              }catch (e){
                console.log(e);
              }finally{
                store.commit('hideLoading')
              }
        },

        // АВТОРИЗАЦИЯ ПОЛЬЗОВАТЕЛЯ
        async authUser({state, commit}, {login, password}){
            if(
                login === '' ||
                password === ''
            ){
                commit('errorTrue', {isError: true, data: 'Заполните все поля формы!'})
                setTimeout(() => {
                    commit('errorFalse')
                }, 2500)
            }else{
                try{
                    store.commit('showLoading')
                    console.log('spin');
                        await axios.post(state.localhost + 'login-user/', {
                            username: login, 
                            password: password,
                        }).then(response =>{
                            commit('changeACCESS_TOKEN', response.data[0].access_token)
                            localStorage.setItem('ACCESS_TOKEN' ,response.data[0].access_token)
                            commit('changeIsAuth', {isAuth: true, role: response.data[1].role, id: response.data[1].user_id})
                            localStorage.setItem('isAuth', JSON.stringify(state.isAuth))
                            router.push(`/${response.data[1].role}/response.data[1].user_id`)
                            window.location.reload()
                            console.log(response);
                        })
                  }
                  catch (e){
                    console.log(e);
                  }
                  finally{
                    store.commit('hideLoading')
                  }
            }
        },

        // ВЕРИФИКАЦИЯ ПОЛЬЗОВАТЕЛЯ ПО ТОКЕНУ
        async verificateUserByToken({state, commit}){
            const ACCESS_TOKEN = (localStorage.getItem('ACCESS_TOKEN'))
            if(ACCESS_TOKEN){
                try{
                    store.commit("showLoading")
                    await axios.get(state.localhost + 'user/verificate/', {
                        headers: {
                            'Authorization': 'Bearer ' + ACCESS_TOKEN
                          }
                    }).then(response => {
                        commit('changeIsAuth', {isAuth: true, role: response.data.role, id: response.data.id})
                        localStorage.setItem('isAuth', JSON.stringify(state.isAuth))
                    })
                }catch (e){
                    console.log(e);
                    localStorage.removeItem('ACCESS_TOKEN')
                    localStorage.removeItem('isAuth')
                    window.location.reload()
                }finally{
                    store.commit("hideLoading")
                }
            }else{
                console.log('ACCESS_TOKEN - empty!');
            }
        },

        // ВЕРИФИКАЦИЯ СОТРУДНИКА ПО ТОКЕНУ
        async verificateEmployByToken({state, commit}){
            const ACCESS_TOKEN = (localStorage.getItem('ACCESS_TOKEN'))
            if(ACCESS_TOKEN){
                try{
                    store.commit("showLoading")
                    await axios.get(state.localhost + 'manager/verificate/', {
                        headers: {
                            'Authorization': 'Bearer ' + ACCESS_TOKEN
                          }
                    }).then(response => {
                        commit('changeIsAuth', {isAuth: true, role: response.data.role, id: response.data.UUID})
                        localStorage.setItem('isAuth', JSON.stringify({isAuth: true, role: response.data.role, id: response.data.UUID}))
                        return state.isAuth
                    })
                }catch (e){
                    localStorage.removeItem('ACCESS_TOKEN')
                    localStorage.removeItem('isAuth')
                    window.location.reload()
                }finally{
                    store.commit("hideLoading")
                }
            }else{
                // console.log('ACCESS_TOKEN - empty!');
            }
        },

        // АВТОРИЗАЦИЯ СОТРУДНИКА
        async authEmploy({state, commit}, {formData}){
            // Если хотябы одно поле формы пустое, то появляется уведомление
            if(
                formData.UUID === '' ||
                formData.KEY_ACCESS === '' ||
                formData.username === '' ||
                formData.password === ''
            ){
                commit('errorTrue', {isError: true, data: 'Заполните все поля формы!'})
                setTimeout(() => {
                    commit('errorFalse')
                }, 2500)
            }
            else{
                try{
                    store.commit("showLoading")
                    await axios.post(state.localhost + 'login-service-person/', {
                        UUID: formData.UUID,
                        KEY_ACCESS: formData.KEY_ACCESS,
                        username: formData.username,
                        password: formData.password,
                    }).then(response => {
                        localStorage.setItem('ACCESS_TOKEN' ,response.data[0].access_token)
                        commit('changeIsAuth', {isAuth: true, role: response.data[1].role, id: response.data[1].UUID})
                        localStorage.setItem('isAuth', JSON.stringify(state.isAuth))
                        commit('changeACCESS_TOKEN', response.data[0].access_token)
                        if(response.data[1].role === 'manager'){
                            router.push(`/manager/${response.data[1].UUID}/manager-tools`)
                        }
                        else if(response.data[1].role === 'owner'){
                            router.push(`/owner/${response.data[1].UUID}/owner-tools`)
                        }
                        setTimeout(() => {
                            window.location.reload()
                        }, 500)
                    })
                }catch (e){
                    commit('errorTrue', {isError: true, data: e?.response?.data?.detail})
                    setTimeout(() => {
                        commit('errorFalse')
                    }, 2500)
                    console.log(e);
                }finally{
                    store.commit("hideLoading")
                }
            }
        }
    },
    namespaced: true,
}