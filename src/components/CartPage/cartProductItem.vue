<!-- ЕДИНИЦА ТОВАРА НАХОДЯЩАЯСЯ В КОРЗИНЕ -->
<template>
    <div class="cart-item">
        <div class="image"></div>
        <div class="description-item">
            <div class="description-title">Название: {{ cartProduct.name }}</div>
        </div>
        <div class="buttons-item">
            <button-comp @click="$router.push({name: 'product', params: {productId: cartProduct.id}})" class="btn-item">Open</button-comp>
            <form type="submit">
                <button-comp @click="deleteProductCart" class="btn-item">
                    Delete Product
                </button-comp>
            </form>
            <button-comp class="btn-item">Buy!</button-comp>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        cartProduct: {
            type: [Object],
            requierd: true,
        },
    },
    methods:{
        deleteProductCart(){
            this.$emit('deleteProductCart', this.cartProduct)
        }
    },
}
</script>
<style lang="scss" scoped>
.cart-item{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 180px;
    height: max-content;
    margin-bottom: 30px;
    padding: 5px 15px;
    border: $border;
    border-radius: $radius;
    background: linear-gradient(to right, #fc3b22, $color-orange-white);
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