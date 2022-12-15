<template>
    <div class="category-item">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.category-item{
    border: $border;
    border-radius: $radius;
    width: 250px;
    height: 250px;
    margin: 20px;
}
</style>