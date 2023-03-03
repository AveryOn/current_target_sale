// МОДУЛЬ ДЛЯ РАБОТЫ ВЛАДЕЛЬЦА САЙТА
export const OwnerModule = {
    state: () => ({
        isCreatedProduct: false,
        isEditorProduct: false,
        isCreatedGroup: false,
        isPromotion: false,
        isEvent: false,
        isShowManagerToolModal: false,
        // Сюда будет вставляться название выбранного блока инструментов
        selectToolName: '',
    }),
    mutations: {
        // ЗАКРЫТЫИЕ МОДАЛЬНОГO ОКНА ВМЕСТЕ С ПАНЕЛЯМИ ИНСТРУМЕНТОВ
        closeModal(state){
            state.isShowManagerToolModal = false
            state.isCreatedProduct = false
            state.isEditorProduct = false
            state.isCreatedGroup = false
            state.isPromotion = false
            state.isEvent = false
            state.selectToolName = ''
        },
        // ОКНО СОЗДАНИЯ НОВОГО ТОВАРА
        openCreator(state){
            state.isCreatedProduct = true
            state.selectToolName = 'Creating a product'
            state.isShowManagerToolModal = true
            console.log('Creator:', state.isCreatedProduct);
        },
        // ОКНО РЕДАКТИРОВАНИЯ СУЩЕСТВУЮЩЕГО ТОВАРА
        openEditor(state){
            state.isEditorProduct = true
            state.selectToolName = 'Edit a product'
            state.isShowManagerToolModal = true
            console.log('Editor: ', state.isEditorProduct)
        },
        // ОКНО СОЗДАНИЯ НОВОЙ ГРУППЫ ТОВАРА
        openCreateGroup(state){
            state.isCreatedGroup = true
            state.selectToolName = 'Creating a Group product'
            state.isShowManagerToolModal = true
            console.log('Group: ', state.isCreatedGroup)
        },
        // ОКНО АКЦИЙ
        openPromotion(state){
            state.isPromotion = true
            state.selectToolName = 'Announce a promotion'
            state.isShowManagerToolModal = true
            console.log('Promotion: ', state.isPromotion)
        },
        // ОКНО ОБЬЯВЛЕНИЙ СОБЫТИЙ
        openEvent(state){
            state.isEvent = true
            state.selectToolName = 'Announce a event'
            state.isShowManagerToolModal = true
            console.log('Event: ', state.isEvent)
        },
    },
    namespaced: true,
}