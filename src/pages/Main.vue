<!-- ГЛАВНАЯ СТРАНИЦА -->
<template>
    <div class="MainBlock">
        <!-- ПОИСКОВАЯ СТРОКА -->
        <input-comp placeholder="Search..." class="search-input"></input-comp>
        <!-- ЭТО ГРАДИЕНТНЫЙ ЗАГОЛОВОК -->
        <h1 class="header-text">Welcome to our store!</h1>
        #это главная страница
        <!-- АКЦИОННЫЙ БЛОК -->
        <div class="current-info-block">
            <h1 class="header-info">the site is currently under development</h1>
        </div>
        <!-- ТИТУЛЬНЫЙ БЛОК ТОВАРОВ ПО АКЦИИ -->
        <div class="block-products-promotion">
            
        </div>
    </div>
</template>
<script>
export default {
    methods: {

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
@include h1-gradient-blue;
.header-info{
    font-size: 2em;
}
.MainBlock{
    display: flex; 
    flex-direction: column;
    align-items: center; 
    margin: 60px 5px 5px 5px;
    min-height: 100vh;
    // border: 1px solid $color-orange-white;
    // border-radius: $radius;
    .header-text{
        margin: 20px 0 0 35px;
        font: {
            family: sans-serif;
            size: 3.5em;
        }
        background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        align-self: flex-start;
    }
    .search-input{
        width: 50%;
        margin: 20px 10px;
        padding: 15px 20px;
        background-color: rgba(255,255,255, .9);
        &:focus{
            width: 70%;
        }
    }
    .current-info-block{
        display: flex;
        min-width: 95%;
        min-height: 35vh;
        margin: 20px;
        border: $border;
        border-radius: $radius;
        box-shadow: $shadow;
        background-color: white;
    }
    .block-products-promotion{
        min-width: 95%;
        min-height: 60vh;
        border: $border;  
        border-radius: $radius; 
        margin: 20px;
        box-shadow: $shadow;
        background-color: white;
    }
}

@import '@/styles/media/main__m.scss'
</style>