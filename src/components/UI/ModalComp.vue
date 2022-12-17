<!-- МОДАЛЬНОЕ ОКНО -->
<template>
    <div v-show="show" class="modal-background">
        <div @click.stop class="modal-block">
        <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modal-comp',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
.modal-background{
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    transition: display 1s ease-in;
}
.modal-block{
    max-width: 80%;
    height: max-content;
    margin: auto;
}
</style>