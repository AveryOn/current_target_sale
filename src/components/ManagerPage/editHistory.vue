<template>
    <!-- ИСТОРИЯ РАБОТЫ -->
    <div 
    class="history"
    :style=" (historyData.length <= 3)? 
        {   border: '1px solid rgb(253, 148, 11)', 
            borderRadius: '20px', 
            boxShadow: '2px 8px 15px rgba(0, 0, 0, 0.294)'
        } : {} "
    >

        <!-- Шапка Истории -->
        <div class="history__header">
            <h2 class="history__header--title">История создания и редактирования</h2>
        </div>

        <!-- Тело Истории-->
        <div class="history__body">

            <!-- Заголовок выводится когда история пуста -->
            <h2 
            class="history__nothing-there"
            v-show="!historyData.length"
            >
                Здесь будет отображаться история вашей работы
            </h2>

            <!-- Отрисовка элементов истории -->
            <historyItem 
            v-for="item in historyData"
            :key="item.id"
            :operationType="item.operation_type"
            :operationName="item.operation_name"
            :operationTime="item.creation_time"
            :operationDetail="item.operation_detail"
            >
            </historyItem>

        </div>

        <!-- КНОПКА РАЗВЕРНУТЬ ИСТОРИЮ -->
        <div 
        class="open-history-more"
        @click="showHistory"
        v-show="!isOpenHistory && historyData.length >= 3"
        :style="
            (darkMode)?
            {background: 'linear-gradient(360deg, rgba(36, 33, 33, 1), rgba(34, 32, 32, 0.85), rgba(0, 0, 0, 0))'} :
            {background: ''}
        "
        >
            Развернуть историю...
        </div>

        <!-- КНОПКА СКРЫТЬ ИСТОРИЮ -->
        <button-comp 
        class="hidden-history"
            @click="hiddenHistory"
            v-show="isOpenHistory"
            >
            Скрыть историю
        </button-comp>

    </div>
</template>
<script>
import historyItem from '@/components/ManagerPage/historyItem.vue'
import { mapState } from 'vuex';

export default {
    components: {
        historyItem,
    },
    props: {
        // Данные истории работы
        historyData: {
            type: Array,
            required: false,
            default: () => [],
        }
    }, 

    data: () => ({
        isOpenHistory: false,
    }),
    methods: {
        // МЕТОД РАЗВОРАЧИВАЕТ ИСТОРИЮ РАБОТЫ
        showHistory(){
            this.isOpenHistory = true
            const history = document.querySelector('.history');
            const historyBody = document.querySelector('.history__body');
            const historyHeader = document.querySelector('.history__header');
            history.style.height = '80vh'
            history.style.boxShadow = '2px 8px 15px rgba(0, 0, 0, 0.294)'
            historyHeader.style.boxShadow = '2px 8px 15px rgba(0, 0, 0, 0.294)'
            historyBody.style.overflowY = 'auto'
            history.style.borderBottomLeftRadius = '20px'
            history.style.borderBottomRightRadius = '20px'
            history.style.borderTopLeftRadius = '20px'
            history.style.borderTopRightRadius = '20px'
            history.style.border = '1px solid rgb(253, 148, 11)'
        },
        // МЕТОД СКРЫВАЕТ ИСТОРИЮ РАБОТЫ
        hiddenHistory(){
            const history = document.querySelector('.history');
            const historyBody = document.querySelector('.history__body');
            const historyHeader = document.querySelector('.history__header');
            history.style.height = ''
            history.style.boxShadow = ''
            historyHeader.style.boxShadow = ''
            historyBody.style.overflowY = ''
            history.style.borderBottomLeftRadius = ''
            history.style.borderBottomRightRadius = ''
            history.style.borderTopLeftRadius = ''
            history.style.borderTopRightRadius = ''
            history.style.border = ''
            this.isOpenHistory = false
        },
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;

.history{
    position: relative;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-right-radius: $radius;
    border-top-left-radius: $radius;
    border: $border;
    border-bottom: none;
    margin: 0 0 50px 0;
    .history__header{
        position: relative;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 10px 20px;
    }
    .history__header--title{
        font-size: 2em;
        padding: 0 10px 5px 20px;
        border-bottom: $border;
    }
    .history__body{
        position: relative;
        width: 100%;
        height: max-content;
        max-height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 10px 10px 10px;
    }
    .history__nothing-there {
        position: relative;
        top: 100px;
        font-size: 1.8em;
    }
    .open-history-more{
    position: absolute;
    bottom: -1px;
    left: -1px;
    right: -1px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: rgba(234, 216, 76, 0.557);
    background: linear-gradient(
        360deg, 
        white, 
        rgba(255, 255, 255, 0.55),
    );
    // border: $border;
    height: 50px;
    // width: 1350px;
    color: orangered;
    transition: all 0.5s ease;
    &:hover{
        cursor: pointer;
        bottom: -20px;
        height: 70px;
        border-bottom-left-radius: $radius;
        border-bottom-right-radius: $radius;
        // border-bottom: $border;
        background: linear-gradient(
        360deg, 
        white, 
        rgba(255, 255, 255, 0.6),
        );
    }
    
    }
    .hidden-history{
        position: absolute;
        right: 10px;
        bottom: -50px;
        padding: 3px 35px;
    }
}
</style>