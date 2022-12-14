<template>
    <h1><slot></slot></h1>
</template>
<script>
export default {
    name: 'h1-comp',
}
</script>
<style lang="scss" scoped>
h1{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 5px;
}
</style>