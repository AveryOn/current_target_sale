<!-- СПИННЕР ЗАГРУЗКИ -->
<template>
    <div class="lodaing--spin" :class="{'dark': darkMode}"></div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'loading-spin',
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
}
</script>
<style lang="scss" scoped>
@keyframes rotate-spin {
    100%{
        rotate: 360deg;
        border-top: 10px solid $color-orange-white;
    }
}
.lodaing--spin{
    position: fixed;
    display: flex;
    justify-content: center;
    top: 35%;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    border-top: 15px dotted $color-orange-white;
    animation-name: rotate-spin; 
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
</style>