<!-- КОМПОНЕНТ ОТВЕЧАЮЩИЙ ЗА ОТРИСОВКУ КАТЕГОРИЙ ТОВАРОВ
    КАТЕГОРИИ ТОВАРОВ В ВИДЕ БЛОКОВ, ROUTER: /CATALOG
    КАТЕГОРИИ ДЕЛЯТСЯ НА ЕДИНИЦЫ ТОВАРА
-->
<template>
    <h1>Category</h1>
    <div class="main-block-category">
        <div class="body-block-category">
            <!-- ГРУППА БЛОКОВ КАТЕГОРИЙ ТОВАРА
                СОДЕРЖИТ В СЕБЕ ХАРАКТЕРНЫЕ ДЛЯ СВОЕЙ НАПРАВЛЕННОСТИ КАТЕГОРИИ ТОВАРА -->
            <group-category-item :title="'Prepare for Winter!'">
                <category-item 
                    @click="$router.push({name: 'sorted', params: {categoryName: `category-${index+1}`}, query: {cat: 'example'}})" 
                    v-for="(item, index) in 6" class="category-item" 
                    :key="index"
                    >
                    {{ index+1 }}
                </category-item>
            </group-category-item>
            <group-category-item :title="'Prepare for Summer!'">
                <category-item v-for="(item, index) in 6" class="category-item" :key="index">{{index+1}}</category-item>
            </group-category-item>
        </div>
    </div>
</template>
<script>
import CategoryItem from '@/components/CatalogPage/CategoryItem.vue'
import GroupCategoryItem from '@/components/CatalogPage/GroupCategoryItem.vue'
export default {
    components:{
        CategoryItem,
        GroupCategoryItem,
    },
}
</script>
<style lang="scss" scoped>

@include h1-gradient;
hr{
    width: 95%;
    margin: 20px 0;
}
.main-block-category{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    .body-block-category{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
    }

}
</style>