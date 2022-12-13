<template>
    <div class="MainBlock">
        <!-- ЭТО ГРАДИЕНТНЫЙ ЗАГОЛОВОК -->
        <h1 class="header-text">Welcome to our store!</h1>
        #это главная страница
        <!-- АКЦИОННЫЙ БЛОК -->
        <div class="current-info-block">
        </div>
        <!-- ТИТУЛЬНЫЙ БЛОК ТОВАРОВ ПО АКЦИИ -->
        <div class="block-products-promotion">

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.MainBlock{
    display: flex; 
    flex-direction: column;
    align-items: center; 
    margin: 5px;
    min-height: 100vh;
    border: 1px solid $color-orange-white;
    border-radius: $radius;
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
    .current-info-block{
        display: flex;
        min-width: 95%;
        min-height: 35vh;
        margin: 20px;
        border: $border;
        border-radius: $radius;
    }
    .block-products-promotion{
        min-width: 95%;
        min-height: 60vh;
        border: $border;  
        border-radius: $radius; 
        margin: 20px;     
    }
}
</style>