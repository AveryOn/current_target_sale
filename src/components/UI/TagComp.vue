<!-- ТЕГ ОТНОСЯЩИЙСЯ К КОНКРЕТНОЙ КАТЕГОРИИ ТОВАРА -->
<template>
    <div class="tag">
        #<slot></slot>
    </div>
</template>
<script>
export default {
    name: 'tag-comp',
}
</script>
<style lang="scss" scoped>
.tag{
    background-color: rgba(0,0,0, .15);
    border-radius: $radius;
    padding: 0 10px;
    margin: 1px 5px;
    color: $or-wh-txt;
    &:hover{
        cursor: pointer;
        background-color: rgba(0,0,0, .2);
    }
}
</style>