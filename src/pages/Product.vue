<!-- СТРАНЦИА ВЫБРАННОГО ТОВАРА -->
<template>
    <div class="Product-page">
        <h1 class="title-page-text">Page Block ID</h1>
        <!-- КОНТЕЙНЕР ДЛЯ ВНУТРЕННЕГО КОНТЕНТА -->
        <div class="product-container">
            <div class="product-content">
                
                <div class="header-block">
                    <!-- БЛОК ИЗОБАЖЕНИЙ ТОВАРА -->
                    <image-block></image-block>
                    <!-- МЕТАДАННЫЕ ТОВАРА  -->
                    <metadata-block></metadata-block>
                </div>
                <div class="body-block">
                    <h2>Описание товара</h2>
                    <!-- БЛОК ОПИСАНИЯ ТОВАРА -->
                    <descr-block></descr-block>
                    <!-- БЛОК КОММЕНТАРИЕВ -->
                    <comments-block></comments-block>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// ИМПОРТ ОСНОВНЫХ ЭЛЕМЕНТОВ СТРАНИЦЫ
import CommentsBlock from '@/components/ProductPage/CommentsBlock.vue'
import DescrBlock from '@/components/ProductPage/DescrBlock.vue'
import MetadataBlock from '@/components/ProductPage/MetadataBlock.vue'
import ImageBlock from '@/components/ProductPage/ImageBlock.vue'
import { mapState } from 'vuex';
export default {
    components:{
        CommentsBlock,
        DescrBlock,
        MetadataBlock,
        ImageBlock,
    },
    data(){
        return{

        }
    },
    watch: {
        darkMode(newValue){
            // Смена темы для ProductPage
            const ProductPage = document.querySelector('.Product-page')
            if(newValue){
                ProductPage.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            }else{
                ProductPage.style.backgroundColor = ''
            }
        }
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
    mounted(){
        // Смена темы для ProductPage
        const ProductPage = document.querySelector('.Product-page')
        if(this.darkMode){
            ProductPage.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
        }else{
            ProductPage.style.backgroundColor = ''
        }

    }
}
</script>
<style lang="scss" scoped>
h1, h2{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
hr{
    width: 95%;
    margin: 20px 0;
}
.Product-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px;
    padding: 30px 0 0 0 ;
    border: $border;
    border-radius: $radius;
    background-color: white;
    box-shadow: $shadow;
}
.title-page-text{
    display: flex;
    align-self: flex-end;
    margin-right: 30px;
    font-size: 2.5em;
}
.product-container{
    width: 100%;
    margin: 20px 0;
}
.product-content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header-block{
    display: flex;
    width: 95%;
    justify-content: space-around;
    margin: 20px 0 50px 0;
    border-top: $border;
    padding-top: 50px;
}
.body-block{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: 20px 10px;
    min-height: 20vh;
    border-top: $border;
    padding-top: 30px;
}
</style>