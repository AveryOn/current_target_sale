// ХРАНИИЩЕ ДЛЯ ДЕЙСТВИЙ ПО МОДЕРАЦИИ МАГАЗИНА
export const ManagerModule = {
    state: () => ({
        isCreatedProduct: true,
        isCreatedGroup: false,
        isEditorProduct: false,
        isPromotion: false,
        isEvent: false,
        // Сюда будет вставляться название выбранного блока инструментов
        selectToolName: '',
    }),
    mutations: {
        // Функция закрытия открытых инструментов
        closeAllTools(state){
            state.isCreatedProduct = true
            state.isCreatedGroup = false
            state.isEditorProduct = false
            state.isPromotion = false
            state.isEvent = false,
            state.selectToolName = ''
        },
        // ОКНО СОЗДАНИЯ НОВОГО ТОВАРА
        openCreator(state){
            state.selectToolName = 'Creating a product'
            state.isCreatedProduct = true
            console.log('Creator:', state.isCreatedProduct);
        },
        closeCreator(state){
            state.isCreatedProduct = false
            state.selectToolName = ''
            console.log('Creator:', state.isCreatedProduct);
        },
        // ОКНО РЕДАКТИРОВАНИЯ СУЩЕСТВУЮЩЕГО ТОВАРА
        openEditor(state){
            state.selectToolName = 'Edit a product'
            state.isEditorProduct = true
            console.log('Editor: ', state.isEditorProduct)
        },
        closeEditor(state){
            state.isEditorProduct = false
            state.selectToolName = ''
            console.log('Editor: ', state.isEditorProduct)
        },
        // ОКНО СОЗДАНИЯ НОВОЙ ГРУППЫ ТОВАРА
        openCreateGroup(state){
            state.selectToolName = 'Creating a Group product'
            state.isCreatedGroup = true
            console.log('Editor: ', state.isEditorProduct)
        },
        closeCreateGroup(state){
            state.isCreatedGroup = false
            state.selectToolName = ''
            console.log('Editor: ', state.isEditorProduct)
        },
        // ОКНО АКЦИЙ
        openPromotion(state){
            state.selectToolName = 'Announce a promotion'
            state.isPromotion = true
            console.log('Promotion: ', state.isPromotion)
        },
        closePromotion(state){
            state.isPromotion = false
            state.selectToolName = ''
            console.log('Promotion: ', state.isPromotion)
        },
        // ОКНО ОБЬЯВЛЕНИЙ СОБЫТИЙ
        openEvent(state){
            state.selectToolName = 'Announce a event'
            state.isEvent = true
            console.log('Event: ', state.isEvent)
        },
        closeEvent(state){
            state.isEvent = false
            state.selectToolName = ''
            console.log('Event: ', state.isEvent)
        }
    },
    namespaced: true,
}