<!-- ПАНЕЛЬ ФИЛЬТРОВ КОТОРАЯ УПРАВЛЯЕТ СОРТИРОВКОЙ ТОВАРА
    НА ДАННЫЙ МОМЕНТ АДАПТИРОВАНА ТОЛЬКО ПОД СТРАНИЦУ SortedCatalog -->
<template>
    <div class="filter-panel">
        <h2 class="filter-panel-header">Filter panel</h2>
        <!-- Панель с тегами -->
        <div class="panel-tags" >
            <h3>Фильтрация по тегам</h3>
            <div
                @click="appendTags(tagFilter)"
                class="filer-tag"
                :class="{'tagFilter': tags.includes(tagFilter)}"
                v-for="(tagFilter, i) in tagsAccess"
            >
               {{ i+1 }} : {{ tagFilter }}
            </div>
        </div>

        <!-- Панель с ценами -->
        <!-- В этой панели происходит выставление значений цены для фильтрации товара  -->
        <div class="panel-tags">
            <h3>Фильтрация по ценам</h3>
            <h4>Укажите цену</h4>
            <!-- Начальное знанчение цены -->
            <range-input id="fromInput" :min="0" :max="9900" step="1" :value="valueInputRange" @input="fromPriceUpdate"></range-input>
            <output name="" for="fromInput" id="fromPrice"> От: {{ fromPrice }}р.</output>
            <!-- Конечное значение цены -->
            <range-input id="toInput" :min="0" :max="10000" step="1" :value="valueInputRange" @input="toPriceUpdate"></range-input>
            <output name="" for="toInput" id="toPrice"> До: {{ toPrice }}р.</output>
        </div>

        <!-- Панель цветов -->
        <div class="panel-tags">
            <h3>Фильтрация по цвету</h3>
            <div
                @click="appendColor(tagColor)"
                class="filer-tag"
                :class="{'tagColor': colors.includes(tagColor)}"
                v-for="tagColor in colorsAccess"
            >
                {{ tagColor }}
            </div>
        </div>

        <!-- Панель материалов -->
        <div class="panel-tags">
            <h3>Фильтрация по матриалу</h3>
            <div
                @click="appendMaterial(tagMaterial)"
                class="filer-tag"
                :class="{'tagMaterial': materials.includes(tagMaterial)}"
                v-for="tagMaterial in materialsAccess"
            >
                {{ tagMaterial }}
            </div>
        </div>

        <button-comp @click="addFilterData">Отфильтровать</button-comp>
        <button-comp @click="clearFilterData">Очистить фильтр</button-comp>

    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: {
        // Отрисовывает список тегов которые доступны для фильтрации
        tagsAccess: {
            type: [Array],
            default: () => []
        },
        colorsAccess: {
            type: [Array],
            default: () => []
        },
        materialsAccess: {
            type: [Array],
            default: () => []
        },
        filteredTagsBar: {
            type: [Array],
            defaultL: () => []
        }
    },
    data(){
        return{
            // промежуточные массивы. Отправляются в обьект filterData ($store.state.filterData)
            tags: [],
            price: {from: null, to: null},
            colors: [],
            materials: [],

            // Поле для присваивания начального значения бегунку range.
            // Использзуется только в методе clearFilterData 
            valueInputRange: 0,

            // Модели для бегунков сортировки товаров по цене
            // fromPrice - начальное значение, toPrice - конечное значение
            // Эти поля записываются в обьект фильтр-данных ($store.state.filterData)
            fromPrice: 0,
            toPrice: 0,
        }
    },
    computed: {
        ...mapState({
            filterData: state => state.filterData
        }),
    },
    methods: {
        // Метод добавляет теги с фильтр панели в промежуточные массивы
        // которые после по нажатию кнопки будут добавлены в filterData
        appendTags(tagFilter){
            // this.isSelectTag это поле по которому повторный клик на один и тот же тег приведет к его удалению 
            // из промежуточного массива
            this.isSelectTag = false
            if(!this.tags.includes(tagFilter)){
                this.isSelectTag = true
                this.tags.push(tagFilter)
            }
            else if(!this.isSelectTag){
                this.tags.splice(this.tags.indexOf(tagFilter), 1)
            }
            console.log(this.isSelectTag);
            console.log(this.tags)
        },
        // Добавляет теги цветов товаров с панели фильтра по цвету в промежуточный массив this.colors
        appendColor(tagColor){
            this.isSelectColor = false
            if(!this.colors.includes(tagColor)){
                this.isSelectColor = true
                this.colors.push(tagColor)
            }
            else if(!this.isSelectTag){
                this.colors.splice(this.colors.indexOf(tagColor), 1)
            }
            console.log(this.isSelectColor);
            console.log(this.colors)
        },
        // Добавляет теги материалов товаров с панели фильтра по материалам в промежуточный массив this.materials
        appendMaterial(tagMaterial){
            this.isSelectMaterial = false
            if(!this.materials.includes(tagMaterial)){
                this.isSelectMaterial = true
                this.materials.push(tagMaterial)
            }
            else if(!this.isSelectTag){
                this.materials.splice(this.materials.indexOf(tagMaterial), 1)
            }
            console.log(this.isSelectMaterial);
            console.log(this.materials)
        },
        // Метод динамически обновляет значение поля this.fromPrice
        fromPriceUpdate(event){
            this.fromPrice = event.target.value
            this.price.from = 
            console.log(this.fromPrice);
        },
        // Метод динамически обновляет значение поля this.toPrice
        toPriceUpdate(event){
            this.toPrice = event.target.value
            console.log(this.toPrice);
        },
        // Метод добавляет все данные с фильтр-панели в обьект filterData ($store.state.filterData)
        addFilterData(){
            console.log('Отфильтровать')
            console.log(this.$route.query.groupName)
            console.log('filteredTagsBar', this.filteredTagsBar)
            for(const group of this.$store.state.groups){
                if(group.name === this.filteredTagsBar[0]){
                    this.$router.push({name: 'sorted', query: {
                        groupName: this.$route.query.groupName,
                        categoryName: (this.$route.query.categoryName) ? this.$route.query.categoryName : undefined,
                        tag: (this.tags.length > 0) ? this.tags : undefined,
                        priceFrom: (this.fromPrice > 0) ? this.fromPrice : undefined,
                    }
                })
                }
                else if(!this.$route.query.tag){
                    this.$router.push({name: 'sorted', query: {
                        tag: (this.tags.length > 0) ? this.tags : undefined,
                    }})
                    if(!this.$route.query.priceFrom){
                        this.$router.push({name: 'sorted', query: {
                            priceFrom: (this.fromPrice > 0) ? this.fromPrice : undefined,
                            priceTo: (this.toPrice > 0) ? this.toPrice : undefined,
                        }})
                    }
                }
                else if(!this.$route.query.priceFrom){
                    this.$router.push({name: 'sorted', query: {
                        priceFrom: (this.fromPrice > 0) ? this.fromPrice : undefined,
                    }})
                }
            }
            // if(this.$store.state.groups.includes(this.filteredTagsBar[0])){

            // }
            // else{
            //     this.$router.push({name: 'sorted', query: {
            //         tag: (this.tags.length > 0) ? this.tags : undefined,
            //         priceFrom: (this.fromPrice > 0) ? this.fromPrice : undefined,
            //     }})
            // }
            console.log(this.$store.state.tags)
            this.filterData.tags = this.tags
            this.filterData.price.from = this.fromPrice
            this.filterData.price.to = this.toPrice
            this.filterData.colors = this.colors
            this.filterData.materials = this.materials
            this.tags = []
            this.colors = []
            this.materials = []
            // this.fromPrice = 0
            // this.toPrice = 0
            // fromInput.value = 0
            // toInput.value = 0
        },
        // Отчищает фильтр-данные. Приводит все поля this.filterData в исходное положение 
        clearFilterData(){
            this.$router.push({name: 'sorted', query: {
                tag: undefined,
            }}) 
            this.filterData.searchProduct = ''
            this.filterData.tags = []
            this.filterData.price = {from: 0, to: 0}
            this.filterData.colors = []
            this.filterData.materials = []
            this.valueInputRange = 0
            this.fromPrice = 0
            this.toPrice = 0
            fromInput.value = 0
            toInput.value = 0
        },
    }
}
</script>
<style lang="scss" scoped>
@include h2-gradient;
.filter-panel{
    position: sticky;
    top: 50px;
    z-index: 9;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 19%;
    height: max-content;
    border: $border;
    border-radius: $radius;
    padding-bottom: 20px;
    box-shadow: $shadow;
    background-color: white;
}
.panel-tags{
        border: $border;
        border-radius: $radius;
        padding: 5px;
        margin: 5px;
    }
.filer-tag{
        display: flex;
        width: max-content;
        height: max-content;
        background-color: rgba(255, 255, 255, 0.282);
        border: $border;
        border-radius: $radius;
        margin: 2px;
        padding: 3px;
    }
.tagFilter{
    background-color: gray;
}
.tagColor{
    background-color: gray;
}
.tagMaterial{
    background-color: gray;
}
.filter-panel-header{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 0 5px 0;
    border-bottom: $border;
}
</style>