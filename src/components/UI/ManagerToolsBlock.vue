<!-- КОМПОНЕНТ С ИНСТРУМЕНТАМИ МОДЕРАТОРА
    СОДЕРЖИМОЕ ЭТОГО КОМПОНЕНТА ВЛИЯЕТ НА ЦЕЛЬ ИСПОЛЬЗОВАНИЯ ЭТОГО КОМП.
    ЭТО ПРОСТО КОНТЕЙНЕР ДЛЯ БЛОКОВ ИМЕЮЩИХ СВОЙ ФУНКЦИОНАЛ -->
<template>
    <div class="manager-product">
        <div class="manager-navbar">
            <h1 class="h1-manager">Workbench</h1>
            <!-- Данные используемого инструмента -->
            <div class="tool-data">
                <!-- Выводит название используемого инструмена -->
                <h1 class="h1-tool-name">{{ nameTool }}</h1>
                <!-- Закрывает выбранный инструмент -->
                <button-comp 
                    v-show="isShowTool" 
                    @click="closeToolBench" 
                    class="tool-btn-close"
                    >
                        Close
                </button-comp>
            </div>
        </div>
        <div class="manager-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'manager-tools-block',
    // props: {
    //     show: {
    //         type: Boolean,
    //         default: false,
    //     }
    // },
    methods: {
        closeToolBench(){
            this.$store.commit('ManagerModule/closeAllTools')
            this.$store.commit('OwnerModule/closeModal')
        }
    },
    computed: {
        isShowTool(){
            if(this.$store.state.ManagerModule.selectToolName != ''){
                return true
            }
            else if (this.$store.state.OwnerModule.selectToolName != ''){
                return true
            }
        },
        nameTool(){
            if (this.$store.state.ManagerModule.selectToolName){
                return this.$store.state.ManagerModule.selectToolName
            }
            else if (this.$store.state.OwnerModule.selectToolName){
                return this.$store.state.OwnerModule.selectToolName
            }
        }
    }
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
    box-shadow: $shadow;
}
.manager-navbar{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 5px 20px;
    border-bottom: $border;
}
.h1-manager{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 15px 5px 0;
}
.tool-data{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: -2px;
    .h1-tool-name{
        position: relative;
        background-image: linear-gradient(180deg, #fc3b22, $color-orange-white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0 0px 5px 0;
        font-size: 28px;
    }
    .tool-btn-close{
        position: relative;
        top: -2px;
        right: -5px;
    }
}
.manager-body{
    margin: 10px 30px 0 30px;
}
</style>