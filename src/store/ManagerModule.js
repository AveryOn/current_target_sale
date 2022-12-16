// ХРАНИИЩЕ ДЛЯ ДЕЙСТВИЙ ПО МОДЕРАЦИИ МАГАЗИНА
export const ManagerModule = {
    state: () => ({
        isCreatedProduct: false,
        isEditorProduct: false,
        isPromotion: false,
        isEvent: false,
    }),
    mutations: {
        // ОКНО СОЗДАНИЯ НОВОГО ТОВАРА
        openCreator(state){
            state.isCreatedProduct = true
            console.log('Creator:', state.isCreatedProduct);
        },
        closeCreator(state){
            state.isCreatedProduct = false
            console.log('Creator:', state.isCreatedProduct);
        },
        // ОКНО РЕДАКТИРОВАНИЯ СУЩЕСТВУЮЩЕГО ТОВАРА
        openEditor(state){
            state.isEditorProduct = true
            console.log('Editor: ', state.isEditorProduct)
        },
        closeEditor(state){
            state.isEditorProduct = false
            console.log('Editor: ', state.isEditorProduct)
        },
        // ОКНО АКЦИЙ
        openPromotion(state){
            state.isPromotion = true
            console.log('Promotion: ', state.isPromotion)
        },
        closePromotion(state){
            state.isPromotion = false
            console.log('Promotion: ', state.isPromotion)
        },
        // ОКНО ОБЬЯВЛЕНИЙ СОБЫТИЙ
        openEvent(state){
            state.isEvent = true
            console.log('Event: ', state.isEvent)
        },
        closeEvent(state){
            state.isEvent = false
            console.log('Event: ', state.isEvent)
        }
    },
    namespaced: true,
}