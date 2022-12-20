<template>
     <div class="minichat">
        <button-close-mini @click="$store.commit('closeMiniChat')"></button-close-mini>
        <div class="message-content"></div>
        <div class="input-block">
            <div class="pin-file">file</div>
            <input-comp class="send-input"></input-comp>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.minichat{
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    right: 6%;
    bottom: 10%;
    width: 20%;
    height: 55%;
    box-shadow: $shadow;
    background-color: white;
    border-radius: $radius;
    border: $border;
}
.message-content{
    height: 90vh;
    // border: $border;
    // border-radius: $radius;
}
.input-block{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.send-input{
    width: 100%;
}
</style>