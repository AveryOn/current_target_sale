<!-- ЕДИНИЦА ТОВАРА НАХОДЯЩАЯСЯ В КОРЗИНЕ -->
<template>
    <div class="cart-item">
        
        <!-- Чекбокс появляется когда активирован deleteModeCart удаление товара с корзины -->
        <checkbox-comp 
        class="checkbox__delete-mode-cart" 
        v-model="selectCartProductOne" 
        v-show="this.deleteModeCart">
        </checkbox-comp>

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
            <button-comp @click="$router.push({name: 'product', params: {productId: cartProduct.id}})" class="btn-item">Open</button-comp>
            <button-comp @click="deleteProductCart" class="btn-item">
                Delete Product
            </button-comp>
            <button-comp class="btn-item">Buy!</button-comp>
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
    align-items: center;
    justify-content: center;
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
    justify-content: space-around;
    align-items: center;
    width: 95%;
    height: 180px;
    height: max-content;
    margin-bottom: 30px;
    margin-left: 20px;
    padding: 5px 15px;
    border: $border;
    border-radius: $radius;
    background: linear-gradient(to right, #fc3b22, $color-orange-white);
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
        min-width: 120px;
        height: 150px;
        // background: $background-gr;
        background-color: white;
        border-radius: $radius;
        margin: 10px;
    }
    .description-item{
        display: flex;
        flex-direction: column;
        min-width: 70%;
        max-width: 70%;
        height: 150px;
        margin: 10px;
        background-color: white;
        border: 1px solid white;
        border-radius: $radius;
    }
    .description-title{
        margin: 5px 5px 0 5px;
        background-color: white;
        padding: 5px;
        overflow: hidden;
        border-bottom: $border;
    }
    .buttons-item{
        display: flex;
        width: max-content;
        flex-direction: column;
        // border: $border;
        // border-radius: $radius;
        .btn-item{
            display: flex;
            justify-content: center;
            font-size: 15px;
        }
    }
}
</style>