<!-- ЕДИНИЦА ТОВАРА ( КАРТОЧКА ТОВАРА )-->
<template>
    <div class="product-item">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'product-item',
}
</script>
<style lang="scss" scoped>
.product-item{
    width: 180px;
    height: 230px;
    border: $border;
    border-radius: $radius;
    margin: 10px;
    transition: all 0.1s ease-in-out;
    &:hover{
        box-shadow: $shadow;
        cursor: pointer;
    }
}
</style>