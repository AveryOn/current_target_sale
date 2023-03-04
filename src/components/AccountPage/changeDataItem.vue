<template>
    <div class="menu-change__item-comp">
        <p class="menu-change__item-comp--title">test</p>
        <input-comp></input-comp>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.menu-change__item-comp{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: $border;
    border-radius: $radius;
    margin: 10px 5px;
    padding: 10px 0;
    cursor: default;
    .menu-change__item-comp--title{
    display: flex;
    flex-wrap: wrap;
    max-width: 50%;
    font-size: 1.3em;
    color: $or-wh-txt;
    margin: 10px 30px 10px 20px;
}
    .menu-change__item-comp--value{
        font-size: 1.3em;
        color: $or-wh-txt;
        font-weight: bolder;
        margin: 10px 20px;
    }  
}
</style>