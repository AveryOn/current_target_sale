export const AuthModule = {
    state: () => ({
        // Поле для допуска к аутентифицированным ресурсам
        isAuth: {isAuth: false, role: null, id: null},
        // Модель для отображения окна РЕГИСТРАЦИИ на странице 'Auth'
        isRegistration: false
    }),
    mutations:{
        openRegBlock(state){
            state.isRegistration = true
        },
        closeRegBlock(state){
            state.isRegistration = false
        }
    },
    actions: {
        
        },
    namespaced: true,
}