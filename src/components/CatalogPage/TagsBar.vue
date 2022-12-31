<!-- ЛИСТ-БАР С ОТРИСОВКОЙ ТЕГОВ ПО ВЫБРАННОЙ КАТЕГОРИИ -->
<template>
    <div class="tags-bar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        tags: {
            type: Array,
            default: () => []
        }
    },
    computed: {

    },
}
</script>
<style lang="scss" scoped>
.tags-bar{
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    top: 5px;
    display: flex;
    border: $border;
    border-radius: $radius;
    margin: 0 10px;
    padding: 5px 20px;
    background-color: white;
    box-shadow: $shadow;
}

</style>