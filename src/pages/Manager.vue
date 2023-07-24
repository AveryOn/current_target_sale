<!-- СТРАНИЦА МОДЕРАТОРА МАГАЗИНА -->
<template>
    <!-- ОСНОВНОЙ БЛОК -->
    <div class="Manager-page">

        <!-- ШАПКА СТРАНИЦЫ -->
        <div class="Manager-page__header">
            <h1 class="hello">Hello, {{ name }}!</h1>
        </div>

        <!-- ОСНОВНОЙ КОНТЕНТ СТРАНИЦЫ MANAGER -->
        <div class="Manager-page__body">
            <div class="Manager-page__workbench-body">

                <!-- РАБОЧАЯ ПАНЕЛЬ -->
                <manager-tools-block>
                    <!-- Обязательно байндить show -->
                    <!-- Блок создания нового товара -->
                    <creator-product :show="isCreatedProduct"></creator-product>
                    
                    <!-- Блок редактирования товара -->
                    <editor-product :show="isEditorProduct"></editor-product>

                    <!-- Блок Создания новой группы товара -->
                    <creator-group :show="isCreatedGroup"></creator-group>

                    <!-- Блок Обьявления Скидок -->
                    <promotion-product :show="isPromotion"></promotion-product>

                    <!-- Блок Обьявления Эвентов -->
                    <event-product :show="isEvent"></event-product>
                </manager-tools-block> 

                <!-- ИСТОРИЯ РАБОТЫ -->
                <editHistory :historyData="historyData"></editHistory>                
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
import editHistory from '@/components/ManagerPage/editHistory.vue'
import CreatorProduct from '@/components/ManagerPage/CreatorProduct.vue'
import EditorProduct from '@/components/ManagerPage/EditorProduct.vue'
import PromotionProduct from '@/components/ManagerPage/Promotion.vue'
import EventProduct from '@/components/ManagerPage/EventProduct.vue'
import CreatorGroup from '@/components/ManagerPage/CreatorGroup.vue'
import ManagerToolMixin from '@/mixins/ManagerToolMixin'

import { mapState } from 'vuex';
export default {
    // С этого миксина берутся данные со стора (ManagerModule) для работы с панелью модератора (Manager == Moderator)
    mixins: [ManagerToolMixin],
    components: {
        editHistory,
        CreatorProduct, 
        EditorProduct,
        PromotionProduct,
        EventProduct,
        CreatorGroup,
    },
    data(){
        return{
            name: 'Manager',

            // В этот массив приходят элементы истории работы с сервера
            historyData: [
                {id: 1, 
                operation_detail: 'На товар Шапка зимняя (код - 132251) была объявлена скидка 25%', 
                creation_time: '12.03.2023 11:23', 
                operation_name: 'Снижение цены', 
                operation_type: 'price_drop'},
                {id: 2, operation_detail: 'На товар Шапка зимняя (код - 421521) была объявлена скидка 25%', creation_time: '12.03.2023 11:32', operation_name: 'Повышение цены', operation_type: 'price_up'},
                {id: 3, operation_detail: 'На товар Шапка зимняя (код - 763434) была объявлена скидка 25%', creation_time: '12.03.2023 11:56', operation_name: 'Скидка', operation_type: 'price_promotion'},
                {id: 4, operation_detail: 'На товар Шапка зимняя (код - 978565) была объявлена скидка 25%', creation_time: '12.03.2023 12:30', operation_name: 'Создание нового товара', operation_type: 'create_product'},
                {id: 5, operation_detail: 'На товар Шапка зимняя (код - 137843) была объявлена скидка 25%', creation_time: '12.03.2023 16:03', operation_name: 'Удаление товара', operation_type: 'remove_product'},
                {id: 6, operation_detail: 'На товар Шапка зимняя (код - 347844) была объявлена скидка 25%', creation_time: '12.03.2023 16:14', operation_name: 'Редактирование товара', operation_type: 'edit_product'},
                {id: 7, operation_detail: 'На товар Шапка зимняя (код - 112333) была объявлена скидка 25%', creation_time: '12.03.2023 16:41', operation_name: 'Объявление акции', operation_type: 'announce_event'},
                {id: 8, operation_detail: 'На товар Шапка зимняя (код - 236331) была объявлена скидка 25%', creation_time: '12.03.2023 17:33', operation_name: 'Создание категории', operation_type: 'create_category'},
                {id: 9, operation_detail: 'На товар Шапка зимняя (код - 111235) была объявлена скидка 25%', creation_time: '12.03.2023 17:50', operation_name: 'Создание группы', operation_type: 'create_group'},
            ],
        }
    },

    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },

}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
.Manager-page{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: stretch;
    min-height: 100vh;
    height: max-content;
    // border: $border;
    // border-radius: $radius;
    .Manager-page__header{
        display: flex;
        align-items: center;
        margin: 0 0 30px 30px;
    }
    .Manager-page__body{
        display: flex;
        width: 100%;
        height: max-content;
        justify-content: space-evenly;
        align-content: stretch;
    }
    .Manager-page__workbench-body{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        width: 75%;
        height: max-content;
    }
    .hello{
        font-size: 3.5em;
        margin-top: 50px;
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
    .option{
        display: flex;
        width: 90%;
    }
}
@include darkMode_with_font;
</style>