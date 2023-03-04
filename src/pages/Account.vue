
<!-- АККАУНТ КЛИЕНТА (ПОЛЬЗОВАТЕЛЯ ИЛИ СОТРУДНИКА) -->
<template>
    <!-- ГЛАВНЫЙ БЛОК -->
    <div class="account-main" :class="{'dark': darkMode}">
        <modal-comp :show="true">
            <div 
            class="account__menu-change-client-data" 
            :class="{'dark': darkMode}" 
            :style="(!darkMode)? {backgroundColor: 'white'} : {backgroundColor: ''}"
            >
            <change-data-item></change-data-item>
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
                        <itemComp @click="log" :titleItem="'Имя'" :valueItem="nameComuted"></itemComp>

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

                    <!-- <itemComp :titleItem="'Имя'" :valueItem="'Vlad'"></itemComp> -->
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

        userData: {},
    
    }),

    methods: {
        log(){
            console.log(this.imageComuted);
        },
    },

    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
            accountWords: state => state.accountWords,

            userDataStore: state => state.UserModule.userData,
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
            if(this.userData.image){
                return this.userData.image
            }
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
        padding: 10px;
        border-radius: $radius;
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