<!-- ПРЕДУПРЕЖДЕНИЕ О ВКЛЮЧЕННОЙ КЛАВИШЕ CAPSLOCK -->
<template>
    <!-- <div -->
    <!-- v-show="show"  -->
    <!-- class="notification-caps-lock" -->
    <!-- > -->
        <div v-show="show" class="notification-caps-lock" :style="(darkMode)? {color: 'rgb(253, 205, 205)'} : {color: ''}">
            Включена клавиша CapsLock!
        </div>
    <!-- </div> -->
</template>


<script>
import { mapState } from 'vuex';

export default {
    name: 'notification-caps-lock',
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
// .notification-caps-lock{
//     position: absolute;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     top: 50px;
//     right: 10px;
//     min-width: 300px;
//     min-height: 100px;
//     background: linear-gradient(to right, #fc3b22aa, rgba(253, 148, 11, 0.665));
//     border-radius: $radius;}
.notification-caps-lock{
    position: absolute;
    display: flex;
    justify-content: center;
    padding: 10px;
    // background-color: rgb(236, 194, 68);
    background: linear-gradient(to right, #fc3b22aa, rgba(253, 148, 11, 0.665));
    color: rgb(255, 255, 255);
    font-weight:600;
    border-radius: $radius;
}
</style>