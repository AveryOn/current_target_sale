<template>
    <div class="not-found" :class="{'dark': darkMode}">
        <h1 class="not-found__title">404 Not Found</h1>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        })
    },
}
</script>
<style lang="scss" scoped>
.not-found{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
    z-index: 99999999;
    font-size: 3em;
    font-family: monospace sans-serif;
    background: linear-gradient(to left, #ffffff, #ffc6b7)
}
.not-found__title{
    text-shadow: 2px 2px 25px rgba(0, 0, 0, .5);
}
@include darkMode_with_font
</style>