<!-- ЭТО МЕНЮ ДЕЙСТВИЙ НА СТРАНИЦЕ МОДЕРАТОРА, ФУНКЦИОНАЛ КНОПОК ЭТОГО МЕНЮ ЗАВИСИТ ОТ ПРАВ ВЫДАВАЕМЫХ
    МОДЕРАТОРУ ВЛАДЕЛЬЦЕМ САЙТА
    ТАКЖЕ ИСПОЛЬЗУЕТСЯ И НА СТРАНИЦЕ ВЛАДЕЛЬЦА
-->
<template>
    <div class="manager-panel">
        <h2 class="descr-options-bar">Panel of Manager</h2>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'menu-manager',
}
</script>
<style lang="scss" scoped>


.manager-panel{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: stretch;
    margin: 30px;
    padding: 10px;
    border: $border; 
    border-radius: $radius;
    align-self: flex-start;
    box-shadow: $shadow;
}
.descr-options-bar{
    display: flex;
    flex-wrap: wrap;
    background-image: linear-gradient(to right, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>


