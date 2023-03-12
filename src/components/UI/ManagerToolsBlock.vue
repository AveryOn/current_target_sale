<!-- КОМПОНЕНТ С ИНСТРУМЕНТАМИ МОДЕРАТОРА
    СОДЕРЖИМОЕ ЭТОГО КОМПОНЕНТА ВЛИЯЕТ НА ЦЕЛЬ ИСПОЛЬЗОВАНИЯ ЭТОГО КОМП.
    ЭТО ПРОСТО КОНТЕЙНЕР ДЛЯ БЛОКОВ ИМЕЮЩИХ СВОЙ ФУНКЦИОНАЛ -->
<template>
    <div 
    class="manager-product"
    :class="{'dark': darkMode}"
    :style="(!darkMode)? {backgroundColor: 'white'} : {backgroundColor: ''}"
    >
        <div class="manager-navbar">
            <h1 class="h1-manager">Workbench</h1>
            <!-- Данные используемого инструмента -->
            <div class="tool-data">
                <!-- Выводит название используемого инструмента -->
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
            <h2 class="manager-product__nothing-open" v-show="!nameTool && !nameTool">Выберите в меню справа инструмент для работы</h2>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
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
    watch: {
        darkMode(newValue){
            // Смена темы для statistics
            const managerProduct = document.querySelector('.manager-product')
            if(newValue){
                managerProduct.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
                managerProduct.style.color = 'rgb(255, 205, 138)'
            }else{
                managerProduct.style.backgroundColor = ''
                managerProduct.style.color = ''
            }
        }
    }, 
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),

        isShowTool(){
            if(this.$store.state.ManagerModule.selectToolName != ''){
                return true
            }
            else if (this.$store.state.OwnerModule.selectToolName != ''){
                return true
            }
        },
        nameTool(){
            if (this.$store.state.ManagerModule.selectToolName.length){
                return this.$store.state.ManagerModule.selectToolName
            }
            else if (this.$store.state.OwnerModule.selectToolName.length){
                return this.$store.state.OwnerModule.selectToolName
            }
        }
    },
    mounted(){
    },
}
</script>
<style lang="scss" scoped>
@include h2-gradient;
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
    display: flex;
    justify-content: center;
    margin: 10px 30px 0 30px;
    .manager-product__nothing-open{
        position: relative;
        top: 50px;
        font-size: 1.8em;
    }
}

@include darkMode_with_font;
</style>