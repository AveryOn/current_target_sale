<template>
    <h2><slot></slot></h2>
</template>
<script>
export default {
    name: 'h2-comp',
}
</script>
<style lang="scss" scoped>
h2{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 5px;
}
</style>