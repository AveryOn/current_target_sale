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
                    <editor-product :show="isCreatedGroup"></editor-product>

                    <!-- Блок Создания новой группы товара -->
                    <creator-group :show="isEditorProduct"></creator-group>

                    <!-- Блок Обьявления Скидок -->
                    <promotion-product :show="isPromotion"></promotion-product>

                    <!-- Блок Обьявления Эвентов -->
                    <event-product :show="isEvent"></event-product>
                </manager-tools-block> 

                <!-- ИСТОРИЯ РАБОТЫ -->
                <div 
                class="history"
                :style=" (historyData.length <= 3)? 
                    {   border: '1px solid rgb(253, 148, 11)', 
                        borderRadius: '20px', 
                        boxShadow: '2px 8px 15px rgba(0, 0, 0, 0.294)'
                    } : {} "
                >

                    <!-- Шапка Истории -->
                    <div class="history__header">
                        <h2 class="history__header--title">История создания и редактирования</h2>
                    </div>

                    <!-- Тело Истории-->
                    <div class="history__body">

                        <!-- Заголовок выводится когда история пуста -->
                        <h2 
                        class="history__nothing-there"
                        v-show="!historyData.length"
                        >
                            Здесь будет отображаться история вашей работы
                        </h2>

                        <!-- Отрисовка элементов истории -->
                        <historyItem 
                        v-for="item in historyData"
                        :key="item.id"
                        :operationType="item.operation_type"
                        :operationName="item.operation_name"
                        :operationTime="item.creation_time"
                        :operationDetail="item.operation_detail"
                        >
                        </historyItem>

                    </div>

                    <!-- КНОПКА РАЗВЕРНУТЬ ИСТОРИЮ -->
                    <div 
                    class="open-history-more"
                    @click="showHistory"
                    v-show="!isOpenHistory && historyData.length >= 3"
                    :style="
                        (darkMode)?
                        {background: 'linear-gradient(360deg, rgba(36, 33, 33, 1), rgba(34, 32, 32, 0.85), rgba(0, 0, 0, 0))'} :
                        {background: ''}
                    "
                    >
                        Развернуть историю...
                    </div>

                    <!-- КНОПКА СКРЫТЬ ИСТОРИЮ -->
                    <button-comp 
                    class="hidden-history"
                        @click="hiddenHistory"
                        v-show="isOpenHistory"
                        >
                        Скрыть историю
                    </button-comp>

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
import historyItem from '@/components/ManagerPage/historyItem.vue'
import ManagerToolMixin from '@/mixins/ManagerToolMixin'

import { mapState } from 'vuex';
export default {
    // С этого миксина берутся данные со стора (ManagerModule) для работы с панелью модератора (Manager == Moderator)
    mixins: [ManagerToolMixin],
    components: {
        CreatorProduct, 
        EditorProduct,
        PromotionProduct,
        EventProduct,
        CreatorGroup,
        historyItem,
    },
    data(){
        return{
            name: 'Manager',
            isOpenHistory: false,

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
                // {id: 4},

 
            ],
        }
    },
    methods: {
        // МЕТОД РАЗВОРАЧИВАЕТ ТЕКСТ ОПИСАНИЯ ТОВАРА
        // МЕТОД РАЗВОРАЧИВАЕТ ТЕКСТ ОПИСАНИЯ ТОВАРА
        showHistory(){
            this.isOpenHistory = true
            const history = document.querySelector('.history');
            const historyBody = document.querySelector('.history__body');
            const historyHeader = document.querySelector('.history__header');
            history.style.height = '80vh'
            history.style.boxShadow = '2px 8px 15px rgba(0, 0, 0, 0.294)'
            historyHeader.style.boxShadow = '2px 8px 15px rgba(0, 0, 0, 0.294)'
            historyBody.style.overflowY = 'auto'
            history.style.borderBottomLeftRadius = '20px'
            history.style.borderBottomRightRadius = '20px'
            history.style.borderTopLeftRadius = '20px'
            history.style.borderTopRightRadius = '20px'
            history.style.border = '1px solid rgb(253, 148, 11)'
        },
        // МЕТОД СКРЫВАЕТ ТЕКСТ ОПИСАНИЯ ТОВАРА
        hiddenHistory(){
            const history = document.querySelector('.history');
            const historyBody = document.querySelector('.history__body');
            const historyHeader = document.querySelector('.history__header');
            history.style.height = ''
            history.style.boxShadow = ''
            historyHeader.style.boxShadow = ''
            historyBody.style.overflowY = ''
            history.style.borderBottomLeftRadius = ''
            history.style.borderBottomRightRadius = ''
            history.style.borderTopLeftRadius = ''
            history.style.borderTopRightRadius = ''
            history.style.border = ''
            this.isOpenHistory = false
        },
    },

    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
    mounted(){

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
    .history{
        position: relative;
        height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top-right-radius: $radius;
        border-top-left-radius: $radius;
        border: $border;
        border-bottom: none;
        margin: 0 0 50px 0;
        .history__header{
            position: relative;
            display: flex;
            justify-content: flex-end;
            width: 100%;
            padding: 10px 20px;
        }
        .history__header--title{
            font-size: 2em;
            padding: 0 10px 5px 20px;
            border-bottom: $border;
        }
        .history__body{
            position: relative;
            width: 100%;
            height: max-content;
            max-height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 10px 10px 10px;
        }
        .history__nothing-there {
            position: relative;
            top: 100px;
            font-size: 1.8em;
        }
        .open-history-more{
        position: absolute;
        bottom: -1px;
        left: -1px;
        right: -1px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background-color: rgba(234, 216, 76, 0.557);
        background: linear-gradient(
            360deg, 
            white, 
            rgba(255, 255, 255, 0.55),
        );
        // border: $border;
        height: 50px;
        // width: 1350px;
        color: orangered;
        transition: all 0.5s ease;
        &:hover{
            cursor: pointer;
            bottom: -20px;
            height: 70px;
            border-bottom-left-radius: $radius;
            border-bottom-right-radius: $radius;
            // border-bottom: $border;
            background: linear-gradient(
            360deg, 
            white, 
            rgba(255, 255, 255, 0.6),
            );
        }
        
        }
        .hidden-history{
            position: absolute;
            right: 10px;
            bottom: -50px;
            padding: 3px 35px;
        }
    }
    .option{
        display: flex;
        width: 90%;
    }
}
@include darkMode_with_font;
</style>