<!-- НАВБАР -->
<template>
    <div @click="showLog" ref="navbar" class="navbar">
        <div class="title">
            <div class="logo" :class="{'dark': darkMode}">
            </div>
            <h1 class="title--text" :class="{'dark': darkMode}" @click="$router.push({name: 'main'})">
                {{ (this.darkMode)? 'PornHub' : 'Current Target Sale'}}
            </h1>
        </div>
    </div>
    <!-- Навигационные кнопки для комп. версии -->
    <div class="btns">
<!-- ЛЕВОСТОРОННИЕ КНОПКИ -->
            <div class="btns__left">
<!-- Кнопка На главную -->
                <button-comp 
                @click="$router.push({name: 'main'})" 
                title="Home"
                class="left--btn"
                >
                    <i-home></i-home> Home
                </button-comp>
<!-- Кнопка Каталог -->
                <button-comp 
                @click="$router.push({name: 'category'})" 
                title="Catalog"
                class="left--btn"
                >
                    <i-catalog></i-catalog> Catalog
                </button-comp>
<!-- кнопка Корзина -->
                <button-comp 
                @click="$router.push({name: 'cart'})" 
                title="Cart"
                class="left--btn"
                >
                <i-cart></i-cart> Cart
                </button-comp>
<!-- Кнопка Настройки -->
                <button-comp 
                @click="$store.commit('SettingsModule/openSettingsModal')" 
                title="Settings"
                class="left--btn"
                > 
                    <i-settings></i-settings> Settings
                </button-comp>
            </div>
<!-- ПРАВОСТОРОННИЕ КНОПКИ -->
            <div class="btns__right">

<!-- Кнопка смены цветовой темы -->
                <button-comp
                class="right--btn"
                @click="darkModeActive"
                >
                    <i-theme></i-theme> Theme: {{ (darkMode)? 'Dark' : 'Light' }}
                </button-comp>

<!-- Кнопка Войти -->
                <button-comp 
                @click="$router.push({name: 'auth'})" 
                title="Login and Registred" 
                class="right--btn"
                >
                Login <i-login></i-login>
                </button-comp>
            </div>
    </div>

<!-- Навигационные кнопки для мобильной версии 
        запускаются в @/styles/media/navbar_m.scss -->
    <nav-menu-mobile></nav-menu-mobile>
</template>
<script>
import NavMenuMobile from '@/components/Navbar/NavMenuMobile.vue'
import { mapState } from 'vuex';
export default {
    components: {
        NavMenuMobile,
    },
    data(){
      return {
        size: {
            width: 25,
            height: 25,
        },
        isDarkMode: JSON.parse(localStorage.getItem('darkMode')),
      }  
    },
    methods: {
        // Метод включает и отключает темную тему
        darkModeActive(){
            this.isDarkMode = !this.isDarkMode
            if(!JSON.parse(localStorage.getItem('darkMode'))){
                this.$store.commit('darkModeActive')
                localStorage.setItem('darkMode', true)
            }else{
                this.$store.commit('darkModeDisabled')
                localStorage.setItem('darkMode', false)            
            }
        },
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        })
    },
    watch: {
        darkMode(newValue){
            // Смена темы для логотипа
            const logo = document.querySelector('.logo')
            if(newValue){
                logo.style.backgroundColor = 'rgba(36, 33, 33, 1)'
            }else{
                logo.style.backgroundColor = ''
            }
        }
    },
    mounted(){
        // Смена темы для логотипа
        const logo = document.querySelector('.logo')
        if(this.darkMode){
            logo.style.backgroundColor = 'rgba(36, 33, 33, 1)'
        }else{
            logo.style.backgroundColor = ''
        }
    }
}
</script>
<style lang="scss" scoped>
// @include h1-gradient;
h1{
    display: flex;
    font-size: 2em;
    margin: 10px 30px;
    background-color: white;
    color: rgb(239, 137, 21);
    border-radius:$radius;
    padding: 5px;
    &:hover{
        cursor: pointer;
    }
}
.navbar{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25vh;
    background: $background-gr;
    margin-bottom: 20px;
    box-shadow: $shadow;
    border: {
        bottom-left-radius: $radius;
        bottom-right-radius: $radius;
    }
}
.title{
    display: flex;
    // justify-content: space-between;
    justify-content: flex-start;
    align-items: center;
    .logo{
        display: flex;
        align-items: center;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin: 10px 0 0 30px;
        background-color: white;
    }
}
.btns{
    position: absolute;
    top: 15vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 20px;
    }
        // НавБар Лев.кнопки и Прав.кнопки
    .btns__left{
        display: flex;
    }
    .btns__right{
        display: flex;
    }
@include darkMode;
@include darkMode_btn;
// Импорт файла адаптации под мобильные ус-ва
@import '@/styles/media/navbar__m.scss'
</style>