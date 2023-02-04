<!-- МОДАЛЬНОЕ ОКНО -->
<template>
    <div v-show="show" class="modal-background">
        <div @click.stop class="modal-block">
        <slot></slot>
        </div>
    </div>
</template>
<script>
import ShowTemplate from '@/mixins/ShowTemplate';
export default {
    name: 'modal-comp',
    mixins: [ShowTemplate],
}
</script>
<style lang="scss" scoped>
.modal-background{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    background-color: rgba(0,0,0,.5);
    padding: 0 50px;
    .modal-block{
        width: max-content;
        height: max-content;
        border-radius: $radius;
        box-shadow: $shadow;
    }
}
</style>