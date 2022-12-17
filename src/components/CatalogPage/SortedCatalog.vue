<!-- КОМПОНЕНТ ОТВЕЧАЮЩИЙ ЗА ОТРИСОВКУ ТОВАРА ПО ВЫБРАННОЙ КАТЕГОРИИ -->
<template>
    <div class="main-sorted-catalog">
        <!-- ПОИСКОВАЯ СТРОКА -->
        <input-comp placeholder="Search..." class="search"></input-comp>
        <!-- ПАНЕЛЬ С ТЕГАМИ -->
        <tag-bar :tags="tags"></tag-bar>
        <div class="body-sorted-catalog">
            <!-- ПАНЕЛЬ-ФИЛЬТР ТОВАРОВ -->
            <filter-panel></filter-panel>
            <!-- ОСНОВНОЙ БЛОК С ОТРИСОВКОЙ КАРТОЧЕК ТОВАРОВ -->
            <div class="items-block-sorted">
                <div class="items-header-sorted">
                    <h2>Products in the selected category</h2>
                </div>
                <hr>
                <!-- КАРТОЧКИ ТОВАРОВ -->
                <product-items-list :products="$store.state.CatalogModule.products"></product-items-list>
            </div>
        </div>
    </div>
</template>
<script>
import ProductItemsList from '@/components/CatalogPage/ProductItemsList.vue'
import FilterPanel from '@/components/CatalogPage/FilterPanel.vue'
import TagBar from '@/components/CatalogPage/TagsBar.vue'
export default {
    components: {
        ProductItemsList,
        FilterPanel,
        TagBar,
    },
    data(){
        return{
            tags: [
                {id: 1, name: 'one'},
                {id: 2, name: 'two'},
                {id: 3, name: 'three'},
                {id: 4, name: 'four'},
                {id: 5, name: 'five'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@include h2-gradient;
.main-sorted-catalog{
    display: flex;
    flex-direction: column;
    width: 100%;
    .search{
        display: flex;
        align-self: flex-start;
        margin: 10px 30px 10px 10px;
        padding-left:30px;
        &:focus{
            width: 50%;
        }
    }
    .body-sorted-catalog{
        display: flex;
        min-height: 80vh;
        align-items: stretch;
        justify-content: space-around;
        margin: 20px 0 20px 0;
    }

    .items-block-sorted{
        display: flex;
        flex-direction: column;
        width: 78%;
        border: $border;
        border-radius: $radius;
        box-shadow: $shadow;
        background-color: white;
        hr{
            width: 95%;
            margin: 0 auto;
        }
    }
    .items-header-sorted{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px 10px 5px 10px;    
    }


}
</style>