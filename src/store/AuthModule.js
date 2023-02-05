export const AuthModule = {
    state: () => ({
        isRegistration: true
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