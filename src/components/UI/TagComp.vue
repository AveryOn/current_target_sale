<!-- ТЕГ ОТНОСЯЩИЙСЯ К КОНКРЕТНОЙ КАТЕГОРИИ ТОВАРА -->
<template>
    <div class="tag" >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'tag-comp',
}
</script>
<style lang="scss" scoped>
.tag{
    display: flex;
    border-radius: $radius;
    padding: 0 8px;
    margin: 1px 5px;
    color: $or-wh-txt;
    transition: all 0.1s ease;
    background: $background-gr;
    color: rgb(255, 255, 255);
    font-size: 18px;
    df
    &:hover{
        cursor: pointer;
        background-color: rgba(0,0,0, .2);
    }
}
</style>