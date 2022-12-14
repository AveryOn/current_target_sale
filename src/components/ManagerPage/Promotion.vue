<template>
    <div  class="promotion">
        <div class="promotion-navbar">
            <h1 class="h1-promotion">Announce a promotion</h1>
            <button-comp @click="$store.commit('ManagerModule/closePromotion')">Close</button-comp>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.promotion{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    min-width: 80%;
    min-height: 40vh;
    border: $border;
    border-radius: $radius;
}
.promotion-navbar{
    display: flex;
    justify-content: space-between;
    margin: 5px 20px;
}
.h1-promotion{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>