<!-- СТРАНИЦА АЦТЕНТИФИКАЦИИ -->
<template>
    <div class="Auth-Page">
        
        <!-- УВЕДОМЛЕНИЕ ОБ ОШИБКЕ -->
        <notification-error 
        :show="this.$store.state.AuthModule.error.isError"
        @click="this.$store.commit('AuthModule/errorFalse')"
        >
            {{ this.$store.state.AuthModule.error.data }}
        </notification-error>
        
        <div class="auth-title-header">
            <h1 class="title-text">Auth</h1>
        </div>
        <div class="auth-body-layout">
            <!-- ОПИСАНИЕ МАГАЗИНА -->
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officia temporibus reprehenderit architecto autem recusandae ad adipisci, neque eum blanditiis perferendis velit eaque praesentium commodi maiores fugiat eos in itaque!</p>
            <!-- ФОРМА АУТЕНТИФИКАЦИИ -->

            <!-- Блок АВТОРИЗАЦИИ -->
            <div 
            @keyup.enter="this.$store.dispatch('AuthModule/authUser', {login: username, password: password})" 
            v-show="!$store.state.AuthModule.isRegistration" 
            class="auth-form"
            >
                <notification-caps-lock class="caps-lock-auth-form" :show="isCapsLock"></notification-caps-lock>
                
                <h2 class="summary-auth-form">Login</h2>
                <p class="p">Enter your email or username</p>
                <input-comp
                :isAuthField="true"
                v-model="username"
                class="input" 
                type="text"
                placeholder="Email or username..."
                />
                <p class="p">Enter your password</p>
                <input-comp
                v-model="password"
                :isAuthField="true"
                class="input" 
                type="password"
                placeholder="Password..."/>

                <div class="auth-btns">

                    <a @click="$store.commit('AuthModule/openRegBlock')" class="reg-href">Registration...</a>

                    <button-comp 
                    class="btn-confirm" 
                    @click="this.$store.dispatch('AuthModule/authUser', {login: username, password: password})"
                    >
                        Подтвердить
                    </button-comp>

                </div>
            </div>

            <!-- Блок РЕГИСТРАЦИИ -->
            <div 
            v-show="$store.state.AuthModule.isRegistration" 
            @keyup.enter="this.$store.dispatch('AuthModule/registrationUser', {email: email, username: username, password: password})"
            class="auth-form__registration"
            >
                <notification-caps-lock class="caps-lock-register-form" :show="isCapsLock"></notification-caps-lock>
                <h2 class="summary-auth-form">Registration</h2>
                <p class="p">Enter your Email</p>
                <input-comp
                :isAuthField="true"
                v-model="email" 
                class="input" 
                type="text"
                placeholder="Email..."/>
                <p class="p">Enter your Username</p>
                <input-comp 
                :isAuthField="true"
                v-model="username" 
                class="input" 
                type="text"
                placeholder="Email or username..."/>
                <p class="p">Enter your Password</p>
                <input-comp
                :isAuthField="true"
                v-model="password" 
                class="input" 
                type="password"
                placeholder="Password..."/>
                <div class="auth-btns">
                    <a @click="$store.commit('AuthModule/closeRegBlock')" class="reg-href">Login-></a>
                    <button-comp 
                    class="btn-confirm" 
                    @click="this.$store.dispatch('AuthModule/registrationUser', {email: email, username: username, password: password})"
                    >
                    Подтвердить
                    </button-comp>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            email: '',
            username: '',
            password: '', 
        }
    },

    watch: {
        darkMode(newValue){
            // Смена темы для description
            const description = document.querySelector('.description')
            if(newValue){
                description.style.backgroundColor = 'rgba(36, 36, 36, 0.9)'
                description.style.color = 'rgb(255, 205, 138)'
            }else{
                description.style.backgroundColor = ''
                description.style.color = ''
            }

            // Смена темы для authForm && authForm__registration
            const authForm = document.querySelector('.auth-form')
            const authForm__registration = document.querySelector('.auth-form__registration')
            if(newValue){
                authForm.style.backgroundColor = 'rgba(36, 36, 36, 0.9)'
                authForm.style.color = 'rgb(255, 205, 138)'
                authForm__registration.style.backgroundColor = 'rgba(36, 36, 36, 0.9)'
                authForm__registration.style.color = 'rgb(255, 205, 138)'
            }else{
                authForm.style.backgroundColor = ''
                authForm.style.color = ''
                authForm__registration.style.backgroundColor = ''
                authForm__registration.style.color = ''
            }
        }
    },

    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
            isRegistration: state => state.isRegistration,

            // Поле отслеживающее нажатие CapsLock
            isCapsLock: state => state.AuthModule.isCapsLock
        }),
    },

    mounted(){
        // Смена темы для description
        const description = document.querySelector('.description')
        if(this.darkMode){
            description.style.backgroundColor = 'rgba(36, 36, 36, 0.9)'
            description.style.color = 'rgb(255, 205, 138)'
        }else{
            description.style.backgroundColor = ''
            description.style.color = ''
        }

        // Смена темы для authForm && authForm__registration
        const authForm = document.querySelector('.auth-form')
        const authForm__registration = document.querySelector('.auth-form__registration')
        if(this.darkMode){
            authForm.style.backgroundColor = 'rgba(36, 36, 36, 0.9)'
            authForm.style.color = 'rgb(255, 205, 138)'
            authForm__registration.style.backgroundColor = 'rgba(36, 36, 36, 0.9)'
            authForm__registration.style.color = 'rgb(255, 205, 138)'
        }else{
            authForm.style.backgroundColor = ''
            authForm.style.color = ''
            authForm__registration.style.backgroundColor = ''
            authForm__registration.style.color = ''
        }

    },
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
.Auth-Page{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
    margin: 50px 20px 0 20px;
    .auth-title-header{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        .title-text{
            font-size: 3em;
        }
    }
    .auth-body-layout{
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 100vh;
        padding-bottom: 50px;
    }
    .description{
        width: 30%;
        height: max-content;
        padding: 40px 20px;
        box-shadow: $shadow;
        background-color: white;
        border: {
            top-right-radius: $radius;
            bottom-right-radius: $radius;
            left: 4px solid $color-orange-white;
            top: $border;
            right: $border;
            bottom: $border;
        }
    }
    .auth-form{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 30%;
        height: max-content;
        border: $border;
        border-radius: $radius;
        padding: 30px;
        box-shadow: $shadow;
        background-color: white;
        .caps-lock-auth-form{
            right: 0;
            left: 0;
            bottom: -25px;
        }
        .input{
            box-shadow: none;
            &:focus{
                box-shadow: $shadow;
            }
        }
    }
    .auth-form__registration{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 30%;
        height: max-content;
        border: $border;
        border-radius: $radius;
        padding: 30px;
        box-shadow: $shadow;
        background-color: white;
        .caps-lock-register-form{
            right: 0;
            left: 0;
            bottom: -25px;
        }
        .input{
            box-shadow: none;
            &:focus{
                box-shadow: $shadow;
            }
        }
    }
    .summary-auth-form{
        display: flex;
        margin: 20px 0 30px 0;
        justify-content: center;
        background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .p{
        margin: 30px 0 5px 5px;
    }
    .auth-btns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .reg-href{
            color: $or-wh-txt;
            margin-top: 20px;
            &:hover{
                cursor: pointer;
                text-decoration:solid;
            }
        }
        .btn-confirm{
            display: flex;
            align-self: flex-end;
            margin: 20px 0 0 auto;
        }
    }
}
@include darkMode;
</style> 