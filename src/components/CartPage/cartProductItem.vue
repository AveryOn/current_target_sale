<!-- ЕДИНИЦА ТОВАРА НАХОДЯЩАЯСЯ В КОРЗИНЕ -->
<template>
    <div class="cart-item">
        <div class="image"></div>
        <div class="description-item"></div>
        <div class="buttons-item">
            <button-comp class="btn-item">Open</button-comp>
            <button-comp class="btn-item">Delete Product</button-comp>
            <button-comp class="btn-item">Buy!</button-comp>
        </div>
    </div>
</template>
<script>
export default {
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
    margin-bottom: 40px;
    padding: 5px;
    border: $border;
    border-radius: $radius;
    background-color: white;
    &:hover{
        box-shadow: $shadow;
    }
    .image{
        width: 120px;
        height: 150px;
        background: $background-gr;
        border-radius: $radius;
        margin: 10px;
    }
    .description-item{
        display: flex;
        width: 70%;
        height: 150px;
        margin: 10px;
        border: $border;
        border-radius: $radius;
    }
    .buttons-item{
        display: flex;
        width: max-content;
        flex-direction: column;
        // border: $border;
        // border-radius: $radius;
        .btn-item{
            font-size: 15px;
        }
    }
}
</style>