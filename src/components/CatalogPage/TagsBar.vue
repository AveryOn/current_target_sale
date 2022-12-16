<!-- ЛИСТ-БАР С ОТРИСОВКОЙ ТЕГОВ ПО ВЫБРАННОЙ КАТЕГОРИИ -->
<template>
    <div class="tags-bar">
        <tag-comp v-for="tag in tags" :tag="tag" :key="tag.id"></tag-comp>
    </div>
</template>
<script>
export default {
    props: {
        tags: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style lang="scss" scoped>
.tags-bar{
    position: sticky;
    top: 5px;
    display: flex;
    border: $border;
    border-radius: $radius;
    margin: 0 10px;
    padding: 5px 20px;
    background-color: rgba(255, 255, 255, .7);
}

</style>