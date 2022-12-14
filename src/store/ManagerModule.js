export const ManagerModule = {
    state: () => ({
        isCreatedProduct: false,
        isEditorProduct: false,
        isPromotion: false,
        isEvent: false,
        isShowManagerToolModal: false
    }),
    mutations: {
        closeModal(state){
            state.isShowManagerToolModal = false
            state.isCreatedProduct = false
            state.isEditorProduct = false
            state.isPromotion = false
            state.isEvent = false
        },
        // ОКНО СОЗДАНИЯ НОВОГО ТОВАРА
        openCreator(state){
            state.isCreatedProduct = true
            state.isShowManagerToolModal = true
            console.log('Creator:', state.isCreatedProduct);
        },
        closeCreator(state){
            state.isCreatedProduct = false
            state.isShowManagerToolModal = false
            console.log('Creator:', state.isCreatedProduct);
        },
        // ОКНО РЕДАКТИРОВАНИЯ СУЩЕСТВУЮЩЕГО ТОВАРА
        openEditor(state){
            state.isEditorProduct = true
            state.isShowManagerToolModal = true
            console.log('Editor: ', state.isEditorProduct)
        },
        closeEditor(state){
            state.isEditorProduct = false
            state.isShowManagerToolModal = false
            console.log('Editor: ', state.isEditorProduct)
        },
        // ОКНО АКЦИЙ
        openPromotion(state){
            state.isPromotion = true
            state.isShowManagerToolModal = true
            console.log('Promotion: ', state.isPromotion)
        },
        closePromotion(state){
            state.isPromotion = false
            state.isShowManagerToolModal = false
            console.log('Promotion: ', state.isPromotion)
        },
        // ОКНО ОБЬЯВЛЕНИЙ СОБЫТИЙ
        openEvent(state){
            state.isEvent = true
            state.isShowManagerToolModal = true
            console.log('Event: ', state.isEvent)
        },
        closeEvent(state){
            state.isEvent = false
            state.isShowManagerToolModal = false
            console.log('Event: ', state.isEvent)
        }

    },
    namespaced: true,
}