<!-- СТРАНЦИА ВЫБРАННОГО ТОВАРА -->
<template>
    <div class="Product-page">
        <h1>Page Block ID</h1>
        <!-- КОНТЕЙНЕР ДЛЯ ВНУТРЕННЕГО КОНТЕНТА -->
        #product-container
        <div class="product-container">
            #product-content
            <div class="product-content">
                <h2>Header Block</h2>
                <hr>
                <div class="header-block">
                    <!-- БЛОК ИЗОБАЖЕНИЙ ТОВАРА -->
                    <image-block></image-block>
                    <!-- МЕТАДАННЫЕ ТОВАРА  -->
                    <metadata-block></metadata-block>
                </div>
                <h2>Body Block</h2>
                <div class="body-block">
                    <!-- БЛОК ОПИСАНИЯ ТОВАРА -->
                    <descr-block></descr-block>
                    <hr>
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
    margin: 100px 15px 100px 15px;
    padding: 30px 0 0 0 ;
    border: $border;
    border-radius: $radius;
    background-color: white;
    box-shadow: $shadow;
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
    width: 100%;
    justify-content: space-around;
    margin: 20px 0;
}
.body-block{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px;
    min-height: 20vh;
}
</style>