// ХРАНИЛИЩЕ ДЛЯ ФУНКЦИОНАЛА КОРЗИНЫ

export const CartModule = {
    state: () => ({
        // Режим удаления товаров с корзины
        deleteModeCart: false
    }),
    mutations: {
        // Режим удаления товаров с корзины
        activateDeleteModeCart(state){
            state.deleteModeCart = !state.deleteModeCart
        }
    },
    getters: {

    },
    actions: {

    },
    namespaced: true,
}