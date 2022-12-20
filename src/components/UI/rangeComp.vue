<template>
    <input 
    type="range" 
    :value="modelValue" 
    @change="e => $emit('update:modelValue', e.target.value)" 
    >
</template>
<script>
export default {
    props:{
        modelValue:{
            value:{
                type: Boolean,
                default: false,
            },
        },
    },
}
</script>
<style lang="scss" scoped>
input[type=range]  {
    width: 200px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
    border-radius: 10px/100%;
    height: 4px;
    border: 1px solid rgb(255, 170, 0);
    background-color: rgb(255, 170, 0);
}
input[type=range]::-webkit-slider-thumb {
    background: #ff7c0a;
    border: 1px solid rgb(255, 165, 10);
    border-radius: 50%;
    cursor: pointer;
    width:15px;
    height: 15px;
    -webkit-appearance: none;
    margin-top: -7px;
}

input[type=range]::-moz-range-track {
    border-radius: 10px/100%;
    height: 5px;
    border: 1px solid cyan;
    background-color: #fff;
}
input[type=range]::-moz-range-thumb {
    background: #ecf0f1;
    border: 1px solid cyan;
    border-radius: 10px/100%;
    cursor: pointer;
}
</style>