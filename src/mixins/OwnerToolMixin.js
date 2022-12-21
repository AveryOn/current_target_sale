// МИКСИН ИСПОЛЬЗЮЩИЙСЯ ДЛЯ УПРОЩЕНИЯ ПОЛУЧЕНИЙ ДАННЫХ С ХРАНИЛИЩА
import { mapMutations,  mapState} from 'vuex'

export default {
    // Мутации состояний для работы с панелью модератора, используется pages/Manager.vue
    methods: {
        ...mapMutations({
            // создание товара
            openCreator: 'OwnerModule/openCreator',
            closeCreator: 'OwnerModule/closeCreator',
            // редактирование товара
            openEditor: 'OwnerModule/openEditor',
            closeEditor: 'OwnerModule/closeEditor',
            // обьявление акций
            openPromotion: 'OwnerModule/openPromotion',
            closePromotion: 'OwnerModule/closePromotion',
            // обьявление событий и праздников (Евентов)
            openEvent: 'OwnerModule/openEvent',
            closeEvent: 'OwnerModule/closeEvent',
            // создание новой группы товаров
            openCreateGroup: 'OwnerModule/openCreateGroup',
            closeCreateGroup: 'OwnerModule/closeCreateGroup',
        }),
    },
    // Состояние моделей для работы с панелью модератора, используется pages/Manager.vue
    computed: {
        ...mapState({
            isCreatedProduct: state => state.OwnerModule.isCreatedProduct,
            isEditorProduct: state => state.OwnerModule.isEditorProduct,
            isCreatedGroup: state => state.OwnerModule.isCreatedGroup,
            isPromotion: state => state.OwnerModule.isPromotion,
            isEvent: state => state.OwnerModule.isEvent,
            isShowManagerToolModal: state => state.OwnerModule.isShowManagerToolModal,
        })
    },

}