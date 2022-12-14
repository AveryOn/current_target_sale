<template>
    <button class="btn"><slot></slot></button>
</template>
<script>
export default {
    name: 'button-comp',
}
</script>
<style lang="scss" scoped>
.btn{
    margin: 5px;
    padding: 8px 15px;
    border-radius: $radius;
    border: $border;
    color: $or-wh-txt;
    &:hover{
        background-color: $color-orange-white;
        color: white;
        cursor: pointer;
    }
}
</style>