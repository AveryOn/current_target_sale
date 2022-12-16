<!-- БЛОК - ГРУППА С НАБОРОМ КАРТОЧЕК КАТЕГОРИЙ ТОВАРОВ -->
<template>
    <div class="group-block-category">
        <h1 class="title-group-block">{{ title }}</h1>
        <div class="body-group-category">
            <!-- ЭТО ГИБКИЙ КОНТЕЙНЕР СЛУЖИТ ДЛЯ ЦЕНТРОВАНИЯ И ВЫРАВНИВАНИЯ 
                КАРТОЧЕК КАТЕГОРИЙ ВНУТРИ СЕБЯ -->
            <div class="body-group-category-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: [String, Number],
            default: '_title_group_',
        }
    }
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
.group-block-category{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: $border;
    border-radius: $radius;
    width: 90%;
    margin: 20px 0 30px 0;
}
.title-group-block{
    display: flex;
    margin-top: 10px;
}
.body-group-category{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 20px 0;
}
.body-group-category-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
}  
</style>