<template>
    <!-- СТРАНИЦА ВЛАДЕЛЬЦА -->
    <div class="main-owner-page">
        <!-- ТИТУЛЬНИК. ШАПКА -->
        <div class="navbar-owner-page">
            <h1 class="descr-text">Hello, Owner!</h1>
        </div>

        <hr>
        <!-- ОСНОВНАЯ РАБОЧАЯ ОБЛАСТЬ -->
        <div class="basic-block">
            <!-- ОСНОВНОЙ ИНФОРМАЦИОННЫЙ СТЕНД -->
            <div class="basic-info">
                <!-- МОДАЛЬНОЕ ОКНО ДЛЯ ОПЕРАЦИЙ ПАНЕЛИ МОДЕРАТОРА -->
                <modal-comp 
                @click="$store.commit('ManagerModule/closeModal')" 
                :show="$store.state.ManagerModule.isShowManagerToolModal">
                </modal-comp>
                #basic-info
                <!-- СТАТИСТИКА САЙТА -->
                <statistics-store></statistics-store>
                <!-- СПИСОК МОДЕРАТОРОВ. ДАННЫЕ О НИХ -->
                <list-moderator></list-moderator>
            </div>
            <menu-manager>

            </menu-manager>
        </div>
    </div>
</template>
<script>
import StatisticsStore from '@/components/OwnerPage/StatisticsStore.vue'
import ListModerator from '@/components/OwnerPage/ListModerator.vue'
import CreatorProduct from '@/components/ManagerPage/CreatorProduct.vue'
import EditorProduct from '@/components/ManagerPage/EditorProduct.vue'
import PromotionProduct from '@/components/ManagerPage/Promotion.vue'
import EventProduct from '@/components/ManagerPage/EventPeoduct.vue'
export default {
    components: {
        StatisticsStore,
        ListModerator,
        CreatorProduct, 
        EditorProduct,
        PromotionProduct,
        EventProduct,
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
hr{
    display: flex;
    width: 95%;
    margin-top: 2vh;
}
h1{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.main-owner-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    border: $border;
    border-radius: $radius;
    .navbar-owner-page{
        display: flex;
        align-self: flex-start;
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
        border: $border;
    }
    .basic-info{
        display: flex;
        flex-direction: column;
        min-width: 70%;
    }
    .option{
        width: 90%;
    }
}
</style>