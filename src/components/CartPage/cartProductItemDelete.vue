<!-- ЕДИНИЦА ТОВАРА НАХОДЯЩАЯСЯ В КОРЗИНЕ -->
<template>
    <div class="cart-item">

        <div class="image"></div>
        <div class="description-item">
            <div class="description-title">Название: {{ cartProduct.name }}</div>
        </div>
        <div class="buttons-item">
            <button-comp @click="$router.push({name: 'product', params: {productId: cartProduct.id}})" class="btn-item">Открыть</button-comp>
            <button-comp @click="removeProductCart">Восстановить</button-comp>
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
        removeProductCart(){
            this.$emit('removeProductCart')
        }
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
    },
}
</script>
<style lang="scss" scoped>
.cart-item{
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    width: max-content;
    height: max-content;
    margin-bottom: 30px;
    padding: 5px 15px;
    border: $border;
    border-radius: $radius;
    background: linear-gradient(to right, #fc3b22, $color-orange-white);
    z-index: 1;
    &:hover{
        box-shadow: $shadow;
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
        .btn-item{
            display: flex;
            justify-content: center;
            font-size: 15px;
        }
    }
}
</style>