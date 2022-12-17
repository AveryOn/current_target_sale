<template>
     <div class="minichat">
        <div @click="$store.commit('closeMiniChat')" class="close-btn">x</div>
        <div class="message-content"></div>
        <div class="input-block">
            <div>file</div>
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
}
.close-btn{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2em;
    height: 2em;
    top: -15px;
    right: -10px;
    background-color: red;
    padding: 5px;
    border-radius: 50%;
    font-size: 17px;
    &:hover{
        cursor: pointer;
        rotate: -95deg;
    }
}
.message-content{
    height: 90vh;
    border: $border;
    border-radius: $radius;
}
.input-block{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.send-input{
    width: 90%;
}
</style>