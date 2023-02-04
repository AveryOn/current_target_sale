<!-- СТАНДАРТНАЯ КНОПКА -->
<template>
    <button class="btn" :class="{'dark-btn': darkMode}"><slot></slot></button>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'button-comp',
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        })
    }
}
</script>
<style lang="scss" scoped>
.btn{
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 8px 15px;
    border-radius: $radius;
    border: $border;
    color: $or-wh-txt;
    font-size: 15px;
    &:hover{
        // background-color: $color-orange-white;
        background: $background-gr;
        color: white;
        box-shadow: $shadow;
        cursor: pointer;
    }
    &:focus{
        outline-style: dashed;
        outline-color: rgb(223, 218, 218);
        outline-width: 2px;
        // border-left: 2px solid rgb(124, 80, 8);
        // border-right: 2px solid rgb(124, 80, 8);
    }
}
@include darkMode_btn;
</style>