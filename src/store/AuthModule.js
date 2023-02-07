export const AuthModule = {
    state: () => ({
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
    namespaced: true,
}