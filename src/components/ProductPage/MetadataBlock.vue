<!-- БЛОК С ХАРАКТЕРИСТИКАМИ ТОВАРА -->
<template>
    <!-- ГЛАВНЫЙ БЛОК С МЕТАДАННЫМИ ТОВАРА -->
    <div class="metadata-block">

        <!-- Уведомление ТОВАР УЖЕ ДОБАВЛЕН В КОРИЗНУ -->
        <notification-error 
        @notificationClose="repeatCartProduct = false"
        :show="repeatCartProduct"
        >
            {{'Данный товар уже добавлен в корзину'}}
        </notification-error>

        <!-- Уведомление ТОВАР ДОБАВЛЕН В КОРИЗНУ -->
        <notification-success 
        class="notification__add-cart-prod"
        @notificationClose="addProductCart = false"
        :show="addProductCart"
        >
            {{'Товар успешно добавлен в корзину!'}}
        </notification-success>

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
            <button-comp @click="addProductToCart">Добавить в корзину</button-comp>
            <!-- открывает все данные о товаре -->
            <button-comp @click="null">More...</button-comp>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){ 
        return{
            addProductCart: false,
            repeatCartProduct: false,
        }
    },
    methods: {
        // Добавление товара в localeStorage в массив товара
        addProductToCart(){
            let listCartProducts = JSON.parse(localStorage.getItem('addedProducts'))
            // массив удаленного товара
            let listDeleteProducts = JSON.parse(localStorage.getItem('deleteProducts'))

            if(listCartProducts){
                if(listCartProducts.length > 0){
                    for(const product of listCartProducts){
                        if(!JSON.stringify(listCartProducts).includes(JSON.stringify(this.currentProduct))){
                            listCartProducts.push(this.currentProduct)
                            localStorage.setItem('addedProducts', JSON.stringify(listCartProducts))
                            this.addProductCart = true
                            window.setTimeout(() => {
                                this.addProductCart = false
                            }, 2500)


                        }
                        else{
                            if(!this.addProductCart){
                                this.repeatCartProduct = true
                                window.setTimeout(() => {
                                    this.repeatCartProduct = false
                                }, 2500)
                            }else{
                                continue
                            }
                        }
                    }
                }else{
                    listCartProducts.push(this.currentProduct)
                    localStorage.setItem('addedProducts', JSON.stringify(listCartProducts))
                    this.addProductCart = true
                    window.setTimeout(() => {
                        this.addProductCart = false
                    }, 2500)
                }

                if(listDeleteProducts){
                    if(JSON.stringify(listDeleteProducts).includes(JSON.stringify(this.currentProduct))){
                        listDeleteProducts = listDeleteProducts.filter(delProduct => {
                            if(JSON.stringify(delProduct) !== JSON.stringify(this.currentProduct)){
                                return true
                            }else{
                                return false
                            }
                        })
                        localStorage.setItem('deleteProducts', JSON.stringify(listDeleteProducts))
                    }
                }

            }else{
                localStorage.setItem('addedProducts', JSON.stringify([this.currentProduct]))
                this.addProductCart = true
                window.setTimeout(() => {
                    this.addProductCart = false
                }, 2500)
            }
        },
    },
    watch: {
        darkMode(newValue){
            // Смена темы для metadataBlock
            const metadataBlock = document.querySelector('.metadata-block')
            if(newValue){
                metadataBlock.style.color = 'rgb(255, 205, 138)'
            }else{
                metadataBlock.style.color = ''
            }
        }
    },
    computed:{
        // извлечение данных товара со стора
        ...mapState({
            products: state => state.products,
            darkMode: state => state.darkMode,
        }),
        currentProduct(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return {id: product.id, name: product.name, article: product.article}
                }else{
                    continue
                }
            }
        },
        // Извлечения цены тоара
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
    },
    mounted(){
        // Смена темы для metadataBlock
        const metadataBlock = document.querySelector('.metadata-block')
        if(this.darkMode){
            metadataBlock.style.color = 'rgb(255, 205, 138)'
        }else{
            metadataBlock.style.color = ''
        }
    },
}
</script>
<style lang="scss" scoped>
.notification__add-cart-prod{
    
}
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