// МИКСИН ИСПОЛЬЗЮЩИЙСЯ ДЛЯ УПРОЩЕНИЯ ПОЛУЧЕНИЙ ДАННЫХ С ХРАНИЛИЩА
import { mapState, mapMutations } from 'vuex'

export default {
    // Мутации состояний для работы с панелью модератора, используется pages/Manager.vue
    methods:{
        ...mapMutations({
            // создание товара
            openCreator: 'ManagerModule/openCreator',
            closeCreator: 'ManagerModule/closeCreator',
            // редактирование товара
            openEditor: 'ManagerModule/openEditor',
            closeEditor: 'ManagerModule/closeEditor',
            // обьявление акций
            openPromotion: 'ManagerModule/openPromotion',
            closePromotion: 'ManagerModule/closePromotion',
            // обьявление событий и праздников (Евентов)
            openEvent: 'ManagerModule/openEvent', 
            closeEvent: 'ManagerModule/closeEvent',
            // создание новой группы товаров
            openCreateGroup: 'ManagerModule/openCreateGroup',
            closeCreateGroup: 'ManagerModule/closeCreateGroup'
        }),
    },
    // Состояние моделей для работы с панелью модератора, используется pages/Manager.vue
    computed: {
        ...mapState({
            isCreatedProduct: state => state.ManagerModule.isCreatedProduct,
            isEditorProduct: state => state.ManagerModule.isEditorProduct,
            isCreatedGroup: state => state.ManagerModule.isCreatedGroup,
            isPromotion: state => state.ManagerModule.isPromotion,
            isEvent: state => state.ManagerModule.isEvent
        })
    }
}