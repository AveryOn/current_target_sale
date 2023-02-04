<!-- ТЕГ ОТНОСЯЩИЙСЯ К КОНКРЕТНОЙ КАТЕГОРИИ ТОВАРА -->
<template>
    <div class="tag" >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'tag-comp',
    // props:{
    //     tag:{
    //         type: [String],
    //     },
    // },
    // methods: {
    //     closeTag(){
    //         this.$emit('closeTag', this.tag)
    //     }
    // }
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
    &:hover{
        cursor: pointer;
        background-color: rgba(0,0,0, .2);
    }
    // .close-tag{
    //     position: relative;
    //     top: -1px;
    //     right: -4px;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     padding: 0 5px;
    //     margin: 2px 0 2px 2px;
    //     // border: 1px solid rgb(137, 133, 133);
    //     border-radius: 50%;
    //     background-color: rgb(191, 186, 186);
    //     color: rgb(92, 90, 90);
    //     font-size: 0.9em;
    //     transition: all 0.2s ease;
    //     &:hover{
    //         cursor: pointer;
    //         background-color: rgb(173, 168, 168);
    //     }
    // }
}
</style>