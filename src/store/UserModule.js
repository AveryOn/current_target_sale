// МОДУЛЬ ДЛЯ РАБОТЫ ПОЛЬЗОВАТЕЛЯ САЙТА
export const UserModule = {
    state: () => ({

    }),
    mutations: {

    },

    getters: {},

    actions: {

    // ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ
    async getDataUser({state, commit}){
        try{
            store.commit('showLoading')
            await axios.get(state.localhost + 'user/me/').then(response =>{
                console.log(response);
                // commit('changeACCESS_TOKEN', response.data[0].access_token)
                // localStorage.setItem('ACCESS_TOKEN' ,response.data[0].access_token)
                // commit('changeIsAuth', {isAuth: true, role: response.data[1].role, id: response.data[1].user_id})
                // localStorage.setItem('isAuth', JSON.stringify(state.isAuth))
                // router.push(`/${response.data[1].role}/response.data[1].user_id`)
                // window.location.reload()
                // console.log(response);
            })
        }
        catch (e){
            console.log(e);
        }
        finally{
            store.commit('hideLoading')
        }
    },

    },

    namespaced: true,
} 