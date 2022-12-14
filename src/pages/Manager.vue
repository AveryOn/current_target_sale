<template>
<!-- СТРАНИЦА МОДЕРАТОРА МАГАЗИНА -->
    <div class="Manager-page">
        <!-- ОСНОВНАЯ ЛЕНТА -->
        <div class="Main-page-child">
            <h1 class="hello">Hello, {{ name }}!</h1>
            #ЭТО СТРАНИЦА МОДЕРАТОРА
            <!-- EDITOR -->
            <manager-tools-block @closeTools="closeCreator" :title="'Workbench'" :show="isCreatedProduct"></manager-tools-block> 
            <manager-tools-block @closeTools="closeEditor" :title="'Editor'" :show="isEditorProduct"></manager-tools-block>
            <manager-tools-block @closeTools="closePromotion" :title="'Announce a promotion'" :show="isPromotion"></manager-tools-block>
            <manager-tools-block @closeTools="closeEvent" :title="'Announce a event'" :show="isEvent"></manager-tools-block>
            <!-- ИСТОРИЯ РЕДАКТИРОВАНИЯ И СОЗДАНИЯ КАРТОЧЕК ТОВАРА -->
            <div class="history-editor">
                <div class="history-editor-navbar">
                    <h2 class="h2-history-editor">History of created and edited cards</h2>
                </div>
            </div>
        </div>
        <menu-manager>
            <button-comp @click="openCreator" class="option">Create product</button-comp>
            <button-comp @click="openEditor" class="option">Edit product</button-comp>
            <button-comp @click="openPromotion" class="option">Announce a promotion</button-comp>
            <button-comp @click="openEvent" class="option">Announce a event</button-comp>
            <button-comp @click="$router.push('/manager/chat')" class="option">Chat</button-comp>
        </menu-manager>
    </div>
</template>

<script>
// import CreatorProduct from '@/components/ManagerPage/CreatorProduct.vue'
import EditorProduct from '@/components/ManagerPage/EditorProduct.vue'
import PromotionProduct from '@/components/ManagerPage/Promotion.vue'
import EventProduct from '@/components/ManagerPage/EventProduct.vue'
import { mapState, mapMutations } from 'vuex'
export default {
    components: {
        // CreatorProduct, 
        EditorProduct,
        PromotionProduct,
        EventProduct,
    },
    data(){
        return{
            name: 'Tomas',
        }
    },
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
        }),
        // closeTools(){
        //     this.$store.state.ManagerModule.isEditorProduct
        // }
    },
    computed: {
        ...mapState({
            isCreatedProduct: state => state.ManagerModule.isCreatedProduct,
            isEditorProduct: state => state.ManagerModule.isEditorProduct,
            isPromotion: state => state.ManagerModule.isPromotion,
            isEvent: state => state.ManagerModule.isEvent
        })
    }
}
</script>
<style lang="scss" scoped>
.Manager-page{
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    border: $border;
    border-radius: $radius;
    .Main-page-child{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        width: 80%;
    }

    .hello{
        font-size: 3.5em;
        margin-top: 50px;
        background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .history-editor{
        display: flex;
        flex-direction: column;
        min-width: 80%;
        min-height: 60vh;
        border: $border;
        border-radius: $radius;
        margin: 50px 0 50px 0;
    }
    .history-editor-navbar{
        display: flex;
        flex-direction: column;
    }
    .h2-history-editor{
        display: flex;
        align-self: flex-end;
        margin: 10px 30px;
        background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .option{
        width: 90%;
    }
}
</style>