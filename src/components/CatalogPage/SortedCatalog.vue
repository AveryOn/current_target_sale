<!-- КОМПОНЕНТ ОТВЕЧАЮЩИЙ ЗА ОТРИСОВКУ ТОВАРА ПО ВЫБРАННОЙ КАТЕГОРИИ -->
<template>
    <div class="main-sorted-catalog">
        <!-- ПОИСКОВАЯ СТРОКА -->
        <input-comp placeholder="Search..." class="search"></input-comp>
        <!-- ПАНЕЛЬ С ТЕГАМИ -->
        <tags-bar :tags="this.tags"></tags-bar>
        <div class="body-sorted-catalog">
            <!-- ПАНЕЛЬ-ФИЛЬТР ТОВАРОВ -->
            
            <!-- :tagsAccess="$store.getters.tagsAccess"
            :colorsAccess="$store.getters.colorsAccess"
            :materialsAccess="$store.getters.materialsAccess" -->
            <filter-panel
                :tagsAccess="tagsAccess"
                :colorsAccess="colorsAccess"
                :materialsAccess="materialsAccess"
            >
            </filter-panel>
            <!-- ОСНОВНОЙ БЛОК С ОТРИСОВКОЙ КАРТОЧЕК ТОВАРОВ -->
            <div class="items-block-sorted">
                <div class="items-header-sorted">
                    <h2>Products in the selected category</h2>
                </div>
                <hr>
                <!-- КАРТОЧКИ ТОВАРОВ -->
                <product-items-list :products="searchProducts"></product-items-list>
            </div>
        </div>
    </div>
</template>
<script>
import ProductItemsList from '@/components/CatalogPage/ProductItemsList.vue'
import FilterPanel from '@/components/CatalogPage/FilterPanel.vue'
import TagsBar from '@/components/CatalogPage/TagsBar.vue'
import { mapState } from 'vuex'
export default {
    components: {
        ProductItemsList,
        FilterPanel,
        TagsBar,
    },
    data(){
        return{

        }
    },
    // В ЭТОМ COMPUTED БЛОКЕ ПОСТРОЕНА ФИЛЬТР-ЛОГИКА 
    computed: {
        ...mapState({
            // фильтр-данные для фильтр-панели, заполняются в фильтр-панели
            // и отправляются в обьект filterData в сторе, по этому обьекту и происходит сортировка товара
            filterData: 'filterData',
            tags: 'tags'
        }),
        // Для фильтр панели, возвращает массив всех доступных тегов для фильтр панели.
        // Теги фильтруются по массиву всех доступных товаров 
        tagsAccess(){
            const allTags = []
            // Берутся саммые последние фильтр-данные
            this.searchProducts.forEach(product => {
                allTags.push(product.tags)
            })
            // возвращается массив с тегами
            return allTags.flat().filter((tag, i) => allTags.flat().indexOf(tag) === i)
        },
        // Для фильтр панели, возвращает массив всех доступных цветов для фильтр панели.
        // Теги фильтруются по массиву всех доступных товаров 
        colorsAccess(){
            const allColors = []
            // Берутся саммые последние фильтр-данные
            this.searchProducts.forEach(product => {
                allColors.push(product.specifications.color)
            })
            // возвращается массив с тегами
            return allColors.filter((tag, i) => allColors.indexOf(tag) === i)
        },
        // Для фильтр панели, возвращает массив всех доступных материалов для фильтр панели.
        // Теги фильтруются по массиву всех доступных товаров 
        materialsAccess(){
            const allMaterials = []
            // Берутся саммые последние фильтр-данные
            this.searchProducts.forEach(product => {
                allMaterials.push(product.specifications.material)
            })
            // возвращается массив с тегами
            return allMaterials.flat().filter((tag, i) => allMaterials.flat().indexOf(tag) === i)
        },
        // Фильтрация товара относительно активных тегов(this.$store.state.tags) которые добавляются 
        // либо с фильтр-панели либо по выбору определенных категорий товара в меню каталога
        sortedProduct(){
            if(this.tags.length >= 1){
                return [...this.$store.state.products].filter(product => {
                    for(const tag of this.tags){
                        if(!product.tags.includes(tag)){
                            return true
                        }else{
                            return false
                        }
                    }
                })
            }else{
                return this.$store.state.products
            }
        },
        // Выполняется фильтрация товара по тегам если функция addFilterData внесет данные фильтров
        // Если данные для фильтрации не зафиксированы функцией addFilterData,
        // то фильтрация игнорируется и возвращается массив - this.sortedProduct
        // 1) Фильтрация по тегам
        filterByTags(){
            // сюда помещаются отсортированные по тегам товары
            const productsFiltered = []
            // проверка: если массив тегов у данных фильтр панели больше 1
            // то выполняется сортировка
            if(this.filterData.tags.length >= 1){
                // фильтрация массива товаров
                // Фильтрация проходит по прошлому вычесляемому св-ву
                [...this.sortedProduct].filter(product => {
                    // на каждой итерации цикла проверяется обьект с данными фильтр-панели( this.filterData)
                    // для каждого элемента (тега), выполняется проверка
                    this.filterData.tags.forEach(tag => {
                        // на каждой итерации условие проверяет 
                        // если проверяемый на текущей итерации элемент есть в проверяющемся на текущей итерации 
                        // метода filter товаре (в product.tags)
                        if(product.tags.includes(tag)){
                            // то выполняется добавление данного товара в массив productsFiltered
                            productsFiltered.push(product)
                        }
                    })
                })
                // Фильтрует выходной массив товаров исключая повторяющиеся 
                return [...productsFiltered].filter((product, i) => productsFiltered.indexOf(product) === i)
            }else{
                // Возвращает массив товаров с прошлого вычесления если фильтрация по тегам не выполнится 
                return this.sortedProduct
            }
        },
        // 2) Фильтрация по цене
        filterByPrice(){
            if(this.filterData.price.to != 0 && this.filterData.price.from != 0){
                return [...this.filterByTags].filter(product => {
                    if(product.price <= this.filterData.price.to && product.price >= this.filterData.price.from){
                        return true
                    }
                })
            }else{
                return this.filterByTags
            }
        },
        // 3) Фильтрация товара по цвету 
        filterByColor(){
            if(this.filterData.colors.length >= 1){
                return [...this.filterByPrice].filter(product => {
                    return this.filterData.colors.includes(product.specifications.color)
                })
            }else{
                return this.filterByPrice
            }
        },
        // 4) Фильтрация по материлу товара. У каждого товара есть массив с материалом из которого он состоит
        // Он сравнивается с фильтр-данными this.filterData.materials
        filterByMaterial(){
            if(this.filterData.materials.length >=1){
                return [...this.filterByColor].filter(product => {
                    for(const material of this.filterData.materials){
                        for(const prodMaterial of product.specifications.material){
                            if(prodMaterial == material){
                                return true
                            }
                        }
                    }
                })
            }else{
                return this.filterByColor
            }
        },
        searchProducts(){
            return [...this.filterByMaterial].filter(product => product.name.toLowerCase().includes(this.filterData.searchProduct.toLowerCase()))
        },
        // activeTags(){
        //     if(this.tags.length >= 1){
        //         return this.tags
        //     }else if(this.tags <= 0){
        //         return this.tags.push('Все товары')
        //     }
        // }
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