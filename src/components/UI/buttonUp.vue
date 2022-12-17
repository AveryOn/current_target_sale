<!-- КНОПКА ОТПРАВЛЯЕТ КЛИЕНТ В НАЧАЛО ЭКРАНА -->
<template>
    <div :class="{'btn-up-show': listclass}" class="btn-up">
        <a href="#top-app">
            <slot></slot>
        </a>
    </div>
</template>
<script>
export default {
    name: 'button-up',
    props: {
        listclass: {
            type: Boolean,
            default: false,
        }
    },
}
</script>
<style lang="scss" scoped>
.btn-up{
    z-index: 100;
    position: fixed;
    display: flex;
    background-color: black;
    color:white;
    bottom: 40px;
    left: 40px;
    width: 2em;
    height: 2em;
    visibility: hidden;
    &.btn-up-show{
        visibility: visible;
    }
}
</style>