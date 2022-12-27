<!-- КАТАЛОГ: ЗДЕСЬ ХРАНЯТСЯ ВСЕ ДАННЫЕ О ТОВАРОВ 
    КАТАЛОГ - РАЗДЕЛЯЕТСЯ НА КАТЕГОРИИ, 
    КАТЕГОРИИ - ДЕЛЯТСЯ НА ЕДИНИЦЫ КОНЕЧНОГО ТОВАРА 
 -->
<template>
    <div class="Catalog-products">
        <!-- ШАПКА СТРАНИЦЫ -->
        <div class="header-bar">
            <h1 class="headar-title">Catalog Store</h1>
        </div>
        <!-- СЮДА ВСТАВЛЯЮТСЯ ШАБЛОН КАТЕГОРИЙ ТОВАРА И ШАБЛОН С ВЫБРАННОЙ ГРУППОЙ ТОВАРОВ -->
        <!-- ВМЕСТО КОМПОНЕНТОВ СЮДА БУДУТ МОНТИРОВАТЬСЯ ИМЕНОВАННЫЕ router-view -->
        <router-view></router-view>
        <!-- <category-products></category-products> -->
        <!-- <sorted-catalog></sorted-catalog> -->
    </div>
</template>
<script>
import CategoryProducts from '@/components/CatalogPage/CategoryProducts.vue'  
import SortedCatalog from '@/components/CatalogPage/SortedCatalog.vue'
export default {
    components: {
        CategoryProducts,
        SortedCatalog,
    },

}
</script>
<style lang="scss" scoped>
@include h1-gradient;
hr{
    width: 95%;
    margin: 15px 15px;
}
.Catalog-products{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    // border: $border;
    // border-radius: $radius;
    .header-bar{
        display: flex;
        width: 100%;
        padding: 10px;
    }
    .headar-title{
        display: flex;
        font-size: 2.5em;
        margin: 10px 30px 0 auto;
    }

}
</style>