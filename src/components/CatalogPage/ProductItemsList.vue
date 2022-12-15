<template>
    <div class="product-items-list">
        <!-- КАРТОЧКИ ТОВАРОВ -->
        <product-item  
        v-for="item in products" 
        :key="item.id"
        >
        Product Item: <strong>{{ item.name }}</strong>
        </product-item>
    </div>
</template>
<script>
export default {
    props: {
        products: {
            type: [Array],
            default: () => []
        }
    }
}
</script>
<style lang="scss" scoped>
.product-items-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 5px;
}
</style>