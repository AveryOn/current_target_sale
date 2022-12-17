<template>
    <div @click="showLog" ref="navbar" class="navbar">
        <div class="title">
            <div @click="scrl" class="logo">
                <div class="logo-in"></div>
            </div>
            <h1 @click="$router.push('/')">Current Target Sale</h1>
        </div>
        <div class="btns">
            <div class="btns-navigate">
                <button-comp @click="$router.push({name: 'main'})" title="Home" class="btn-navigate">Home</button-comp>
                <button-comp @click="$router.push({name: 'catalog'})" title="Catalog" class="btn-navigate">Catalog</button-comp>
                <button-comp title="Settings" class="btn-navigate">Settings</button-comp>
            </div>
            <div class="btns-options">
                <button-comp title="Busket" class="btn-i">Busket</button-comp>
                <button-comp @click="$router.push({name: 'auth'})" title="Login and Registred" class="btn-i">Login -></button-comp>
            </div>
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
.btns-navigate{
    display: flex;
}
.btns-options{
    display: flex;
}
.btn-i .btns-navigate{
    &:hover{
        border: 1px solid white;
    }
}
</style>