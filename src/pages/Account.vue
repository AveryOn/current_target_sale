
<!-- АККАУНТ КЛИЕНТА (ПОЛЬЗОВАТЕЛЯ ИЛИ СОТРУДНИКА) -->
<template>
    <!-- ГЛАВНЫЙ БЛОК -->
    <div class="account-main" :class="{'dark': darkMode}">

        <!-- МОДАЛЬНОЕ ОКНО ДЛЯ РЕДАКТИРОВАНИЯ ДАННЫХ АККАУНТА -->
        <modal-comp @click="log" :show="true">
            <div 
            class="account__menu-change-client-data" 
            :class="{'dark': darkMode}" 
            :style="(!darkMode)? {backgroundColor: 'white'} : {backgroundColor: ''}"
            >
                <h2 class="menu-change-client-data__title">Редактирование профиля</h2>

                <!-- Имя -->
                <changeDataItem 
                @changeData="recordChangeData" 
                :titleItem="'Имя'" 
                :valueItem="(changeUserData.name === null)? nameComuted : changeUserData.name" 
                :typeItem="typeItemChangeData.string"
                :nameItem="'name'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.name = false" 
                        :show="notifications.warning.name"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.name = false" 
                        :show="notifications.success.name"
                        >
                            Имя успешно изменено!
                        </notification-mini-success>
                    </template>
                </changeDataItem>


                <!-- Фамилия -->
                <changeDataItem 
                @changeData="recordChangeData" 
                :titleItem="'Фамилия'" 
                :valueItem="(changeUserData.lastname === null)? lastnameComuted : changeUserData.lastname" 
                :typeItem="typeItemChangeData.string"
                :nameItem="'lastname'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.lastname = false" 
                        :show="notifications.warning.lastname"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.lastname = false" 
                        :show="notifications.success.lastname"
                        >
                        Фамилия успешно изменена!
                        </notification-mini-success>
                    </template>
                </changeDataItem>


                  <!-- Пол -->
                <changeDataItem 
                @changeData="recordChangeData" 
                :titleItem="'Пол'" 
                :valueItem="(changeUserData.sex === null)? sexComuted : changeUserData.sex" 
                :typeItem="typeItemChangeData.radio"
                :nameItem="'sex'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.sex = false" 
                        :show="notifications.warning.sex"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.sex = false" 
                        :show="notifications.success.sex"
                        >
                        Пол успешно изменен!
                        </notification-mini-success>
                    </template>
                </changeDataItem>


                <!-- Никнейм -->
                <changeDataItem 
                @changeData="recordChangeData" 
                :titleItem="'Никнейм'" 
                :valueItem="(changeUserData.username === null)? usernameComuted : changeUserData.username" 
                :typeItem="typeItemChangeData.string"
                :nameItem="'username'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.username = false" 
                        :show="notifications.warning.username"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.username = false" 
                        :show="notifications.success.username"
                        >
                        Никнейм успешно изменен!
                        </notification-mini-success>
                    </template>

                    <!-- ОШИБКА, если изменяемые данные уже есть в базе данных -->
                    <template v-slot:error>
                        <notification-mini-error
                        class="change-error" 
                        @click="notifications.alreadyHas.username = false" 
                        :show="notifications.alreadyHas.username"
                        >
                            Такой никнейм уже существует!
                        </notification-mini-error>
                    </template>
                </changeDataItem>


                  <!-- Эл.Почта -->
                <changeDataItem 
                @changeData="recordChangeData" 
                :titleItem="'Эл.Почта'" 
                :valueItem="(changeUserData.email === null)? emailComuted : changeUserData.email" 
                :typeItem="typeItemChangeData.string"
                :nameItem="'email'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.email = false" 
                        :show="notifications.warning.email"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.email = false" 
                        :show="notifications.success.email"
                        >
                            Электронная почта успешно изменена!
                        </notification-mini-success>
                    </template>

                    <!-- ОШИБКА, если изменяемые данные уже есть в базе данных -->
                    <template v-slot:error>
                        <notification-mini-error
                        class="change-error" 
                        @click="notifications.alreadyHas.email = false" 
                        :show="notifications.alreadyHas.email"
                        >
                            Такой email уже существует!
                        </notification-mini-error>
                    </template>
                </changeDataItem>

                <!-- КНОПКИ КОМПОНЕНТА РЕДАКТИРОВАНИЯ -->
                <div class="account__menu-change-client-data__btns">
                    <button-comp @click="commitChangeData">Сохранить изменения</button-comp>
                    <button-comp @click="clearChangeUserData">Сбросить изменения</button-comp>
                </div>

            </div>
        </modal-comp>

        <!-- ШАПКА СТРАНИЦЫ АККАУНТ -->
        <header class="account-main_header">
            <h1 class="account-main_header__text">Ваш аккаунт</h1>
        </header>

        <!-- ТЕЛО СТРАНИЦЫ -->
        <div class="account-main_body">

            <!-- БЛОК С ОБЩЕЙ ИНФОРМАЦИЕЙ О КЛИЕНТЕ -->
            <div class="account-main_body__client-info">

                <!-- БЛОК ВЗАИМОДЕЙСТВИЯ С АВАТАРКОЙ КЛИЕНТА -->
                <div class="client-info__image-block">
                    <div class="client-info__image"></div>
                    <div class="client-info__image-btns">

                        <button-comp 
                        class="image-btns__btn"
                        :style="(!imageComuted) ? {marginTop: 'auto'} : {marginTop: ''}"
                        >
                            {{ (imageComuted)? 'Обновить' : 'Загрузить' }}
                        </button-comp>

                        <button-comp v-show="imageComuted" class="image-btns__btn">
                            Delete x
                        </button-comp>

                    </div>
                </div>

                <!-- БЛОК ДАННЫХ КЛИЕНТА -->
                <div class="client-info__data-block">
                    <ul type="none">
                        <!-- Имя -->
                        <itemComp :titleItem="'Имя'" :valueItem="nameComuted"></itemComp>

                        <!-- Фамилия -->
                        <itemComp :titleItem="'Фамилия'" :valueItem="lastnameComuted"></itemComp>

                        <!-- ПОЛ -->
                        <itemComp :titleItem="'Пол'" :valueItem="sexComuted"></itemComp>

                        <!-- Никнейм (Username) -->
                        <itemComp :titleItem="'Никнейм'" :valueItem="usernameComuted"></itemComp>

                        <!-- Эл. почта -->
                        <itemComp :titleItem="'Эл.почта'" :valueItem="emailComuted"></itemComp>
                    </ul>
                </div>

                <!-- КНОПКИ ВЗАИМОДЕЙСТВИЯ С ДАННЫМИ КЛИЕНТА -->
                <div class="client-info__btns-block">
                    <button-comp >Редактровать</button-comp>
                    <button-comp>Сохранить изменения</button-comp>
                </div>
            </div>

            <!-- БЛОК СТАТИСТИКИ КЛИЕНТА -->
            <div class="account-main_body__client-statistics">

                <ul type="none">
                    <!-- Дата регистрации -->
                    <itemComp 
                    :title="creationTimeComutedDifference" 
                    :titleItem="'Дата создания аккаунта'" 
                    :valueItem="creationTimeComuted"
                    >
                    </itemComp>

                    <!-- Дата редактирования аккаунта -->
                    <itemComp 
                    :title="(editTimeComutedDifference !== this.accountWords.noneChange) ? editTimeComutedDifference : ''" 
                    :titleItem="'Последнее изменение аккаунта'" 
                    :valueItem="editTimeComuted"
                    >
                    </itemComp>

                </ul>

            </div>

        </div>

    </div>
</template>
<script>
import changeDataItem from '@/components/AccountPage/changeDataItem.vue';
import itemComp from '@/components/AccountPage/itemComp.vue';
import { mapState } from 'vuex';
import moment from 'moment'

export default {
    name: 'account',

    components: {
        itemComp,
        changeDataItem,
    },
    
    data: () => ({

        // Поле в которое записываются данные клиента пришедшие с сервера
        userData: {},

        // Поле в которое записываются данные редактирования аккаунта
        changeUserData: {
            name: null,
            lastname: null,
            sex: null,
            username: null,
            email: null,
            image: null,
        },

        // Всплытие уведомлений
        notifications: {
            // Всплытие предупреждения
            warning: {
                name: false,
                lastname: false,
                sex: false,
                username: false,
                email: false,
            },
            // Всплытие успеха
            success: {
                name: false,
                lastname: false,
                sex: false,
                username: false,
                email: false,
            },
            // Всплытие ошиби о том что это уникальные данные и они уже присутствуют в БД
            alreadyHas: {
                username: false,
                email: false,
            }

        }

    
    }),

    methods: {
        log(){
            console.log(this.changeUserData);
        },

        // Метод ЗАПОЛНЯЕТ поля данных изменения которые приходят с каждого элемента редактирования
        recordChangeData(data){
            if(data.success === false && data.alreadyHas){
                this.notifications.alreadyHas[data.name] = true
                setTimeout(() => {
                    this.notifications.alreadyHas[data.name] = false
                }, 3000);
            }
            else if(data.value === false && data.success === false){
                this.notifications.warning[data.name] = true
                setTimeout(() => {
                    this.notifications.warning[data.name] = false
                }, 3000);
            }
            else{
                this.changeUserData[data.name] = data.value
                this.notifications.success[data.name] = true
                setTimeout(() => {
                    this.notifications.success[data.name] = false
                }, 3000);
                console.log(data);
            }
            return false
        },

        // Метод СОХРАНЯЕТ на сервере изменные данные клиента
        commitChangeData(){
            this.$store.dispatch('UserModule/updateUserData', {changeUserData: this.changeUserData})
        },

        // Метод сбрасывает все измененения данных
        clearChangeUserData(){
            this.changeUserData.name = null
            this.changeUserData.lastname = null
            this.changeUserData.sex = null
            this.changeUserData.username = null
            this.changeUserData.email = null
        },
    },

    computed: {
        ...mapState({
            darkMode: state => state.darkMode,

            // Допсутимые обозначения неопределенных данных
            accountWords: state => state.accountWords,

            // Поле в которое записываются данные клиента пришедшие с сервера
            userDataStore: state => state.UserModule.userData,

            // Допустимые типы элемента редактирования
            typeItemChangeData: state => state.typeItemChangeData,
        }),


//###############################################  БЛОК ОБЩИХ ДАННЫХ КЛИЕНТА  #######################################################


        // Вычисление ИМЕНИ клиента относительно полученных данных 
        nameComuted(){
                let name = this.userData.name
                if(name) return name
                else return this.accountWords.noneData
        },

        // Вычисление ФАМИЛИИ клиента относительно полученных данных 
        lastnameComuted(){
            let lastname = this.userData.lastname
            if(lastname) return lastname
            else return this.accountWords.noneData
        },

        // Вычисление ПОЛА клиента относительно полученных данных 
        sexComuted(){
            let sex = this.userData.sex
            if(sex) return sex
            else return this.accountWords.noneData
        },

        // Вычисление НИКНЕЙМА клиента относительно полученных данных 
        usernameComuted(){
            let username = this.userData.username
            if(username) return username
            else return this.accountWords.noneData
        },

        // Вычисление ЭЛ.ПОЧТЫ клиента относительно полученных данных 
        emailComuted(){
            let email = this.userData.email
            if(email) return email
            else return this.accountWords.noneData
        },

        // Вычисление АВАТАРКИ клиента относительно полученных данных 
        imageComuted(){
            if(this.userData.image) return this.userData.image
            else return false
        },


//####################################################  БЛОК СТАТИСТИКИ  #######################################################


        // Вычисление ВРЕМЕНИ СОЗДАНИЯ аккаунта клиента относительно полученных данных 
        creationTimeComuted(){
            if(this.userData?.creation_time?.length){
                let creation_time = this.userData.creation_time
                return moment(creation_time, 'x').format('DD.MM.YYYY')
            }else return this.accountWords.undefinedData
        },


        // Вычисление ВРЕМЕНИ РЕДАКТИРОВАНИЯ аккаунта клиента относительно полученных данных 
        editTimeComuted(){
            if(this.userData?.edit_time?.length){
                let editTime = this.userData.edit_time
                return moment(editTime, 'x').format('DD.MM.YYYY')
            }else return this.accountWords.noneChange
        },


        // Вычисление разницы во времени между ТЕКУЩИМ временем и последним редактированием аккаунта
        editTimeComutedDifference(){
            if(this.userData?.edit_time?.length){
                const editTime = this.userData.edit_time
                return moment(editTime, "x").fromNow()
            }else return this.accountWords.noneChange
        },

        // Вычисление разницы во времени между ТЕКУЩИМ временем и ВРЕМЕНЕМ СОЗДАНИЯ аккаунта
        creationTimeComutedDifference(){
            if(this.userData?.creation_time?.length){
                const creationTime = this.userData.creation_time
                return moment(creationTime, "x").fromNow()
            }else return this.accountWords.noneChange
        }

    },

    created(){
        this.$store.dispatch('UserModule/getDataUser').then(data => {
            this.userData = {...data}
        })
    },
    
    mounted(){
    }

}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
.non-change-warning{
    position: absolute;
    top: 50px;
    right: 0px;
}
.change-sucess{
    position: absolute;
    right: 40px;
    left: 40px;
}
.change-error{
    position: absolute;
    right: 20px;
    left: 20px;
}
.account-main{
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    height: max-content;
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
    background-color: white;
    .account__menu-change-client-data{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 80vh;
        padding: 20px 10px 20px 10px;
        border: $border;
        border-radius: $radius;
        .menu-change-client-data__title{
            align-self: center;
            margin: 10px 0 30px 0;
        }

        .account__menu-change-client-data__btns{
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0 0 0 ;
            align-self: center;
        }
    }


    .account-main_header{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 30px 20px;
        height: max-content;
        border-bottom: $border;
    }
    .account-main_header__text{
        position: relative;
        right: 20px;
        font-size: 2.3em;
    }
    .account-main_body{
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0;
        // border: $border;
        // border-radius: $radius;
    }
    .account-main_body__client-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: max-content;
        border: $border;
        border-radius: $radius;
        margin: 20px 0;
        padding: 0 15px;
        box-shadow: $shadow;
        .client-info__image-block{
            display: flex;
            width: max-content;
            height: max-content;
            border-bottom: $border;
            padding: 30px 20px;
            
            .client-info__image{
                width: 200px;
                height: 200px;
                border: $border;
                border-radius: 50%;
                box-shadow: $shadow;
            }
            .client-info__image-btns{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                width: max-content;
                height: 200px;
                // border: $border;
                // border-radius: $radius;
                margin-left: 20px;
            }
            .image-btns__btn{
                padding: 30px 20px;
            }

        }
        .client-info__data-block{
            display: flex;
            width: 100%;
            flex-direction: column;
            // border: $border;
            // border-radius: $radius;
            margin: 20px 0;
        }
        .client-info__btns-block{
            display: flex;
            justify-content: space-around;
            width: 100%;
            // border: $border;
            // border-radius: $radius;
            margin-bottom: 10px;
        }
    }
    .account-main_body__client-statistics{
        display: flex;
        width: max-content;
        border: $border;
        border-radius: $radius;
        margin: 20px 0;
        padding: 5px 10px;
        box-shadow: $shadow;
    }
} 
@include darkMode_with_font;
</style>