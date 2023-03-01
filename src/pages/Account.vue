
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
                        <itemComp :titleItem="'Имя'"></itemComp>

                        <!-- Фамилия -->
                        <itemComp :titleItem="'Фамилия'"></itemComp>

                        <!-- Никнейм (Username) -->
                        <itemComp :titleItem="'Никнейм'"></itemComp>

                        <!-- Эл. почта -->
                        <itemComp :titleItem="'Эл.почта'"></itemComp>
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
                    <itemComp :titleItem="'Дата регистрации'" :valueItem="'12.07.2022'"></itemComp>

                    <itemComp :titleItem="'Последнее изменение аккаунта'" :valueItem="'24.01.2023'"></itemComp>

                    <!-- <itemComp :titleItem="'Имя'" :valueItem="'Vlad'"></itemComp> -->
                </ul>

            </div>

        </div>

    </div>
</template>
<script>
import itemComp from '@/components/AccountPage/itemComp.vue';
import { mapState } from 'vuex';
export default {
    components: {
        itemComp
    },
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