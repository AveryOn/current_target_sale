<template>
    <div>Page Auth</div>
    <div class="Auth-Page">
        <!-- ОПИСАНИЕ МАГАЗИНА -->
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officia temporibus reprehenderit architecto autem recusandae ad adipisci, neque eum blanditiis perferendis velit eaque praesentium commodi maiores fugiat eos in itaque!</p>
        <!-- ФОРМА АУТЕНТИФИКАЦИИ -->
        <div class="auth-form">
                <h3 class="summary-auth-form">Input your credentials</h3>
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
                <button-comp class="btn-confirm">Confirm</button-comp>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username: '',
            password: '', 
        }
    }
}
</script>
<style lang="scss" scoped>
.Auth-Page{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 100vh;
    border: $border;
    border-radius: $radius;
    .description{
        width: 30%;
        height: max-content;
        background-color: rgba(0,0,0, .25);
        padding: 40px 20px;
        border-left: 4px solid $color-orange-white;
        border: {
            top-right-radius: $radius;
            bottom-right-radius: $radius;
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
        // background: linear-gradient(to right, #fc3b22, $color-orange-white);
        background-color: rgba(0,0,0, .25);
    }
    .summary-auth-form{
        display: flex;
        margin: 20px 0 30px 0;
        justify-content: center;
    }
    .p{
        margin: 30px 0 5px 5px;
    }
    .btn-confirm{
        display: flex;
        align-self: flex-end;
    }
}

</style> 