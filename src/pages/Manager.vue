<template>
<!-- СТРАНИЦА МОДЕРАТОРА МАГАЗИНА -->
    <div class="Manager-page">
        <!-- ОСНОВНАЯ ЛЕНТА -->
        <div class="Main-page-child">
            <h1 class="hello">Hello, {{ name }}!</h1>
            #ЭТО СТРАНИЦА МОДЕРАТОРА
            <!-- EDITOR -->
            <creator-product v-show="$store.state.ManagerModule.isCreatedProduct"></creator-product> 
            <!-- ИСТОРИЯ РЕДАКТИРОВАНИЯ И СОЗДАНИЯ КАРТОЧЕК ТОВАРА -->
            <div class="history-editor">
                <div class="history-editor-navbar">
                    <h2 class="h2-history-editor">History Create and Edit to Card</h2>
                </div>
            </div>
        </div>
        <menu-manager></menu-manager>
    </div>
</template>

<script>
import MenuManager from '@/components/ManagerPage/MenuManager.vue'
import CreatorProduct from '@/components/ManagerPage/CreatorProduct.vue'
export default {
    components: {MenuManager, CreatorProduct},
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
}
</style>