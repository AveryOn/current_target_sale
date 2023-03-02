
<!-- ПАНЕЛЬ НАСТРОЙКИ ВНЕШНЕГО ВИДА ОТОБРАЖЕНИЯ ТОВАРА В КОРЗИНЕ -->
<template>
    <div class="cart-setting-view" :class="{'dark': darkMode}">
            
            <!-- ШАПКА -->
            <div class="cart-setting-view__header">
                <h2>Выберте вид отрисовки товара...</h2>
            </div>

            <!-- ОСНОВНАЯ ЧАСТЬ -->
            <div class="cart-setting-view__container">
                <div class="cart-setting-view__body">

                    <!-- Пример отрисовки СПИСКОМ -->
                    <div class="cart-setting-view__example-line">
                        <div 
                        v-show="isSelectModeViewCart === 'line'"
                        class="cart-setting-view__checked-block"
                        >
                            Выбрано!
                            
                        </div>
                        <div class="example-line__list">
                            <div class="example-line__list__item"></div>
                            <div class="example-line__list__item"></div>
                            <div class="example-line__list__item"></div>
                        </div>
                        <button-comp 
                        class="cart-setting-view__btn"
                        @click="cartViewLine"
                        >
                            {{ (isSelectModeViewCart === 'line') ? 'Уже выбрано!' : 'Выбрать' }} 
                        </button-comp>
                    </div>

                    <!-- Пример отрисовки БЛОКАМИ -->
                    <div class="cart-setting-view__example-block">
                        <div 
                        v-show="isSelectModeViewCart === 'block'"
                        class="cart-setting-view__checked-block"
                        >
                            Выбрано!

                        </div>
                        <div class="example-block__list">
                            <div class="example-block__list__item"></div>
                            <div class="example-block__list__item"></div>
                            <div class="example-block__list__item"></div>
                        </div>
                        <button-comp
                        class="cart-setting-view__btn"
                        @click="cartViewBlock"
                        >
                            {{ (isSelectModeViewCart === 'block') ? 'Уже выбрано!' : 'Выбрать' }} 
                        </button-comp>
                    </div>

                </div>
            </div>
        </div>
</template>
<script>

import { mapState } from 'vuex'
export default {
    data(){
        return {

        }
    },
    methods:{
        // Метод включает режим отрисовки товара БЛОКАМИ
        cartViewBlock(){
            this.$store.commit('CartModule/cartViewBlock')
            localStorage.setItem('isSelectModeViewCart', 'block')
        },
        // Метод включает режим отрисовки товара СПИСКОМ
        cartViewLine(){
            this.$store.commit('CartModule/cartViewLine')
            localStorage.setItem('isSelectModeViewCart', 'line')
        },
    },
    watch: {
        darkMode(newValue){
            // Смена темы для exampleLine__list
            const exampleLine__list = document.querySelectorAll('.example-line__list')
            if(newValue){
                exampleLine__list.forEach(item => {
                    item.style.backgroundColor = 'rgba(36, 33, 33, 1)'
                })
            }else{
                exampleLine__list.forEach(item => {
                    item.style.backgroundColor = ''
                })
            }

            // Смена темы для exampleBlock__list
            const exampleBlock__list = document.querySelectorAll('.example-block__list')
            if(newValue){
                exampleBlock__list.forEach(item => {
                    item.style.backgroundColor = 'rgba(36, 33, 33, 1)'
                })
            }else{
                exampleBlock__list.forEach(item => {
                    item.style.backgroundColor = ''
                })
            }
        }
    },
    computed: {
        ...mapState({
            // Стиль оформления отрисовки товара в корзине (line || block)
            isSelectModeViewCart: state => state.CartModule.isSelectModeViewCart,

            // Темная тема
            darkMode: state => state.darkMode,
        })
    },
    mounted() {
        // Смена темы для exampleLine__list
        const exampleLine__list = document.querySelectorAll('.example-line__list')
        if(this.darkMode){
            exampleLine__list.forEach(item => {
                item.style.backgroundColor = 'rgba(36, 33, 33, 1)'
            })
        }else{
            exampleLine__list.forEach(item => {
                item.style.backgroundColor = ''
            })
        }

        // Смена темы для exampleBlock__list
        const exampleBlock__list = document.querySelectorAll('.example-block__list')
        if(this.darkMode){
            exampleBlock__list.forEach(item => {
                item.style.backgroundColor = 'rgba(36, 33, 33, 1)'
            })
        }else{
            exampleBlock__list.forEach(item => {
                item.style.backgroundColor = ''
            })
        }
        
    },
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
// Модальное окно с выбором стиля отрисовки оформления карточек товара в Корзине
.cart-setting-view{
    position: relative;
    background-color: white;
    border-radius: $radius;
    border: $border;
    width: 80vh;
    min-height: 70vh;
    height: max-content;
    padding: 10px;
    z-index: 999;
    .cart-setting-view__checked-block{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        height: 50px;
        top: 10px;
        left: 10px;
        background-color: rgba(40, 238, 40, 0.653);
        color: rgb(255, 255, 255);  
        padding: 10px;
        border-radius: $radius;
        cursor: default;
    }
    &__header{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 10vh;
        border-bottom: $border;
    }
    &__body{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: max-content;
        overflow-y: auto;
    }
    // Пример отрисовки СПИСКОМ
    &__example-line{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        width: 70%;
        height: 250px;
        border: $border;
        margin: 5px 5px 20px 5px;
        padding: 10px 5px 10px 5px;
        border-radius: $radius;
        background: $background-gr;
    }
    .example-line__list{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        height: 90%;
        border: $border;
        border-radius: $radius;
        margin: 0 auto 0 auto;
        padding: 10px 0 10px 0;
        background-color: white;
        &__item{
            width: 90%;
            height: 30%;
            border: $border;
            border-radius: $radius;
            margin: 5px;
            background: $background-gr;
        }
    }

    // Пример отрисовки БЛОКАМИ
    &__example-block{
        position: relative;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 70%;
        height: 250px;
        border: $border;
        margin: 5px;
        padding: 10px 5px 10px 5px;
        border-radius: $radius;
        background: $background-gr;
    }
    .example-block__list{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 90%;
        height: 90%;
        border: $border;
        border-radius: $radius;
        margin: 0 auto 0 auto;
        background-color: white;
        &__item{
            width: 30%;
            height: 50%;
            border: $border;
            border-radius: $radius;
            margin: 5px;
            background: $background-gr;
        }
    }
    &__btn{
        position: relative;
        justify-content: center;
        align-self: center;
        width: 90%;
        margin: 10px auto 0 auto;
        
    }
}
@include darkMode;
</style>