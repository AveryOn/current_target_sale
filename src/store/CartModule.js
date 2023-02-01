// ХРАНИЛИЩЕ ДЛЯ ФУНКЦИОНАЛА КОРЗИНЫ

export const CartModule = {
    state: () => ({
        // Режим удаления товаров с корзины
        deleteModeCart: false,

        // Режим удаления товаров с корзины. Для выбора всех товаров
        selectCartProduct: false,

        // Снимает всё выделение с товара
        removeSelectAll: false,
    }),
    mutations: {
        // Режим удаления товаров с корзины
        activateDeleteModeCart(state){
            state.deleteModeCart = !state.deleteModeCart
        },
        // Режим удаления товаров с корзины
        // Выбирает весь товар в корзине
        activeSelectCartProduct(state){
            state.selectCartProduct = true
        },
        // Режим удаления товаров с корзины
        // Выбирает весь товар в корзине
        changeRemoveCartProduct(state){
            state.selectCartProduct = false
            state.removeSelectAll = true
        },
        falseRemoveCArtProduct(state){
            state.removeSelectAll = false
        }
    },
    getters: {

    },
    actions: {

    },
    namespaced: true,
}