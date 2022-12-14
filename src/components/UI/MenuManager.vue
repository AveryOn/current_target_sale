<!-- ЭТО МЕНЮ ДЕЙСТВИЙ НА СТРАНИЦЕ МОДЕРАТОРА, ФУНКЦИОНАЛ КНОПОК ЭТОГО МЕНЮ ЗАВИСИТ ОТ ПРАВ ВЫДАВАЕМЫХ
    МОДЕРАТОРУ ВЛАДЕЛЬЦЕМ САЙТА
-->
<template>
    <div class="manager-panel">
        <div class="options-bar">
            <h2 class="descr-options-bar">Panel of Manager</h2>
            <slot></slot>
        </div>
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
    justify-content: space-between;
    align-items: center;
}
.options-bar{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: max-content;
    margin: 30px;
    padding: 10px;
    border: $border; 
    border-radius: $radius;
    align-self: flex-start;
}
.descr-options-bar{
    background-image: linear-gradient(to right, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.option{
    display: flex;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    width: 90%;
    border: $border;
    font-size: 18px;
    margin: 10px;
}
</style>


