<template>
    <div 
    v-show="show" 
    class="notification-err"
    @click="close"
    >
        <div class="notification-err-message">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'notification-error',
    props: {
        show: {
            type: Boolean,
            default: false,
            required: true,
        }
    },
    methods: {
        close(){
            this.$emit('notificationClose')
        }
    },

}
</script>
<style lang="scss" scoped>
.notification-err{
    position: fixed;
    display: flex;
    align-items: center;
    top: 50px;
    right: 10px;
    min-width: 300px;
    min-height: 100px;
    background: linear-gradient(to right, #fc3b22aa, rgba(253, 148, 11, 0.665));
    border-radius: $radius;
    z-index: 1000;
    .notification-err-message{
        position: absolute;
        right: 10px;
        left: 10px;
        display: flex;
        justify-content: center;
        // margin: 10px;
        padding: 10px;
        background-color: red;
        color: white;
        border-radius: 10px;
    }
}
</style>