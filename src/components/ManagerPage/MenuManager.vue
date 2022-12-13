<template>
    <div class="manager-panel">
        <div class="options-bar">
            <h2 class="descr-options-bar">Panel of Manager</h2>
            <button-comp @click="$store.commit('ManagerModule/openCreator')" class="option">Создать карточку</button-comp>
            <button-comp class="option">2</button-comp>
            <button-comp class="option">3</button-comp>
            <button-comp class="option">4</button-comp>
            <button-comp class="option">5</button-comp>
        </div>
    </div>
</template>
<script>
export default {
    name: 'menu-manager',
}
</script>
<style lang="scss" scoped>

.manager-panel{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.options-bar{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: max-content;
    margin: 30px;
    padding: 10px;
    border: $border; 
    border-radius: $radius;
    align-self: flex-start;
}
.descr-options-bar{
    background-image: linear-gradient(to right, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.option{
    display: flex;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    width: 90%;
    border: $border;
    font-size: 1em;
    margin: 10px;
}
</style>


