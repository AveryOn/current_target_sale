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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
}
.modal-block{
    width: max-content;
    height: max-content;
    border: $border;
    border-radius: $radius;
    background-color: white;
    margin: auto;
}
</style>