<!-- ЕДИНИЦА ТОВАРА НАХОДЯЩАЯСЯ В КОРЗИНЕ -->
<template>
    <div class="cart-item">
        
        <!-- Чекбокс появляется когда активирован deleteModeCart удаление товара с корзины -->
        <!-- <checkbox-comp 
        class="checkbox__delete-mode-cart" 
        v-model="selectCartProductOne" 
        v-show="this.deleteModeCart">
        </checkbox-comp> -->

        <!-- Слой который закрывает карточку товара при активном моде удаления товара с корзины -->
        <div 
        class="cart__gray-layout" 
        v-show="deleteModeCart"
        @click="selectCartItem"
        >
            <!-- Табличка "Выбрано" -->
            <div 
            v-show="selectCartProductOne" 
            class="gray-layout-checked"
            >
                Выбрано!
            </div>
            Нажмите на этот товар если хотите его выбрать
        </div>

        <div class="image"></div>
        <div class="description-item">
            <div class="description-title">Название: {{ cartProduct.name }}</div>
        </div>
        <div class="buttons-item">

            <!-- Блок для верхних кнопок на карточке товара -->
            <div class="buttons-item__up">
                <button-comp @click="$router.push({name: 'product', params: {productId: cartProduct.id}})" class="btn-item">Открыть</button-comp>
                <button-comp @click="deleteProductCart" class="btn-item">
                    Удалить из корзины
                </button-comp>
            </div>

            <!-- Блок для нижних кнопок на карточке товара -->
            <div class="buttons-item__bottom">
                <button-comp class="btn-item-bottom">Купить!</button-comp>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: {
        cartProduct: {
            type: [Object],
            requierd: true,
        },
    },
    data() {
        return {
            // Поле служит для одиночного выбора товара
            selectCartProductOne: false,
        }
    },
    methods:{
        // Метод удаляет товар с корзины
        deleteProductCart(){
            this.$emit('deleteProductCart', this.cartProduct)
            document.location.reload();
        },

        // Метод отмечает карточку товара при режиме удаления
        selectCartItem(){
            this.selectCartProductOne = !this.selectCartProductOne
            if(this.selectCartProductOne){
                this.$emit('selectCartProductOne', {data: this.cartProduct, isSelect: true})
            }else{
                this.$emit('selectCartProductOne', {data: this.cartProduct, isSelect: false})
            }
        },
    },  
    computed: {
        ...mapState({
            deleteModeCart: state => state.CartModule.deleteModeCart,
            selectCartProduct: state => state.CartModule.selectCartProduct,
            removeSelectAll: state => state.CartModule.removeSelectAll,
            selectCartProduct_prefix: state => state.CartModule.selectCartProduct_prefix,
        }),
    },
    watch:{

        // Свойство отслеживает изменение клика по кнопке "Выбрать всё" 
        selectCartProduct(newValue){
            if(newValue){
                this.selectCartProductOne = true
            }else{
                this.selectCartProductOne = false
            }
        },

        // Свойство отслеживает изменение клика по кнопке "Снять выделение" 
        removeSelectAll(newValue){
            if(newValue){
                this.selectCartProductOne = false
                this.$store.commit('CartModule/falseSelectCartProduct')
            }
        },

        // Свойство отслеживает изменение одиночного клика по товару в корзине
        // Для чекбокса. Чтобы нажатие на чекбокс также выбирало товар
        selectCartProductOne(newValue){
            if(newValue){
                // Если одиночный клик по товару произошел то переменная removeSelectAll = false
                this.$store.commit('CartModule/falseRemoveCartProduct')
                if(this.selectCartProductOne){
                    this.$emit('selectCartProductOne', {data: this.cartProduct, isSelect: true})
                }
            }else{
                this.$emit('selectCartProductOne', {data: this.cartProduct, isSelect: false})
            }
        }
    },
    mounted(){

    },
}
</script>
<style lang="scss" scoped>
.cart__gray-layout{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 50px 0 0 10px;
    background-color: rgba(128, 128, 128, 0.379);
    border-radius: $radius;
    color: rgba(128, 128, 128, 0.789);
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
    .gray-layout-checked{
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: rgba(40, 238, 40, 0.5);
        color: rgba(255, 255, 255, 0.6);
        padding: 10px;
        border-radius: $radius;
    }
}
.cart-item{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: max-content;
    margin-bottom: 30px;
    margin-left: 20px;
    padding: 5px 15px;
    border: $border;
    border-radius: $radius;
    background: $background-gr;
    z-index: 1;
    &:hover{
        box-shadow: $shadow;
    }
    .checkbox__delete-mode-cart{
        position: absolute;
        left: -6px;
        top: 45%;
    }
    .image{
        min-width: 230px;
        height: 260px;
        // background: $background-gr;
        background-color: white;
        border-radius: $radius;
        margin: 10px;
    }
    .description-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 95%;
        max-width: 95%;
        height: 50px;
        margin: 10px;
        background-color: white;
        border: 1px solid white;
        border-radius: $radius;
    }
    .description-title{
        display: flex;
        background-color: white;
        padding: 5px;
        border-radius: $radius;
        overflow: hidden;
    }
    .buttons-item{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        &__up{
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        &__bottom{
            display: flex;
            justify-content: stretch;
            align-items: stretch;
            .btn-item-bottom{
                display: flex;
                justify-content: center;
                font-size: 14px;
                padding: 10px 5px;
                width: 100%;
            }
        }
        .btn-item{
            display: flex;
            justify-content: center;
            font-size: 14px;
            padding: 10px 5px;
            width: 100%;
        }
    }
}
</style>