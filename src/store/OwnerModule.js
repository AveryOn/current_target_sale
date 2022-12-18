// ХРАНИЛИЩЕ ДЛЯ СТРАНИЦЫ ВЛАДЕЛЬЦА САЙТА
export const OwnerModule = {
    state: () => ({
        isCreatedProduct: false,
        isEditorProduct: false,
        isCreatedGroup: false,
        isPromotion: false,
        isEvent: false,
        isShowManagerToolModal: false,
    }),
    mutations: {
        // ЗАКРЫТЫИЕ МОДАЛЬНОГОКНА ВМЕСТЕ С ПАНЕЛЯМИ ИНСТРУМЕНТОВ
        closeModal(state){
            state.isShowManagerToolModal = false
            state.isCreatedProduct = false
            state.isEditorProduct = false
            state.isCreatedGroup = false
            state.isPromotion = false
            state.isEvent = false
        },
        // ОКНО СОЗДАНИЯ НОВОГО ТОВАРА
        openCreator(state){
            state.isShowManagerToolModal = true
            state.isCreatedProduct = true
            console.log('Creator:', state.isCreatedProduct);
        },
        // ОКНО РЕДАКТИРОВАНИЯ СУЩЕСТВУЮЩЕГО ТОВАРА
        openEditor(state){
            state.isEditorProduct = true
            state.isShowManagerToolModal = true
            console.log('Editor: ', state.isEditorProduct)
        },
        // ОКНО СОЗДАНИЯ НОВОЙ ГРУППЫ ТОВАРА
        openCreateGroup(state){
            state.isCreatedGroup = true
            state.isShowManagerToolModal = true
            console.log('Group: ', state.isCreatedGroup)
        },
        // ОКНО АКЦИЙ
        openPromotion(state){
            state.isPromotion = true
            state.isShowManagerToolModal = true
            console.log('Promotion: ', state.isPromotion)
        },
        // ОКНО ОБЬЯВЛЕНИЙ СОБЫТИЙ
        openEvent(state){
            state.isEvent = true
            state.isShowManagerToolModal = true
            console.log('Event: ', state.isEvent)
        },
    },
    namespaced: true,
}