<!-- МИНИ-УВЕДОМЛЕНИЕ-УСПЕХ -->
<template>

    <div v-show="show" class="notification-mini-success">
        <slot></slot>
    </div>

</template>


<script>
export default {
name: 'notification-mini-success',
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
.notification-mini-success{
position: absolute;
display: flex;
justify-content: center;
padding: 10px 20px;
// background-color: rgb(236, 194, 68);
background: linear-gradient(to right, #7fd311da, rgba(241, 253, 11, 0.822));
color: rgb(255, 255, 255);
font-weight:600;
border-radius: $radius;
text-shadow: 0 0 20px black;
cursor: default;
}
</style>