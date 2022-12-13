<template>
<div  class="editor-product">
    <div class="editor-navbar">
        <h1 class="h1-editor">Editor</h1>
        <button-comp @click="$store.commit('ManagerModule/closeCreator')" class="close-btn">Close</button-comp>
    </div>
</div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.editor-product{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    min-width: 80%;
    min-height: 40vh;
    border: $border;
    border-radius: $radius;
}
.editor-navbar{
    display: flex;
    justify-content: space-between;
    margin: 5px 20px;
}
.h1-editor{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.close-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    border: $border;
}
</style>