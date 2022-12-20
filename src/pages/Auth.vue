<!-- СТРАНИЦА АЦТЕНТИФИКАЦИИ -->
<template>
    <div class="Auth-Page">
        <div class="auth-title-header">
            <h1 class="title-text">Auth</h1>
        </div>
        <div class="auth-body-layout">
            <!-- ОПИСАНИЕ МАГАЗИНА -->
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officia temporibus reprehenderit architecto autem recusandae ad adipisci, neque eum blanditiis perferendis velit eaque praesentium commodi maiores fugiat eos in itaque!</p>
            <!-- ФОРМА АУТЕНТИФИКАЦИИ -->
            <!-- Блок авторизации -->
            <div v-if="!$store.state.AuthModule.isRegistration" class="auth-form">
                <h2 class="summary-auth-form">Login</h2>
                <p class="p">Enter your email or username</p>
                <input-comp
                v-model="username" 
                class="input" 
                type="text"
                placeholder="Email or username..."/>
                <p class="p">Enter your password</p>
                <input-comp
                v-model="password" 
                class="input" 
                type="password"
                placeholder="Password..."/>
                <div class="auth-btns">
                    <a @click="$store.commit('AuthModule/openRegBlock')" class="reg-href">Registration...</a>
                    <button-comp class="btn-confirm">Confirm</button-comp>
                </div>
            </div>
            <!-- Блок Регистрации -->
            <div v-else class="auth-form">
                <h2 class="summary-auth-form">Registration</h2>
                <p class="p">Enter your Email</p>
                <input-comp 
                v-model="email" 
                class="input" 
                type="text"
                placeholder="Email..."/>
                <p class="p">Enter your Username</p>
                <input-comp 
                v-model="username" 
                class="input" 
                type="text"
                placeholder="Email or username..."/>
                <p class="p">Enter your Password</p>
                <input-comp
                v-model="password" 
                class="input" 
                type="password"
                placeholder="Password..."/>
                <div class="auth-btns">
                    <a @click="$store.commit('AuthModule/closeRegBlock')" class="reg-href">Login-></a>
                    <button-comp class="btn-confirm">Confirm</button-comp>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email: '',
            username: '',
            password: '', 
        }
    }
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
    margin: 0 20px;
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
        display: flex;
        flex-direction: column;
        width: 30%;
        height: max-content;
        border: $border;
        border-radius: $radius;
        padding: 30px;
        box-shadow: $shadow;
        background-color: white;
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

</style> 