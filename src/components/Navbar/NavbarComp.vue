<template>
    <div @click="showLog" ref="navbar" class="navbar">
        <div class="title">
            <div @click="scrl" class="logo">
                <div class="logo-in"></div>
            </div>
            <h1 @click="$router.push('/')">Current Target Sale</h1>
        </div>
        <div class="btns">
                <!-- ЛЕВОСТОРОННИЕ КНОПКИ -->
                <slot name="btnsLeft"></slot>
                <!-- ПРАВОСТОРОННИЕ КНОПКИ -->
                <slot name="btnsRight"></slot>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        scrl(){
            window.scroll(0, 100)
        }
    }
}
</script>
<style lang="scss" scoped>
// @include h1-gradient;
h1{
    display: flex;
    font-size: 2em;
    margin: 10px 30px;
    background-color: white;
    color: rgb(239, 137, 21);
    border-radius:$radius;
    padding: 5px;
    &:hover{
        cursor: pointer;
    }
}
.navbar{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25vh;
    background: $background-gr;
    margin-bottom: 20px;
    box-shadow: $shadow;
    border: {
        bottom-left-radius: $radius;
        bottom-right-radius: $radius;
    }
}
.title{
    display: flex;
    // justify-content: space-between;
    justify-content: flex-start;
    align-items: center;
    .logo{
        display: flex;
        align-items: center;
        background-color: white;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin: 10px 0 0 30px;
    }
    .logo-in{
        width: 40px;
        height: 40px;
        background-color: orangered;
        border-radius: 50%;
        margin: auto;
    }
}
.btns{
    display: flex;
    justify-content: space-between;
    margin: 10px 30px 10px 30px;
}
.btn-i .btns-navigate{
    &:hover{
        border: 1px solid white;
    }
}
</style>