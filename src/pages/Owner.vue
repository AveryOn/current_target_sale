<!-- СТРАНИЦА ВЛАДЕЛЬЦА -->
<template>
    <div class="main-owner-page">
        <!-- ТИТУЛЬНИК. ШАПКА -->
        <div class="navbar-owner-page">
            <h1 class="descr-text">Hello, Owner!</h1>
        </div>
        <!-- ОСНОВНАЯ РАБОЧАЯ ОБЛАСТЬ -->
        <div class="basic-block">
            <!-- ОСНОВНОЙ ИНФОРМАЦИОННЫЙ СТЕНД -->
            <div class="basic-info">
                <!-- МОДАЛЬНОЕ ОКНО ДЛЯ ОПЕРАЦИЙ ПАНЕЛИ МОДЕРАТОРА -->
                <modal-comp @click="closeModal" :show="isShowManagerToolModal">

                    <!-- Обязательно байндить show -->
                    <manager-tools-block >

                        <!-- Блок создания нового товара -->
                        <creator-product :show="isCreatedProduct"></creator-product>

                        <!-- Блок редактирования товара -->
                        <editor-product :show="isEditorProduct">
                            <p> Edit - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in!</p>
                        </editor-product>
                        
                        <!-- Блок Создания новой группы товара -->
                        <creator-group :show="isCreatedGroup">
                            <p> Group - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in!</p>
                        </creator-group>
                        
                        <!-- Блок Обьявления Скидок -->
                        <promotion-product :show="isPromotion">
                            <p> Promotion - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in!</p>
                        </promotion-product>

                        <!-- Блок Обьявления Эвентов -->
                        <event-product :show="isEvent">
                            <p> Event - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in!</p>

                        </event-product>
                    </manager-tools-block> 
                </modal-comp>

                <!-- СТАТИСТИКА САЙТА -->
                <statistics-store></statistics-store>
                <!-- СПИСОК МОДЕРАТОРОВ. ДАННЫЕ О НИХ -->
                <list-moderator></list-moderator>

                <!-- ИСТОРИЯ РАБОТЫ -->
                <editHistory :historyData="historyData"></editHistory>    

            </div>
            <!-- ПАНЕЛЬ ИНСТРУМЕНТОВ МОДЕРАТОРА -->
            <menu-manager class="menu-manager">
                <button-comp @click="openCreator" class="option">Create product</button-comp>
                <button-comp @click="openEditor" class="option">Edit product</button-comp>
                <button-comp @click="openCreateGroup" class="option">Create Group</button-comp>
                <button-comp @click="openPromotion" class="option">Announce a promotion</button-comp>
                <button-comp @click="openEvent" class="option">Announce a event</button-comp>
                <button-comp @click="$router.push({name: 'owner-chat'})" class="option">Chat</button-comp>
            </menu-manager>
        </div>
    </div>
</template>
<script>
// ИМПОРТ РАБОЧИХ КОМПОНЕНТОВ ВЛАДЕЛЬЦА
import StatisticsStore from '@/components/OwnerPage/StatisticsStore.vue'
import ListModerator from '@/components/OwnerPage/ListModerator.vue'
// ИМПОРТ РАБОЧИХ КОМПОНЕНТОВ МОДЕРАТОРА
import editHistory from '@/components/ManagerPage/editHistory.vue'
import CreatorProduct from '@/components/ManagerPage/CreatorProduct.vue'
import EditorProduct from '@/components/ManagerPage/EditorProduct.vue'
import CreatorGroup from '@/components/ManagerPage/CreatorGroup.vue'
import PromotionProduct from '@/components/ManagerPage/Promotion.vue'
import EventProduct from '@/components/ManagerPage/EventProduct.vue'

// Миксин OwnerManagerTools 
import OwnerToolMixin from '@/mixins/OwnerToolMixin'
export default {
    // ЛОГИКА ПО УПРАВЛЕНИЮ ПАНЕЛЬЮ МОДЕРАТОРА
    mixins: [OwnerToolMixin],
    components: {
        StatisticsStore,
        ListModerator,
        editHistory,
        CreatorProduct, 
        EditorProduct,
        CreatorGroup,
        PromotionProduct,
        EventProduct,
    },
    data(){
        return{
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

}
</script>
<style lang="scss" scoped>
@include h1-gradient;
hr{
    display: flex;
    width: 95%;
    margin-top: 2vh;
}

.main-owner-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    // border: $border;
    // border-radius: $radius;
    .navbar-owner-page{
        width: 98%;
        display: flex;
        align-self: center;
        border-bottom: $border;
        h1{
            font-size: 3.5em;
            margin: 20px;
        }
    }
    .basic-block{
        display: flex;
        justify-content: space-evenly;
        min-width: 98%;
        margin-top: 40px;
    }
    .basic-info{
        display: flex;
        flex-direction: column;
        min-width: 70%;
    }
    .menu-manager{
        position: sticky;
        top: 20px;
    }
    .option{
        width: 90%;
    }
}
</style>