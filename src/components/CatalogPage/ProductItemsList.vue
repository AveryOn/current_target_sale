<!-- БЛОК С ОТРИСОВКОЙ ОТСОРТИРОВАННОГО МАССИВА КАРТОЧЕК ТОВАРА -->
<template>
    <div class="product-items-list">
        <!-- КАРТОЧКИ ТОВАРОВ -->
        <product-item  
        v-for="product in products" 
        :key="product.id"
        >
        Product Item: <strong>{{ product.name }}</strong>
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
    },
    computed: {

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