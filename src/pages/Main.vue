<!-- ГЛАВНАЯ СТРАНИЦА -->
<template>
    <div :class="{'dark': darkMode}" class="MainBlock">
        <!-- ПОИСКОВАЯ СТРОКА -->
        <input-comp placeholder="Search..." class="search-input" :class="{'dark-input': darkMode}"></input-comp>
        <!-- ЭТО ГРАДИЕНТНЫЙ ЗАГОЛОВОК -->
        <h1 class="header-text" >Welcome to our store!</h1>
        <!-- #это главная страница -->
        <!-- АКЦИОННЫЙ БЛОК -->
        <div class="current-info-block" :class="{'dark': darkMode}">
            <h1 class="header-info">the site is currently under development</h1>
        </div>
        <!-- ТИТУЛЬНЫЙ БЛОК ТОВАРОВ ПО АКЦИИ -->
        <div class="block-products-promotion">
            
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    methods: {

    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
    watch: {
        darkMode(newValue){
            // Смена темы для currentInfoBblock
            const currentInfoBblock = document.querySelector('.current-info-block')
            if(newValue){
                currentInfoBblock.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            }else{
                currentInfoBblock.style.backgroundColor = ''
            }

            // Смена темы для blockProductsPromotion
            const currentInfoBlock = document.querySelector('.block-products-promotion')
            if(newValue){
                currentInfoBlock.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            }else{
                currentInfoBlock.style.backgroundColor = ''
            }

            // Смена темы для search-input
            const searchInput = document.querySelector('.search-input')
            if(newValue){
                searchInput.style.backgroundColor = 'rgba(47, 44, 44, 0.9)'
            }else{
                searchInput.style.backgroundColor = ''
            }
        }
    },
    mounted(){

        // Смена темы для currentInfoBblock
        const currentInfoBlock = document.querySelector('.current-info-block')
        if(this.darkMode){
            currentInfoBlock.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
        }else{
            currentInfoBlock.style.backgroundColor = ''
        }

        // Смена темы для blockProductsPromotion
        const blockProductsPromotion = document.querySelector('.block-products-promotion')
        if(this.darkMode){
            blockProductsPromotion.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            
        }else{
            blockProductsPromotion.style.backgroundColor = ''
        }

        // Смена темы для search-input
        const searchInput = document.querySelector('.search-input')
        if(this.darkMode){
            searchInput.style.backgroundColor = 'rgba(47, 44, 44, 0.9)'
        }else{
            searchInput.style.backgroundColor = ''
        }
    },
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
@include darkMode_input;
@include darkMode;
@import '@/styles/media/main__m.scss'
</style>