<!-- БЛОК С ХАРАКТЕРИСТИКАМИ ТОВАРА -->
<template>
    <div @click="log" class="metadata-block">
        <h2>Meta Data Block:</h2>
        <h2 class="h3">Название: {{ this.metaTitleData }}</h2>
        <h3 class="h3">ID: {{ this.$route.params.productId }}</h3>
        <h3 class="h3">Группа: {{ this.metaGroupData }}</h3>
        <h3 class="h3">Категория: {{ this.metaCategoryData }}</h3>
        <h3 class="h3">Цена: {{ this.metaPriceData }}</h3>
        <h3 class="h3">Цвет: {{ this.metaColorsData }}</h3>
        <h3 class="h3">Материал: {{ this.metaMaterialData }}</h3>
        <h3 class="h3">Теги: {{ this.metaTagsData }}</h3>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    methods: {
        log(){
            console.log(this.metaPriceData);
            // console.log(this.$route.params.productId);
        }
    },
    computed:{
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
        metaTitleData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.name
                }else{
                    continue
                }
            }
        },
        metaColorsData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.specifications.colors.join(', ')
                }else{
                    continue
                }
            }
        },
        metaMaterialData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.specifications.material.join(', ')
                }else{
                    continue
                }
            }
        },
        metaCategoryData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.category.name
                }else{
                    continue
                }
            }
        },
        metaGroupData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.group.name
                }else{
                    continue
                }
            }
        },
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
    align-items: flex-start;
    justify-content: center;
    height: 400px;
    width: max-content;
    padding: 0 20px;
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
}
.h3{
    margin-top: 5px;
}
</style>