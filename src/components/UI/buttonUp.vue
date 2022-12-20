<!-- КНОПКА ОТПРАВЛЯЕТ КЛИЕНТ В НАЧАЛО ЭКРАНА -->
<template>
    <div @click="upper" :class="{'btn-up-show': listclass}" class="btn-up">
            <slot></slot>
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
    methods: {
        upper(){
            window.scroll({
                left: 0,
                top: 0,
                behavior: 'smooth',
            })
        }
    }
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