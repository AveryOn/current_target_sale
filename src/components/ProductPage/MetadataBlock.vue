<!-- БЛОК С ХАРАКТЕРИСТИКАМИ ТОВАРА -->
<template>
    <div class="metadata-block">
        <h2>Meta Data Block:</h2>
        <h3>Block Index: Block Index</h3>
        <h3>Block ID: Block ID</h3>
        <h3>Block Name: Block Name</h3>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.metadata-block{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: max-content;
    padding: 0 20px;
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
} 
</style>