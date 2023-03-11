<!-- КНОПКА БЕЗ ТЕКСТА С ИКОНКОЙ -->
<template>

    <button class="button-icon-comp">
        <slot></slot>
    </button>

</template>
<script>
export default {
    name: 'button-icon-comp',
}
</script>
<style lang="scss" scoped>
.button-icon-comp{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: $radius;
    border: none;
    outline: rgba(0, 0, 0, 0);
    color: $color-orange-white;
    cursor: pointer;
    background: none;
    box-shadow: 0 2px 2px black;
    &:active{
        box-shadow: 0 0px 2px black;
    }
}
</style>