// МИКСИН ИСПОЛЬЗЮЩИЙСЯ ДЛЯ УПРОЩЕНИЯ ПОЛУЧЕНИЙ ДАННЫХ С ХРАНИЛИЩА
import { mapMutations,  mapState} from 'vuex'

export default {
    methods: {
        ...mapMutations({
            openCreator: 'OwnerModule/openCreator',
            closeCreator: 'OwnerModule/closeCreator',
            openEditor: 'OwnerModule/openEditor',
            closeEditor: 'OwnerModule/closeEditor',
            openPromotion: 'OwnerModule/openPromotion',
            closePromotion: 'OwnerModule/closePromotion',
            openEvent: 'OwnerModule/openEvent',
            closeEvent: 'OwnerModule/closeEvent',
            openManagerTools: 'OwnerModule/openManagerTools',
            closeManagerTools: 'OwnerModule/closeManagerTools',
            closeModal: 'OwnerModule/closeModal',
        }),
    },
    computed: {
        ...mapState({
            isCreatedProduct: state => state.OwnerModule.isCreatedProduct,
            isEditorProduct: state => state.OwnerModule.isEditorProduct,
            isPromotion: state => state.OwnerModule.isPromotion,
            isEvent: state => state.OwnerModule.isEvent,
            isShowManagerToolModal: state => state.OwnerModule.isShowManagerToolModal,
        })
    },

}