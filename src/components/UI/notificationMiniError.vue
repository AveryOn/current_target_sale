<!-- МИНИ-УВЕДОМЛЕНИЕ-УСПЕХ -->
<template>

    <div v-show="show" class="notification-mini-error">
        <slot></slot>
    </div>

</template>


<script>
export default {
name: 'notification-mini-error',
props: {
    show: {
        type: Boolean,
        default: false,
        required: true,
    }
},

}
</script>


<style lang="scss" scoped>
.notification-mini-error{
position: absolute;
display: flex;
justify-content: center;
padding: 10px 20px;
// background-color: rgb(236, 194, 68);
background: linear-gradient(to right, #d31111da, rgba(253, 51, 11, 0.822));
color: rgb(255, 255, 255);
font-weight:600;
border-radius: $radius;
text-shadow: 0 0 20px black;
}
</style>