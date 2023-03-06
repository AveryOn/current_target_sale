<!-- УВЕДОМЛЕНИЕ-ПРЕДУПРЕЖДЕНИЕ  -->
<template>

        <div v-show="show" class="notification-warning" :style="(darkMode)? {color: 'rgb(253, 205, 205)'} : {color: ''}">
            <slot></slot>
        </div>

</template>


<script>
import { mapState } from 'vuex';

export default {
    name: 'notification-warning',
    props: {
        show: {
            type: Boolean,
            default: false,
            required: true,
        }
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },

}
</script>


<style lang="scss" scoped>
.notification-warning{
    position: absolute;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    // background-color: rgb(236, 194, 68);
    background: linear-gradient(to right, #fc3b22aa, rgba(253, 148, 11, 0.665));
    color: rgb(255, 255, 255);
    font-weight:600;
    border-radius: $radius;
}
</style>