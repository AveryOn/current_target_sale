
<!-- КОМПОНЕНТ ДЛЯ ОТРИСОВКИ ЭЛЕМЕНТА ДАННЫХ В АККАУНТЕ КЛИЕНТА -> ИНФОРМАЦИОННОМ БЛОКЕ -->
<!-- ПРИНМАЕТ ДВА ПРОПСА: НАЗВАНИЕ ЭЛЕМЕНТА ДАННЫХ (titleItem) И ЗНАЧЕНИЕ (valueItem) -->
<template>
    <li class="data-block__item">
        <p class="data-block__item--title">{{ titleItem }}</p>
        <p class="data-block__item--value">{{ valueItem }}</p>
    </li>
</template>
<script>
export default {
    name: 'account-info-item',
    props: {
        titleItem: {
            type: [String],
            required: true,
        },
        valueItem: {
            type: [String, Number],
            required: false,
            default: 'Нет',
        }
    }
}
</script>
<style lang="scss" scoped>
.data-block__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: $border;
    border-radius: $radius;
    margin: 10px 5px;
    padding: 10px 0;
    cursor: default;
    .data-block__item--title{
        display: flex;
        flex-wrap: wrap;
        max-width: 50%;
        font-size: 1.3em;
        color: $or-wh-txt;
        margin: 10px 30px 10px 20px;
    }
    .data-block__item--value{
        font-size: 1.3em;
        color: $or-wh-txt;
        font-weight: bolder;
        margin: 10px 20px;
    }  
}
</style>