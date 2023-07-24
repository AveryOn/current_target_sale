import axios from 'axios'

// ХРАНИИЩЕ ДЛЯ ДЕЙСТВИЙ ПО МОДЕРАЦИИ МАГАЗИНА
export const ManagerModule = {
    state: () => ({
        isCreatedProduct: false,
        isCreatedGroup: false,
        isEditorProduct: false,
        isPromotion: false,
        isEvent: false,
        // Сюда будет вставляться название выбранного блока инструментов
        selectToolName: '',

        isLoadingImagesPreview: false,
    }),
    mutations: {
        // Мутация для закрытия открытых инструментов
        closeAllTools(state){
            state.isCreatedProduct = false
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
        },

        // Запускает спиннер при заугрзке превью-картинок при создании нового товара
        isLoadingImagesPreviewTrue(state, newValue){
            state.isLoadingImagesPreview = true
        },
        // откл. спиннер
        isLoadingImagesPreviewFalse(state, newValue){
            state.isLoadingImagesPreview = false
        },

    },

    actions: {

        sendDataProductChecking({state, commit}, {productData}){
            console.log(productData);
        },

    },
    namespaced: true,
}