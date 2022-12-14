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
                <modal-comp @click="closeModal" :show="isShowManagerToolModal">
                    <manager-tools-block @closeTools="closeModal" :title="'Workbench'" :show="isCreatedProduct">
                        <creator-product>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui illo excepturi ex hic atque quis iusto voluptatum laboriosam aliquam. Animi repellat ullam repudiandae voluptates facere accusamus itaque exercitationem vel odit?</p>
                        </creator-product>
                    </manager-tools-block> 
                    <manager-tools-block @closeTools="closeModal" :title="'Editor'" :show="isEditorProduct">
                        <editor-product>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui illo excepturi ex hic atque quis iusto voluptatum laboriosam aliquam. Animi repellat ullam repudiandae voluptates facere accusamus itaque exercitationem vel odit?</p>
                        </editor-product>
                    </manager-tools-block>
                    <manager-tools-block @closeTools="closeModal" :title="'Announce a promotion'" :show="isPromotion">
                        <promotion-product>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui illo excepturi ex hic atque quis iusto voluptatum laboriosam aliquam. Animi repellat ullam repudiandae voluptates facere accusamus itaque exercitationem vel odit?</p>
                        </promotion-product>
                    </manager-tools-block>
                    <manager-tools-block @closeTools="closeModal" :title="'Announce a event'" :show="isEvent">
                        <event-product>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui illo excepturi ex hic atque quis iusto voluptatum laboriosam aliquam. Animi repellat ullam repudiandae voluptates facere accusamus itaque exercitationem vel odit?</p>
                        </event-product>
                    </manager-tools-block>
                </modal-comp>
                #basic-info
                <!-- СТАТИСТИКА САЙТА -->
                <statistics-store></statistics-store>
                <!-- СПИСОК МОДЕРАТОРОВ. ДАННЫЕ О НИХ -->
                <list-moderator></list-moderator>
            </div>
            <!-- ПАНЕЛЬ ИНСТРУМЕНТОВ МОДЕРАТОРА -->
            <menu-manager>
                <button-comp @click="openCreator" class="option">Create product</button-comp>
                <button-comp @click="openEditor" class="option">Edit product</button-comp>
                <button-comp @click="openPromotion" class="option">Announce a promotion</button-comp>
                <button-comp @click="openEvent" class="option">Announce a event</button-comp>
                <button-comp @click="$router.push('/manager/chat')" class="option">Chat</button-comp>
            </menu-manager>
        </div>
    </div>
</template>
<script>
// ИМПОРТ РАБОЧИХ КОМПОНЕНТОВ ВЛАДЕЛЬЦА
import StatisticsStore from '@/components/OwnerPage/StatisticsStore.vue'
import ListModerator from '@/components/OwnerPage/ListModerator.vue'
// ИМПОРТ РАБОЧИХ КОМПОНЕНТОВ МОДЕРАТОРА
import CreatorProduct from '@/components/ManagerPage/CreatorProduct.vue'
import EditorProduct from '@/components/ManagerPage/EditorProduct.vue'
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
        CreatorProduct, 
        EditorProduct,
        PromotionProduct,
        EventProduct,
    },
    data(){
        return{

        }
    },
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