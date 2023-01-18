<!-- БЛОК С ХАРАКТЕРИСТИКАМИ ТОВАРА -->
<template>
    <!-- ГЛАВНЫЙ БЛОК С МЕТАДАННЫМИ ТОВАРА -->
    <div class="metadata-block">
        <!-- КОНТЕЙНЕР ДЛЯ НАЗВАНИЯ И ЦЕНЫ -->
        <div class="metadata-block_title">
            <!-- НАЗВАНИЕ ТОВАРА -->
            <h2 class="product--title">{{ this.metaTitleData }}</h2>
            <!-- ЦЕНА ТОВАРА -->
            <h3 class="product--price">Цена: {{ this.metaPriceData }}</h3>
        </div>
        <!-- КОНТЕЙНЕР ДЛЯ ОСНОВНЫХ МЕТАДАННЫХ -->
        <div class="metadata-block_body">
            <h3 class="metadata-block_body__item">ID: {{ this.$route.params.productId }}</h3>
            <h3 class="metadata-block_body__item">Группа: {{ this.metaGroupData }}</h3>
            <h3 class="metadata-block_body__item">Категория: {{ this.metaCategoryData }}</h3>
            <h3 class="metadata-block_body__item">Цвет: {{ this.metaColorsData }}</h3>
            <h3 class="metadata-block_body__item">Материал: {{ this.metaMaterialData }}</h3>
            <h3 class="metadata-block_body__item">Теги: {{ this.metaTagsData }}</h3>
        </div>
        <!-- КОНТЕЙНЕР ДЛЯ КНОПОК -->
        <div class="metadata-block_btns">
            <!-- добавляет товар в корзину -->
            <button-comp>Add to Cart</button-comp>
            <!-- открывает все данные о товаре -->
            <button-comp>More...</button-comp>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    methods: {

    },
    computed:{
        // извлечение данных товара со стора
        ...mapState({
            products: state => state.products, 
        }),
        metaPriceData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.price
                }else{
                    continue
                }
            }
        },
        // Извлечения название тоара
        metaTitleData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.name
                }else{
                    continue
                }
            }
        },
        // Извлечения цвета тоара
        metaColorsData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.specifications.colors.join(', ')
                }else{
                    continue
                }
            }
        },
        // Извлечения материала тоара
        metaMaterialData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.specifications.material.join(', ')
                }else{
                    continue
                }
            }
        },
        // Извлечения категории тоара
        metaCategoryData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.category.name
                }else{
                    continue
                }
            }
        },
        // Извлечения группы тоара
        metaGroupData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.group.name
                }else{
                    continue
                }
            }
        },
        // Извлечения тегов тоара
        metaTagsData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.group.name
                }else{
                    continue
                }
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.metadata-block{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 400px;
    min-width: 30%;
    max-width: 50%;
    width: max-content;
    padding: 0 20px;
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
    &_title{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: wrap;
        // border: $border;
        // border-radius: $radius;
        .product--title{
            width: 100%;
            margin-top: 5px;
            // border: $border;
            // border-radius: $radius;
            word-wrap: break-word;
        }
        .product--price{
            margin: 5px 0 0 0;
        }
    }
    &_body{
        margin: auto;
        // :nth-last-child(1){

        // }
        &__item{
            border-bottom: $border;
            padding: 5px;
            margin-top: 1px;
        }
    }
    &_btns{
        display: flex;
        justify-content: space-between;
        margin-top: auto;
        margin-bottom: 5px;
        // border: $border;
        // border-radius: $radius;
    }
}
</style>