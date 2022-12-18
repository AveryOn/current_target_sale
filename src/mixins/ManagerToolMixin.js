// МИКСИН ИСПОЛЬЗЮЩИЙСЯ ДЛЯ УПРОЩЕНИЯ ПОЛУЧЕНИЙ ДАННЫХ С ХРАНИЛИЩА
import { mapState, mapMutations } from 'vuex'

export default {
    methods:{
        ...mapMutations({
            openCreator: 'ManagerModule/openCreator',
            closeCreator: 'ManagerModule/closeCreator',
            openEditor: 'ManagerModule/openEditor',
            closeEditor: 'ManagerModule/closeEditor',
            openPromotion: 'ManagerModule/openPromotion',
            closePromotion: 'ManagerModule/closePromotion',
            openEvent: 'ManagerModule/openEvent', 
            closeEvent: 'ManagerModule/closeEvent',
            openCreateGroup: 'ManagerModule/openCreateGroup',
            closeCreateGroup: 'ManagerModule/closeCreateGroup'
        }),
    },
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