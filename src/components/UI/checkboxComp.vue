<template>
    <label class="label-checkbox">
        <input class="checkbox" type="checkbox" @change="e => $emit('update:modelValue', e.target.checked)" :checked="modelValue">
        <span class="check-style"></span>
        {{ name }}
    </label>
</template>
<script>
export default {
    props: {
        modelValue: {
            checked:{
                type: Boolean,
                default: false,
            },
        },
        name: {
            type: String,
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.label-checkbox{
    margin-bottom: 25px;
    display: block;
}
.checkbox{
    position: absolute;
    padding-left: 20px;
    overflow: hidden;
    clip: rect(0 0 0 0);
}
.checkbox:checked + .check-style::before{
    content: "";
    width: 8px;
    height: 8px;
    background-color: orange;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.check-style{
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid orange;
    margin-left: -20px;
}
.checkbox:disabled + .check-style{
    border-color: gray;
}
.checkbox:disabled:checked + .check-style::before{
    background-color: gray;
}
.checkbox:focus + .check-style{
    box-shadow: 0 0 0 2px black;
}  
</style>