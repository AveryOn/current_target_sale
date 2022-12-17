<!-- КОМПОНЕНТ С ИНСТРУМЕНТАМИ МОДЕРАТОРА
    СОДЕРЖИМОЕ ЭТОГО КОМПОНЕНТА ВЛИЯЕТ НА ЦЕЛЬ ИСПОЛЬЗОВАНИЯ ЭТОГО КОМП.
    ЭТО ПРОСТО КОНТЕЙНЕР ДЛЯ БЛОКОВ ИМЕЮЩИХ СВОЙ ФУНКЦИОНАЛ -->
<template>
    <div v-show="show" class="manager-product">
        <div class="manager-navbar">
            <h1 class="h1-manager">{{ title }}</h1>
            <button-comp @click="$emit('closeTools')">Close</button-comp>
        </div>
        <div class="manager-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'manager-tools-block',
    props: {
        title: {
            type: [String, Number],
            default: 'manager_tools_block'
        },
        show: {
            type: Boolean,
            default: false,
        }
    },
}
</script>
<style lang="scss" scoped>
.manager-product{
    display: flex;
    flex-direction: column;
    // margin-top: 50px;
    margin-bottom: 20px;
    min-width: 80%;
    min-height: 40vh;
    border: $border;
    border-radius: $radius;
    background-color: white;
}
.manager-navbar{
    display: flex;
    justify-content: space-between;
    margin: 5px 20px;
}
.h1-manager{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.manager-body{
    margin: 10px 30px 0 30px;
}
</style>