
<!-- КОМПОНЕНТ ДЛЯ ОТРИСОВКИ ЭЛЕМЕНТОВ ДАННЫХ АККАУНТА ДЛЯ РЕДАКТИРОВАНИЯ
    ИСПОЛЬЗУЕТСЯ В ОКНЕ ДЛЯ РЕДАКТИРОВАНИЯ АККАУНТА
    За включение режима редактирования данных отвечает поле this.isChangeMode 
-->
<template>

    <div class="change-data-item">
        
        <div 
        class="data-block__item"
        :style="(isChangeMode)? {border: '1px solid rgb(186, 35, 35)'} : {border: ''}"
        >

            <p 
            class="data-block__item--title"
            :style="(darkMode)? {color: 'rgb(255, 205, 138)'} : {color: ''}"
            >
                {{ titleItem }}
            </p>
            <p 
            class="data-block__item--value"
            :style="(valueItem === this.accountWords.noneData)? {color: 'rgb(254, 137, 90)'} : {color: ''}"
            v-show="!isChangeMode"
            >
                {{ valueItem }}
            </p>

            <!-- Если изменяемые данные являются обычной строкой, то для редактирования данных отрисовывается обычный input -->
            <input-comp 
            class="data-block__item--input"
            v-model="changeData"
            v-show="isChangeMode && typeItem === typeItemChangeData.string"
            >
            </input-comp>

            <div 
            class="data-block__item--radio" 
            v-show="isChangeMode && typeItem === typeItemChangeData.radio"
            >   

                <!-- МУЖСКОЙ ПОЛ -->
                <radio-button
                class="change-item--radio-button"
                :name="'sex'"
                :value="'Муж'"
                :radioData="radioButtonData"
                v-model="radioButtonData"
                >
                </radio-button>

                <!-- ЖЕНСКИЙ ПОЛ -->
                <radio-button
                class="change-item--radio-button"
                :name="'sex'"
                :value="'Жен'"
                :radioData="radioButtonData"
                v-model="radioButtonData"
                >

                </radio-button>

                <!-- Другой пол -->
                <radio-button
                class="change-item--radio-button"
                :name="'sex'"
                :value="'Другой'"
                :radioData="radioButtonData"
                v-model="radioButtonData"
                >

                </radio-button>

            </div>

        </div>

        <!-- КНОПКА РЕДАКТИРОВАНИЯ -->
        <div v-show="!isChangeMode" class="change-data-item__btns">
            <div 
            class="change-data-item__change-btn"
            :title="(valueItem === accountWords.noneData)? 'Добавить' : 'Изменить'"
            @click="activateChangeMode"
            >
                <i-edit></i-edit>
    
            </div>
        </div>

        <!-- КНОПКИ ДЕЙСТВИЙ ПРИ АКТИВНОМ РЕЖИМЕ РЕДАКТИРОВАНИЯ ДАННЫХ -->
        <div 
        v-show="isChangeMode" 
        class="change-data-item__btns">

            <!-- КНОПКА ПОДТВЕРЖДЕНИЯ РЕДАКТИРОВАНИЯ -->
            <div 
            class="change-data-item__change-active-mode-btn"
            title="Подтвердить"
            @click="activateChangeMode"
            >
                <i-ok></i-ok>

            </div>

            <!-- КНОПКА ОТМЕНЫ РЕДАКТИРОВАНИЯ -->
            <div 
            class="change-data-item__change-active-mode-btn"
            title="Отмена"
            @click="deactivateChangeMode"
            >
                <i-close></i-close>

            </div>

        </div>

    </div>

</template>


<script>
import itemComp from '@/components/AccountPage/itemComp.vue';
import { mapState } from 'vuex';

export default {
    components: {
        itemComp,
    },
    props: {
        titleItem: {
            type: [String],
            required: true,
        },
        valueItem: {
            type: [String, Number],
            required: false,
        },
        // Тип элемента, может быть строкой, чекбоксом и т.п
        typeItem: {
            type: [String],
            required: true,
        }
    },

    data: () => ({

        isChangeMode: false,
        changeData: '',

        radioButtonData: 'Муж',

    }),

    methods: {

        // Метод АКТИВИРУЕТ режим редактирования данных
        activateChangeMode(){
            // console.log(this.userData.sex === null);
            this.isChangeMode = true
        },

        // Метод ДЕАКТИВИРУЕТ режим редактирования данных
        deactivateChangeMode(){
            this.isChangeMode = false
        }
    },

    computed: {
        ...mapState({
            // Темная тема
            darkMode: state => state.darkMode,

            // Допсутимые обозначения неопределенных данных
            accountWords: state => state.accountWords,

            // Допустимые типы элемента редактирования,
            typeItemChangeData: state => state.typeItemChangeData,

            // Данные текущего пользователя/сотрудника
            userData: state => state.UserModule.userData,
        }),
    }
}
</script>


<style lang="scss" scoped>
.change-data-item{
    display: flex;
    justify-content: space-between;
    /* border: 1px solid rgb(253, 148, 11); */
    border-radius: 20px;
    margin: 10px 0;
    padding: 0 15px;
    box-shadow: 5px 8px 20px #0000006e;
    .change-data-item__left-block{
        flex-grow: 4;
        width: 80%;
    }
    .change-data-item__btns{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        flex-grow: 1;
        width: 5%;
        margin: 0 0 0 10px;
        &:hover{
            cursor: default;
        }
    }
    .change-data-item__change-btn{
        display: flex;
        height: -moz-max-content;
        height: max-content;
        justify-content: center;
        align-self: center;
        width: -moz-max-content;
        width: max-content;
        padding: 13px 9px;
        border: 1px solid rgb(253, 148, 11);
        border-radius: 20px;
        flex-grow: 1;
        &:hover{
            border: 3px solid rgb(253, 148, 11);
            cursor: pointer;
        }
    }
    .change-data-item__change-active-mode-btn{
        display: flex;
        height: max-content;
        justify-content: center;
        align-self: center;
        width: max-content;
        padding: 7px;
        border: 1px solid rgb(253, 148, 11);
        border-radius: 50%;
        margin: 2px;
        &:hover{
            border: 3px solid rgb(253, 148, 11);
            cursor: pointer;
        }
    }

}

.data-block__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: $border;
    border-radius: $radius;
    margin: 10px 5px;
    padding: 10px 0;
    cursor: default;
    flex-grow: 4;
    width: 80%;
    .data-block__item--title{
        display: flex;
        flex-wrap: wrap;
        max-width: 50%;
        font-size: 1.3em;
        color: $or-wh-txt;
        margin: 10px 30px 10px 20px;
    }
    .data-block__item--value{
        font-size: 1.3em;
        color: $or-wh-txt;
        font-weight: bolder;
        margin: 10px 20px;
    } 
    .data-block__item--input{
        padding: 6px;
    }

    .data-block__item--radio{
        position: relative;
        left: -20px;
        display: flex;
        align-items: center;
        border: $border;
        border-radius: $radius;

        .change-item--radio-button{
            margin: 0 20px;
        }
    }
}

</style>