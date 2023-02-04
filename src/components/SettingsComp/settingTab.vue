
<!-- Вкладка содержащая набор настроек относящихся в определенной области магазина -->
<template>
    <div @click="openTab" class="setting-tab">
        <h3 class="setting-tab__title">
            <slot></slot>
        </h3>
        <i-arrow-right></i-arrow-right>
    </div>
</template>
<script>
export default {
    props:{
        // Принимаем с окна настроек опциональное название вкладки
        tabName: {
            type: [String],
            default: undefined,
            required: true,
        }
    },
    methods: {
        openTab(){
            this.$emit('openTab', this.tabName)
        }
    }
}
</script>
<style lang="scss" scoped>
@include h3-gradient;
.setting-tab{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: $border;
    border-radius: $radius;
    padding: 20px 10px;
    width: 100%;
    max-width: 100%;
    margin: 0 0 10px 0;
    &:hover{
        background-color: rgba(128, 128, 128, 0.266);
        cursor: pointer;
    }
    &__title{
        margin-right: 20px;
    }
    &__btn{
        padding: 4px;
        font-size: 13px;
    }
}
</style>