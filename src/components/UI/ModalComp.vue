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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    padding: 0 50px;
}
</style>