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
    padding: 10px 15px;
    border-radius: $radius;
    border: 1px solid rgba(0,0,0,0);
    color: $or-wh-txt;
    font-size: 15px;
    &:hover{
        background-color: $color-orange-white;
        color: white;
        cursor: pointer;
    }
}
</style>