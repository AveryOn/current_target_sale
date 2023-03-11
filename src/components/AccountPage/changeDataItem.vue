
<!-- КОМПОНЕНТ ДЛЯ ОТРИСОВКИ ЭЛЕМЕНТОВ ДАННЫХ АККАУНТА ДЛЯ РЕДАКТИРОВАНИЯ
    ИСПОЛЬЗУЕТСЯ В ОКНЕ ДЛЯ РЕДАКТИРОВАНИЯ АККАУНТА
    За включение режима редактирования данных отвечает поле this.isChangeMode 
-->
<template>

    <div class="change-data-item">

        <!-- Классическое обьявление элемента данных -->
        <div 
        class="data-block__item"
        :style="(isChangeMode)? {border: '1px solid rgb(186, 35, 35)'} : {border: ''}"
        >

            <!-- Наименование эл. ред. -->
            <p 
            class="data-block__item--title"
            :style="(darkMode)? {color: 'rgb(255, 205, 138)'} : {color: ''}"
            >
                {{ titleItem }}
            </p>

            <!-- Значение эл. ред. -->
            <p 
            class="data-block__item--value"
            :style="(valueItem === this.accountWords.noneData)? {color: 'rgb(254, 137, 90)'} : {color: ''}"
            v-show="!isChangeMode"
            >
                {{ valueItem }}
            </p>

            <!-- hit-input - это подсказка при редактировании данных, Указывает наглядно какие данные сейчас актуальны
                Чтобы пользователь что он изменяет
            -->
            <!-- Если изменяемые данные являются обычной строкой, то для редактирования данных отрисовывается обычный input -->
            <div 
            class="hit-input" v-show="isChangeMode && typeItem === typeItemChangeData.string"
            :style="(valueItem !== accountWords.noneData)? {paddingTop: '15px'} : {paddingTop: '0px'}"
            >
                <p>{{ (valueItem !== accountWords.noneData)? valueItem : undefined }}</p>
                <input-comp 
                class="data-block__item--input"
                v-model="inputData"
                >
                </input-comp>
            </div>

            <!-- Радио кнопки, используются если тип элемента редактирования - radio (this.$store.state.typeItemChangeData.radio) -->
            <div 
            class="data-block__item--radio" 
            v-show="isChangeMode && typeItem === typeItemChangeData.radio"
            >   

                <!-- МУЖСКОЙ ПОЛ -->
                <radio-button
                class="change-item--radio-button"
                :name="'sex'"
                :value="'Муж'"
                :radioData="(valueItem !== accountWords.noneData || valueItem !== null)? valueItem : radioButtonData"
                v-model="radioButtonData"
                >
                </radio-button>

                <!-- ЖЕНСКИЙ ПОЛ -->
                <radio-button
                class="change-item--radio-button"
                :name="'sex'"
                :value="'Жен'"
                :radioData="(valueItem !== accountWords.noneData || valueItem !== null)? valueItem : radioButtonData"
                v-model="radioButtonData"
                >

                </radio-button>

                <!-- Другой пол -->
                <radio-button
                class="change-item--radio-button"
                :name="'sex'"
                :value="'Другой'"
                :radioData="(valueItem !== accountWords.noneData || valueItem !== null)? valueItem : radioButtonData"
                v-model="radioButtonData"
                >

                </radio-button>

            </div>

            <!--  -->
            <slot name="warning"></slot>
            <slot name="success"></slot>
            <slot name="error"></slot>

        </div>

        <!-- КНОПКИ ПРИ НЕ АКТИВНОМ РЕЖИМЕ РЕДАКТИРОВАНИЯ -->
        <div v-show="!isChangeMode" class="change-data-item__btns">
            <!-- КНОПКА РЕДАКТИРОВАНИЯ -->
            <div 
            class="change-data-item__change-btn"
            :title="(valueItem === accountWords.noneData)? 'Добавить' : 'Изменить'"
            @click="activateChangeMode"
            >
                <i-edit></i-edit>
    
            </div>
            <!-- КНОПКА ОЧИЩЕНИЯ ЭЛЕМЕНТА ДАННЫХ -->

            <div 
            class="change-data-item__change-btn"
            title="Очистить"
            @click="removeDataItem"
            >
                <i-delete></i-delete>
    
            </div>
        </div>
        
        <!-- КНОПКИ ДЕЙСТВИЙ ПРИ АКТИВНОМ РЕЖИМЕ РЕДАКТИРОВАНИЯ ДАННЫХ -->
        <div 
        v-show="isChangeMode" class="change-data-item__btns-active">

            <!-- КНОПКА ПОДТВЕРЖДЕНИЯ РЕДАКТИРОВАНИЯ -->
            <div 
            class="change-data-item__change-active-mode-btn--success"
            title="Подтвердить"
            @click="confirmChangeData"
            >
                <i-ok></i-ok>

            </div>
            <!-- КНОПКИ КОТОРЫЕ НАХОДЯТСЯ СПРАВА ОТ КНОПКИ СБРОСА ИЗМЕНЕНИЙ -->
            <div class="change-data-item__btns-active-right">
                    <!-- КНОПКА СБРОСА ЗНАЧЕНИЯ РЕДАКТИРОВАНИЯ -->
                    <div 
                    class="change-data-item__change-active-mode-btn"
                    title="Сбросить"
                    v-show="this.typeItem === this.typeItemChangeData.string"
                    @click="resetChangeItem"
                    >
                        <i-reset></i-reset>

                    </div>
        
                    <!-- КНОПКА ОТМЕНЫ РЕДАКТИРОВАНИЯ -->
                    <div 
                    class="change-data-item__change-active-mode-btn"
                    title="Отмена"
                    @click="deactivateChangeMode"
                    >
                        <i-close class="change-active-mode--close"></i-close>
        
                    </div>
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
            type: [String, Number, Boolean],
            required: false,
        },
        // Тип элемента, может быть строкой, чекбоксом и т.п
        typeItem: {
            type: [String],
            required: true,
        },
        // Имя используется как ключ для создания обьекта на пару ключ-значение где ключ это название ключа элемента данных который приходит с 
        // сервера, а значение это измененные данные inputData или radioButtonData
        nameItem: {
            type: String,
            required: true,
        }
    },

    data: () => ({

        isChangeMode: false,
        inputData: '',
        radioButtonData: '',

    }),

    methods: {

        // Метод АКТИВИРУЕТ режим редактирования данных
        activateChangeMode(){
            this.isChangeMode = true
        },

        // Метод ДЕАКТИВИРУЕТ режим редактирования данных
        deactivateChangeMode(){
            this.isChangeMode = false
            if(this.typeItem === this.typeItemChangeData.radio) this.radioButtonData = ''
            if(this.typeItem === this.typeItemChangeData.string) this.inputData = ''
        },

        // Метод подтверждает редактирование элемента данных
        // В зависимости от типа изменяемых данных (typeItem) будет эмитить только одно событие которое будет отправлять поле изм.данных 
        // Возваращает обьект в котором указывает ключ name и значение - поле с изменениями 
        confirmChangeData(){

            // если тип данных radio
            if (this.typeItem === this.typeItemChangeData.radio){

                if(this.valueItem === this.accountWords.noneData && this.radioButtonData !== ''){
                    this.isChangeMode = false
                    this.$emit('changeData', {name: this.nameItem, value: this.radioButtonData, success: true})
                    this.radioButtonData = ''
                }else{
                    this.$emit('changeData', {name: this.nameItem, value: false, success: false})
                }
            }

            // если тип данных строка
            if (this.typeItem === this.typeItemChangeData.string){

                // Если изменяемое поле является ЭЛ.ПОЧТОЙ то отправляется запрос на сервер где происходит проверка на то
                // сущесвтует ли данный имэил если да то вернется ошибка о том что такой имэил уже существут 
                if(this.inputData !== '' && this.nameItem === 'email'){
                    this.$store.dispatch('UserModule/checkEmailUser', {email: this.inputData}).then(data => {
                        if(data?.status){
                            this.isChangeMode = false
                            this.$emit('changeData', {name: this.nameItem, value: this.inputData, success: true})
                            this.inputData = ''
                        }else{
                            this.$emit('changeData', {name: this.nameItem, value: false, success: false, alreadyHas: true})
                        }
                    })
                }

                // Если изменяемое поле является НИКНЕЙМОМ то отправляется запрос на сервер где происходит проверка на то
                // сущесвтует ли данный никнейм если да то вернется ошибка о том что такой никнейм уже существут 
                else if(this.inputData !== '' && this.nameItem === 'username'){
                    this.$store.dispatch('UserModule/checkUsernameUser', {username: this.inputData}).then(data => {
                        if(data?.status){
                            this.isChangeMode = false
                            this.$emit('changeData', {name: this.nameItem, value: this.inputData, success: true})
                            this.inputData = ''
                        }else{
                            this.$emit('changeData', {name: this.nameItem, value: false, success: false, alreadyHas: true})
                        }
                    })
                }

                else if(this.valueItem === this.accountWords.noneData && this.inputData !== ''){
                    console.log('IF');
                    if (this.inputData.toLowerCase() !== this.valueItem.toLowerCase()){
                        this.isChangeMode = false
                        // форматирование введенной строки чтобы поднять первый символ в верхний регистр
                        this.inputData = this.inputData[0].toUpperCase() + this.inputData.slice(1)
                        this.$emit('changeData', {name: this.nameItem, value: this.inputData, success: true})
                        this.inputData = ''
                    }else{
                        this.isChangeMode = false
                        this.$emit('changeData', {name: this.nameItem, value: false, success: false})
                        this.inputData = ''
                    }
 
                }
                else if(this.inputData !== ''){
                    console.log('ELSE IF');
                    if (this.inputData.toLowerCase() !== this.valueItem.toLowerCase()){
                        this.isChangeMode = false
                        // форматирование введенной строки чтобы поднять первый символ в верхний регистр
                        this.inputData = this.inputData[0].toUpperCase() + this.inputData.slice(1)
                        this.$emit('changeData', {name: this.nameItem, value: this.inputData, success: true})
                        this.inputData = ''
                    }else{
                        this.isChangeMode = false
                        this.$emit('changeData', {name: this.nameItem, value: false, success: false})
                        this.inputData = ''
                    }

                }else{
                    if (this.inputData === this.valueItem){
                        this.$emit('changeData', {name: this.nameItem, value: false, success: false})
                    }
                    this.$emit('changeData', {name: this.nameItem, value: false, success: false})
                }
            }
            // console.log(this.nameItem);
        },

        resetChangeItem(){
            if(this.typeItem === this.typeItemChangeData.string){
                this.inputData = ''
            }
        },

        // Метод отсылает запрос на очищение элемента данных
        removeDataItem(){
            this.$emit('reqRemoveDataItem', {name: this.nameItem, value: this.valueItem})
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

            // Поле показывающее предупреждение
            isWarning: state => state.AuthModule.isWarning,
        }),
    },

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
    .change-data-item__btns-active{
        position: relative;
        display: flex;
        justify-content: center;
        align-self: center;
        flex-grow: 1;
        width: 5%;
        margin: 0 0 0 10px;

        &:hover{
            cursor: default;
        }
    }
    .change-data-item__btns-active-right{
        display: flex;
        flex-direction: column;
    }
    .change-data-item__change-btn{
        display: flex;
        height: -moz-max-content;
        height: max-content;
        justify-content: center;
        align-self: center;
        width: -moz-max-content;
        width: max-content;
        padding: 5px 9px;
        // border: 1px solid rgb(253, 148, 11);
        border-radius: 20px;
        flex-grow: 1;
        &:hover{
            // border: 3px solid rgb(253, 148, 11);
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
            border: 2px solid rgb(255, 123, 0);
            cursor: pointer;
        }
    }
    .change-active-mode--close{
        position: relative;
        top: 0;
        left: 0;
    }
    .change-data-item__change-active-mode-btn--success{
        position: relative;
        right: -3px;
        bottom: 0;
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
            border: 2px solid rgb(255, 123, 0);
            cursor: pointer;
        }
    }

}

.data-block__item{
    position: relative;
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
    .hit-input{
        position: relative;
        display: flex;
        flex-direction: column;
        width: max-content;
        & p{
            position: absolute;
            top: 0;
            right: 15px;
        }
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