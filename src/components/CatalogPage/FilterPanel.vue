<!-- ПАНЕЛЬ ФИЛЬТРОВ КОТОРАЯ УПРАВЛЯЕТ СОРТИРОВКОЙ ТОВАРА
    НА ДАННЫЙ МОМЕНТ АДАПТИРОВАНА ТОЛЬКО ПОД СТРАНИЦУ SortedCatalog -->
<template>
    <div class="filter-panel">
        <h2 class="filter-panel-header">Filter panel</h2>
        <div class="panel-options" v-for="(option, index) in 10">{{index+1}}</div>
    </div>
</template>
<script>
export default {
    
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
.filter-panel-header{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 0 5px 0;
    border-bottom: $border;
}
.panel-options{
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: $border;
    padding: 10px 0;
    &:hover{
        cursor: pointer;
        background-color: rgba(0,0,0, .15);
    }
}
</style>