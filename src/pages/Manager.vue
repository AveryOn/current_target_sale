<!-- СТРАНИЦА МОДЕРАТОРА МАГАЗИНА -->
<template>
    <div class="Manager-page">
        <!-- ОСНОВНОЙ БЛОК -->
        <div class="header-block">
            <h1 class="hello">Hello, {{ name }}!</h1>
            #ЭТО СТРАНИЦА МОДЕРАТОРА
        </div>
        <div class="Main-page-child-container">
            <div class="Main-page-child">
                <!-- EDITOR -->
                <manager-tools-block>
                    <!-- Обязательно байндить show -->
                    <!-- Блок создания нового товара -->
                    <creator-product :show="isCreatedProduct"></creator-product>
                    
                    <!-- Блок редактирования товара -->
                    <editor-product :show="isCreatedGroup"></editor-product>

                    <!-- Блок Создания новой группы товара -->
                    <creator-group :show="isEditorProduct"></creator-group>

                    <!-- Блок Обьявления Скидок -->
                    <promotion-product :show="isPromotion"></promotion-product>

                    <!-- Блок Обьявления Эвентов -->
                    <event-product :show="isEvent"></event-product>
                </manager-tools-block> 

                <div class="history-editor">
                    <div class="history-editor-navbar">
                        <h2 class="h2-history-editor">History of created and edited cards</h2>
                    </div>
                </div>
            </div>
            <!-- МЕНЮ ДЕЙСТВИЙ МОДЕРАТОРА -->
            <div class="manager-side-bar">
                <menu-manager class="menu-manager">
                    <button-comp @click="openCreator" class="option">Create product</button-comp>
                    <button-comp @click="openEditor" class="option">Edit product</button-comp>
                    <button-comp @click="openCreateGroup" class="option">Create Group</button-comp>
                    <button-comp @click="openPromotion" class="option">Announce a promotion</button-comp>
                    <button-comp @click="openEvent" class="option">Announce a event</button-comp>
                    <button-comp @click="$router.push('manager-tool/chat')" class="option">Chat</button-comp>
                </menu-manager>
            </div>
        </div>
    </div>
</template>

<script>
// ИМПОРТ ВСЕХ ИНСТРУМЕНТОВ ДОСТУПНЫХ МОДЕРАТОРУ
import CreatorProduct from '@/components/ManagerPage/CreatorProduct.vue'
import EditorProduct from '@/components/ManagerPage/EditorProduct.vue'
import PromotionProduct from '@/components/ManagerPage/Promotion.vue'
import EventProduct from '@/components/ManagerPage/EventProduct.vue'
import CreatorGroup from '@/components/ManagerPage/CreatorGroup.vue'
import ManagerToolMixin from '@/mixins/ManagerToolMixin'
export default {
    // С этого миксина берутся данные со стора (ManagerModule) для работы с панелью модератора (Manager == Moderator)
    mixins: [ManagerToolMixin],
    components: {
        CreatorProduct, 
        EditorProduct,
        PromotionProduct,
        EventProduct,
        CreatorGroup,
    },
    data(){
        return{
            name: 'Tomas',
        }
    },

}
</script>
<style lang="scss" scoped>
.Manager-page{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: stretch;
    min-height: 100vh;
    // border: $border;
    // border-radius: $radius;
    .header-block{
        display: flex;
        align-items: center;
        margin: 0 0 30px 30px;
    }
    .Main-page-child-container{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-content: stretch;
    }
    .Main-page-child{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        width: 75%;
    }
    .hello{
        font-size: 3.5em;
        margin-top: 50px;
        background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .manager-side-bar{
        display: flex;
        flex-direction: column;
        width: 20%;
    }
    .menu-manager{
        position: sticky;
        top: 20px;
        margin: 0 auto;
    }
    .history-editor{
        display: flex;
        flex-direction: column;
        min-width: 80%;
        min-height: 60vh;
        border: $border;
        border-radius: $radius;
        margin: 0 0 50px 0;
        background-color: white;
        box-shadow: $shadow;
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
        display: flex;
        width: 90%;
    }
}
</style>