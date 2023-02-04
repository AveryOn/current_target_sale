<template>
    <input class="input" :class="{'dark-input': darkMode}" @input="updateInput" :value="modelValue">
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'input-comp',
    props: {
         modelValue: [String, Number]
    }, 
    methods: {
        updateInput(event){
            this.$emit("update:modelValue", event.target.value)
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
.input{
    margin: 5px;
    padding: 10px;
    outline: none;
    color: $input-color;
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
    &:focus{
        border: 1px solid rgb(253, 46, 46);
    }
    &::-webkit-input-placeholder { 
        color: $or-wh-txt;
    }
    &:hover{
        border-left: 1px solid red;
        border-right: 1px solid red;
    }
}
@include darkMode_input;
</style>