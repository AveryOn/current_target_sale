<template>
    <input class="input" @input="updateInput" :value="modelValue">
</template>
<script>
export default {
    name: 'input-comp',
    props: {
         modelValue: [String, Number]
    }, 
    methods: {
        updateInput(event){
            this.$emit("update:modelValue", event.target.value)
        }
    }
}
</script>
<style lang="scss" scoped>
.input{
    margin: 5px;
    padding: 10px;
    outline: none;
    color: $or-wh-txt;
    border: none;
    border-radius: $radius;
    &:focus{
        border: 1px solid rgb(253, 46, 46);
    }
    &::-webkit-input-placeholder { 
    color: $or-wh-txt;
    }
}
</style>