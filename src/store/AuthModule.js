import axios from 'axios'

export const AuthModule = {
    state: () => ({
        // Поле для допуска к аутентифицированным ресурсам
        isAuth: {isAuth: false, role: null, id: null},
        // Модель для отображения окна РЕГИСТРАЦИИ на странице 'Auth'
        isRegistration: false,

        // Хост-Сервер
        localhost: 'http://127.0.0.1:8000/',
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
        }
    },
    actions: {
        // АВТОРИЗАЦИЯ СОТРУДНИКОВ
        async authEmploy({state, commit}, {formData}){
            try{
                await axios.post(state.localhost + 'login-service-person/', {
                    UUID: formData.UUID,
                    KEY_ACCESS: formData.KEY_ACCESS,
                    username: formData.username,
                    password: formData.password,
                }).then(response => {
                    console.log(response);
                })
            }catch (e){
                console.log(e);
            }
        }
    },
    namespaced: true,
}