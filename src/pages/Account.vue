
<!-- АККАУНТ КЛИЕНТА (ПОЛЬЗОВАТЕЛЯ ИЛИ СОТРУДНИКА) -->
<template>
    <!-- ГЛАВНЫЙ БЛОК -->
    <div class="account-main" :class="{'dark': darkMode}">

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
                        <button-comp class="image-btns__btn">Upload -></button-comp>
                        <button-comp class="image-btns__btn">Delete x</button-comp>
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
                    <button-comp>Редактровать</button-comp>
                    <button-comp>Сохранить изменения</button-comp>
                </div>
            </div>

            <!-- БЛОК СТАТИСТИКИ КЛИЕНТА -->
            <div class="account-main_body__client-statistics">

                <ul type="none">
                    <!-- Дата регистрации -->
                    <itemComp :titleItem="'Дата регистрации'" :valueItem="creationTimeComuted"></itemComp>

                    <!-- Дата редактирования аккаунта -->
                    <itemComp :titleItem="'Последнее изменение аккаунта'" :valueItem="editTimeComuted"></itemComp>

                    <!-- TESTING -->
                    <itemComp :titleItem="'Разница времени редактирования'" :valueItem="editTimeComutedDifference"></itemComp>

                    <!-- <itemComp :titleItem="'Имя'" :valueItem="'Vlad'"></itemComp> -->
                </ul>

            </div>

        </div>

    </div>
</template>
<script>
import itemComp from '@/components/AccountPage/itemComp.vue';
import { mapState } from 'vuex';

import axios from 'axios'

export default {
    name: 'account',

    components: {
        itemComp
    },
    
    data: () => ({

        userData: {},
    
    }),

    methods: {
        log(){
            console.log(this.userData);
        },
    },

    computed: {
        ...mapState({
            darkMode: state => state.darkMode,

            userDataStore: state => state.UserModule.userData,
        }),


//###############################################  БЛОК ОБЩИХ ДАННЫХ КЛИЕНТА  #######################################################


        // Вычисление ИМЕНИ клиента относительно полученных данных 
        nameComuted(){
            let name = this.userData.name
            if(name) return name
            else return ''
        },

        // Вычисление ФАМИЛИИ клиента относительно полученных данных 
        lastnameComuted(){
            let lastname = this.userData.lastname
            if(lastname) return lastname
            else return ''
        },

        // Вычисление ПОЛА клиента относительно полученных данных 
        sexComuted(){
            let sex = this.userData.sex
            if(sex) return sex
            else return ''
        },

        // Вычисление НИКНЕЙМА клиента относительно полученных данных 
        usernameComuted(){
            let username = this.userData.username
            if(username) return username
            else return ''
        },

        // Вычисление ЭЛ.ПОЧТЫ клиента относительно полученных данных 
        emailComuted(){
            let email = this.userData.email
            if(email) return email
            else return ''
        },

//####################################################  БЛОК СТАТИСТИКИ  #######################################################




        // Вычисление ВРЕМЕНИ СОЗДАНИЯ аккаунта клиента относительно полученных данных 
        creationTimeComuted(){
            let creation_time = +this.userData.creation_time
            if(creation_time){
                let formatCreationTime
                formatCreationTime = new Date(creation_time)
                let year = formatCreationTime.getFullYear()
                let month = formatCreationTime.getMonth()
                let day = formatCreationTime.getDate()
                return `${(day < 10)? '0'+day : day}.${(month < 10)? '0'+(month+1) : month+1}.${year}`
            }
            else return ''
        },

        // Вычисление ВРЕМЕНИ РЕДАКТИРОВАНИЯ аккаунта клиента относительно полученных данных 
        editTimeComuted(){
            // let edit_time = JSON.parse(this.userDataComputed.edit_time)
            let comp = JSON.stringify(1677846410413)
            let edit_time = +comp
            if(edit_time){
                let formatEditTime
                formatEditTime = new Date(edit_time)
                let year = formatEditTime.getFullYear()
                let month = formatEditTime.getMonth()
                let day = formatEditTime.getDate()
                return `${(day < 10)? '0'+day : day}.${(month < 10)? '0'+(month+1) : month+1}.${year}`
            }
            else return ''
        },

        // Вычисление ТЕКУЩЕГО ВРЕМЕНИ. Для вычисления времени последнего изменения аккаунта
        nowTimeComuted(){
            let time_now = Date.now()
            let formatCreationTime
            formatCreationTime = new Date(time_now)
            let year = formatCreationTime.getFullYear()
            let month = formatCreationTime.getMonth()
            let day = formatCreationTime.getDate()
            return `${(day < 10)? '0'+day : day}.${(month < 10)? '0'+(month+1) : month+1}.${year}`
        },

        // Вычисление разницы во времени между ТЕКУЩИМ временем и последним редактированием аккаунта
        editTimeComutedDifference(){
            // Переменные для сравнения и вычисления разницы времени между двумя массивами дат 
            let nowTimeList__output = []
            let editTimeList__output = []

            // Обработка ТЕКУЩЕГО Времени. Конвертирование его составляющих со строк в числа
            // И их заключение в массив для следующего стравнения
            let nowTimeList = this.nowTimeComuted.split('.')
            for(let itemTime of nowTimeList){
                itemTime = itemTime.split('')
                if(itemTime[0] == 0){
                    itemTime.splice(0, 1)
                }
                itemTime = itemTime.join('')
                itemTime = +itemTime
                nowTimeList__output.push(itemTime)
            }

            // Обработка Времени РЕДАКТИРОВАНИЯ аккаунта. Конвертирование его составляющих со строк в числа
            // И их заключение в массив для следующего стравнения
            // let editTimeList = this.editTimeComuted.split('.')
            let editTimeList = '30.02.2022'.split('.')
            for(let itemTime of editTimeList){
                itemTime = itemTime.split('')
                if(itemTime[0] == 0){
                    itemTime.splice(0, 1)
                }
                itemTime = itemTime.join('')
                itemTime = +itemTime
                editTimeList__output.push(itemTime)
            }

            // Вычисление разницы времени между двумя массивами дат. Пример: [1, 3, 2023] -> [3, 3, 2023]

            // перменные для текущего времени
            const nowDay = nowTimeList__output[0]
            const nowMonth = nowTimeList__output[1]
            const nowYear = nowTimeList__output[2]

            // перменные для времени создания 
            const editDay = editTimeList__output[0]
            const editMonth = editTimeList__output[1]
            const editYear = editTimeList__output[2]

            // Переменные с результатом вычесления даты
            let differenceDate
            let differenceDateArray = []
            
            let differenceDay
            let differenceMonth
            let differenceYear

            // Вычисление разницы ДНЯ
            if(nowDay > editDay){
                differenceDay = nowDay - editDay
            }else{
                
            }
            differenceMonth = nowMonth - editMonth
            differenceYear = nowYear - editYear

            // Форматирование ДНЯ
            if(differenceDay !== 0){
                if(differenceDay.toString()[differenceDay.toString().length - 1] == 1 || differenceDay <= 1){
                    differenceDay = `${differenceDay} день.`
                }
                else if(differenceDay !== 1 && differenceDay <= 4){
                    differenceDay = `${differenceDay} дня.`
                }
                else{
                    differenceDay = `${differenceDay} дней.`
                }
            }else{
                differenceDay = null
            }

            // Форматирование МЕСЯЦА
            if(differenceMonth !== 0){
                differenceMonth = `${differenceMonth} мес.`
            }else{
                differenceMonth = null
            }

            // Форматирование ГОДА
            if(differenceYear !== 0){
                if(differenceYear.toString()[differenceYear.toString().length - 1] == 1 || differenceYear <= 4){
                    differenceYear = `${differenceYear} г.`
                }else{
                    differenceYear = `${differenceYear} л.`
                }
            }else{
                differenceYear = null
            }

            console.log(differenceDay);
            return differenceDay
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