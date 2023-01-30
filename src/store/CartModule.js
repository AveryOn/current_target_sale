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
        // Режим ужаления товаров с корзины
        // Выбирает весь товар в корзине
        changeSelectCartProduct(state){
            state.selectCartProduct = !state.selectCartProduct
        },
        // Режим ужаления товаров с корзины
        // Выбирает весь товар в корзине
        changeRemoveCartProduct(state){
            state.removeSelectAll = !state.removeSelectAll
            console.log('changeRemoveCartProduct');
        },
    },
    getters: {

    },
    actions: {

    },
    namespaced: true,
}