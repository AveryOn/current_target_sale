<template>
    <div class="account-main" :class="{'dark': darkMode}">

        <header class="account-main_header">
            <h1 class="account-main_header__text">Ваш аккаунт</h1>
        </header>

        <div class="account-main_body">

            <div class="account-main_body__client-info">

                <!-- БЛОК ВЗАИМОДЕЙСТВИЯ С АВАТАРКОЙ -->
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
                        <li class="data-block__item">
                            <p class="data-block__item--title">Name</p>
                            <p class="data-block__item--value">Vlad</p>
                        </li>
                        <!-- Фамилия -->
                        <li class="data-block__item">
                            <p class="data-block__item--title">Last Name</p>
                            <p class="data-block__item--value">Avery</p>
                        </li>
                        <!-- Никнейм (Username) -->
                        <li class="data-block__item">
                            <p class="data-block__item--title">Username</p>
                            <p class="data-block__item--value">vlad123</p>
                        </li>
                        <!-- Эл. почта -->
                        <li class="data-block__item">
                            <p class="data-block__item--title">Email</p>
                            <p class="data-block__item--value">lnkonion2@gmail.com</p>
                        </li>
                    </ul>
                </div>

                <!-- КНОПКИ ВЗАИМОДЕЙСТВИЯ С ДАННЫМИ КЛИЕНТА -->
                <div class="client-info__btns-block">
                    <button-comp>Change Data</button-comp>
                    <button-comp>Save</button-comp>
                </div>
            </div>

            <!-- БЛОК СТАТИСТИКИ КЛИЕНТА -->
            <div class="account-main_body__client-statistics">
                hello! client-statistics
            </div>

        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'account',
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },

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
            .data-block__item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: $border;
                border-radius: $radius;
                margin: 10px 5px;
                cursor: default;
            }
            .data-block__item--title{
                font-size: 1.3em;
                color: $or-wh-txt;
                margin: 10px 20px;
            }
            .data-block__item--value{
                font-size: 1.3em;
                color: $or-wh-txt;
                font-weight: bolder;
                margin: 10px 20px;
            }
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
    }
} 
@include darkMode_with_font;
</style>