export const ManagerModule = {
    state: () => ({
        isCreatedProduct: false,
    }),
    mutations: {
        openCreator(state){
            state.isCreatedProduct = true
            console.log('Creator:', state.isCreatedProduct);
        },
        closeCreator(state){
            state.isCreatedProduct = false
            console.log('Creator:', state.isCreatedProduct);
        }
    },
    namespaced: true,
}