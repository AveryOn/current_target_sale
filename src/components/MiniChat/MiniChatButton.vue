<template>
    <div class="minichat-btn">Chat</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.minichat-btn{
    position: fixed;
    z-index: 999;
    right: 4%;
    bottom: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4em;
    height: 4em;
    background-color: white;
    border: $border;
    border-radius: 50%;
    box-shadow: $shadow;
    background: $background-gr;
    font-size: 18px;
    &:hover{
        cursor: pointer;
        rotate: -10deg;
    }
}
</style>