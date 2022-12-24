<template>
    <input class="range" :value="value" :min="min" :max="max" type="range">
</template>
<script>
export default {
    name: 'range-input',
    props: {
        value: {
            type: Number,
            default: 0,
        },
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
    },
}
</script>
<style lang="scss" scoped>
.range{
    width: 95%;
    height: 7px;
    background-color: orange;
    -webkit-appearance: none;
    border-radius: $radius;
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.351);
}
.range::-webkit-slider-thumb{
    -webkit-appearance: none;
    position: relative;
    top: -1px;
    background: orangered;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    transition: all .1s;
    cursor: pointer;
    &:hover{
        width: 18px;
        height: 18px;
    }
}
</style>