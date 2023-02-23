<!-- СТРАНИЦА ДЛЯ АВТОРИЗАЦИИ СОТРУДНИКОВ СЕРВИСА -->
<template>
    <div class="auth-manager" :class="{'dark': darkMode}">
        
        <h1 class="auth-manager_title">Авторизация сотрудника</h1>

        <div class="auth-manager_body">

            <!-- ОПИСАНИЕ МАГАЗИНА -->
            <div 
            class="auth-manager_body__description"
            :style="(darkMode) ? {color: 'rgb(255, 205, 138)'} : {color: 'rgb(215, 124, 5)'}"
            :class="{'dark': darkMode}"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officia temporibus reprehenderit architecto autem recusandae ad adipisci, neque eum blanditiis perferendis velit eaque praesentium commodi maiores fugiat eos in itaque!
            </div>


            <!-- ФОРМА АВТОРИЗАЦИИ -->
            <form @submit.prevent class="auth-manager_form">
                <h2 class="form__title">Подтвердите ваши данные</h2>
                <div class="form__body">
    
                    <!-- Поле для ввода UUID -->
                    <label 
                    for="UUID" 
                    :style="(darkMode) ? {color: 'rgb(255, 205, 138)'} : {color: 'rgb(215, 124, 5)'}"
                    >
                        Введите UUID-сотрудника
                    </label>

                    <input-comp 
                    id="UUID" 
                    class="auth-manager_form__input"
                    placeholder="UUID"
                    type="text"
                    v-model="this.formData.UUID"
                    >
                    </input-comp>
    
                    <!-- Поле для ввода KEY_ACCESS -->
                    <label 
                    for="KEY_ACCESS" 
                    :style="(darkMode) ? {color: 'rgb(255, 205, 138)'} : {color: 'rgb(215, 124, 5)'}"
                    >
                        Введите ключ доступа
                    </label>

                    <input-comp 
                    id="KEY_ACCESS" 
                    class="auth-manager_form__input"
                    placeholder="Ключ доступа"
                    type="password"
                    v-model="this.formData.KEY_ACCESS"
                    >
                    </input-comp>
    
                    <!-- Поле для ввода Username -->
                    <label 
                    for="username" 
                    :style="(darkMode) ? {color: 'rgb(255, 205, 138)'} : {color: 'rgb(215, 124, 5)'}"
                    >
                        Введите логин
                    </label>

                    <input-comp 
                    id="username" 
                    class="auth-manager_form__input"
                    placeholder="Логин"
                    type="username"
                    v-model="this.formData.username"
                    >
                    </input-comp>
    
                    <!-- Поле для ввода password -->
                    <label 
                    for="password" 
                    :style="(darkMode) ? {color: 'rgb(255, 205, 138)'} : {color: 'rgb(215, 124, 5)'}"
                    >
                        Введите пароль
                    </label>

                    <input-comp 
                    id="password" 
                    class="auth-manager_form__input"
                    placeholder="Пароль"
                    type="password"
                    v-model="this.formData.password"
                    >
                    </input-comp>
    
                </div>
                <!-- Панель Кнопок формы -->
                <div class="form__btns">
                    <button-comp @click="this.$store.dispatch('AuthModule/authEmploy')">Подтвердить</button-comp>
                    <button-comp @click="clearFormData">Очистить поля</button-comp>
                </div>
            </form>

        </div>


    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data: ()=> ({
        formData: {
            UUID: '',
            KEY_ACCESS: '',
            username: '',
            password: '',
        }
    }),
    methods: {
        log(){
            console.log(this.formData);
        },
        clearFormData(){
            this.formData.UUID = ''
            this.formData.KEY_ACCESS = ''
            this.formData.username = ''
            this.formData.password = ''
        }
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    }
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
.auth-manager{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 80vh;
    height: max-content;
    border: $border;
    border-radius: $radius;
    background-color: white;
    box-shadow: $shadow;
    margin-top: 50px;
    padding: 0 0 50px 0;
    .auth-manager_title{
        position: relative;
        display: flex;
        align-self: center;
        margin: 0 auto 0 auto;
        top: 30px;
        font-size: 2.3em;
    }
    .auth-manager_body{
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: max-content;
        margin: 100px 0 0 0;
        padding: 30px 50px 10px 50px;
        .auth-manager_body__description{
            width: 30%;
            height: max-content;
            padding: 40px 20px;
            box-shadow: $shadow;
            color: $or-wh-txt;
            border: {
                top-right-radius: $radius;
                bottom-right-radius: $radius;
                left: 4px solid $color-orange-white;
                top: $border;
                right: $border;
                bottom: $border;
            }
        }
        .auth-manager_form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 30%;
            min-height: 50%;
            height: max-content;
            border: $border;
            border-radius: $radius;
            padding: 10px 20px 30px 20px;
            box-shadow: $shadow;
        }
        .form__title{
            margin: 10px auto 10px auto;
        }
        .form__body{
            width: 100%;
            height: max-content;
            margin: 20px 0 0 0;
            padding: 20px 0 10px 0;
        }
        .form__btns{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
        label{
            position: relative;
            display: block;
            color: $or-wh-txt;
            margin: 0 0 10px 10px;
        }
        .auth-manager_form__input{
            width: 100%;
            margin: 0 0 20px 0;
            box-shadow: none;
            &:focus{
                box-shadow: $shadow;
            }
            &::placeholder{
                color: rgb(151, 136, 136);
            }
        }

    }
}
@include darkMode;
@include darkMode-filterPanel;
</style>