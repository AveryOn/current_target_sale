<!-- ОКНО РЕДАКТИРОВАНИЯ ИМЕЮЩЕГОСЯ ТОВАРА, ТАКЖЕ ИСПОЛЬЗУЕТСЯ И В OWNER СТРАНИЦЕ -->
<template>
    <div class="editor-product" v-show="show">
    
        <div class="editor-product__header">
            <h2 class="editor-product__title">Внесите изменения в поля выбранного товара</h2>
        </div>

        <div class="editor-product__body">

            It's editor_product__body
            
        </div>
        

    </div>
</template>
<script>
import ShowTemplate from '@/mixins/ShowTemplate';
export default {
    mixins: [ShowTemplate],
    props: {
        show:{
            required: true,
        }
    }
}
</script>
<style lang="scss" scoped>
.editor-product{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: max-content;
}
</style>