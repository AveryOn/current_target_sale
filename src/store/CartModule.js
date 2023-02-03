// ХРАНИЛИЩЕ ДЛЯ ФУНКЦИОНАЛА КОРЗИНЫ

export const CartModule = {
    state: () => ({
        // Режим удаления товаров с корзины
        deleteModeCart: false,

        // Режим удаления товаров с корзины. Для выбора всех товаров
        selectCartProduct: false,
        selectCartProduct_prefix: false,

        // Снимает всё выделение с товара
        removeSelectAll: false,
        
    }),
    _mutations: {
        // Режим удаления товаров с корзины
        activateDeleteModeCart(state) {
            state.deleteModeCart = !state.deleteModeCart
        },
        // Режим удаления товаров с корзины
        // Выбирает весь товар в корзине
        activeSelectCartProduct(state) {
            state.selectCartProduct = true
        },
        // меняет state.selectCartProduct
        falseSelectCartProduct(state) {
            state.selectCartProduct = false
        },
        // Режим удаления товаров с корзины
        // Выбирает весь товар в корзине
        changeRemoveCartProduct(state) {
            state.selectCartProduct = false
            state.removeSelectAll = true
        },
        falseRemoveCartProduct(state) {
            state.removeSelectAll = false
        }
    },
    get mutations() {
        return this._mutations
    },
    set mutations(value) {
        this._mutations = value
    },
    getters: {

    },
    actions: {

    },
    namespaced: true,
}