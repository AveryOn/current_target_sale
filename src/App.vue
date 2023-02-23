<!-- ГЛАВНЫЙ СОМПОНЕНТ DOM-ДЕРЕВА-->
<template>
    <!-- НАВИГАЦИОННАЯ ПАНЕЛЬ (НАВБАР) -->
    <navbar-comp></navbar-comp>
    <!-- МОДАЛЬНОЕ ОКНО С НАСТРОЙКАМИ САЙТА  -->
    <modal-comp @click="$store.commit('SettingsModule/closeSettingsModal')" :show="$store.state.SettingsModule.isModalSettings">
        <!-- Панель Настроек -->
        <settings-comp 
        @close="$store.commit('SettingsModule/closeSettingsModal')" 
        :show="$store.state.SettingsModule.isShowSettings">
        </settings-comp>

    </modal-comp>
    <!-- СЮДА ВСТРАИВАЮТСЯ ВСЕ КОМПОНЕНТЫ И СТРАНИЦЫ  -->
    <main-app-rendering :class="{'dark': darkMode}" class="Basic-view"></main-app-rendering>

    <mini-chat v-show="$store.state.isMiniChat"></mini-chat>
    <mini-chat-button @click="$store.commit('openMiniChat')"></mini-chat-button>
    <!-- КНОПКА СКРОЛЛА ВВЕРХ -->
    <!-- Принимает пропсом булевое значение для отображения (аналог v-show) (Это UI-компонент)-->
    <button-up :listclass="this.$store.state.isButtonUp"></button-up>
    <!-- Футер -->
    <footer-comp></footer-comp>
</template>
<script>
import MainAppRendering from '@/pages/MainAppRendering.vue'
import NavbarComp from '@/components/Navbar/NavbarComp.vue'
import FooterComp from '@/components/Footer/FooterComp.vue'
import MiniChat from '@/components/MiniChat/MiniChat.vue'
import MiniChatButton from '@/components/MiniChat/MiniChatButton.vue'
import SettingsComp from '@/components/SettingsComp/SettingsComp.vue'

import { mapState } from 'vuex';
export default {
    components: {
        MainAppRendering,
        NavbarComp,
        FooterComp,
        MiniChat,
        MiniChatButton,
        SettingsComp,
    },
    data(){
        return{
            isDarkMode: localStorage.getItem('darkMode'),
        }
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
    created(){
    },
    watch: {
        darkMode(newValue){
            // Проверяется есть активирована темная тема или нет
            const app = document.querySelector('#app')
            if(newValue){
                app.style.background = 'rgb(36, 33, 33)'
            }else{
                app.style.background = ''
            }
        }
    },
    mounted(){
        // this.$store.dispatch('AuthModule/action', {text: 'hello'})
        
        // Появление кнопки "Наверх" если произошел большой скролл вниз
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 300){
                this.$store.commit('showButtonUp')
            }
            else{
                this.$store.commit('hideButtonUp')
            }
        });

        // Проверяется активирована темная тема или нет
        const app = document.querySelector('#app')
        if(this.darkMode){
            app.style.background = 'rgb(36, 33, 33)'
        }else{
            app.style.background = ''
        }

        // JSON.parse(localStorage.getItem('darkMode'))
        // Проверяется активирована темная тема или нет
        if(JSON.parse(localStorage.getItem('darkMode'))){
            this.$store.commit('darkModeActive')
        }else{
            localStorage.setItem('darkMode', false)
            this.$store.commit('darkModeDisabled')
        }

        // Проверяется есть ли перменная localStorage с выбором отрисовки товара
        // Если нет то создается. По умолчанию Line
        if(!localStorage.getItem('isSelectModeViewCart')){
            localStorage.getItem('isSelectModeViewCart', 'line')
        }

    }
}
</script>
<style lang="scss">
//                                       ¯\_(ツ)_/¯
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
::-webkit-scrollbar{
        width: 12px;
        height: 12px;
}
::-webkit-scrollbar-track{
    background: rgba(128, 128, 128, 0.2);
    &:hover{
        background: rgba(128, 128, 128, 0.3);
    }
}
::-webkit-scrollbar-thumb{
    border-radius: $radius;
    background: linear-gradient(360deg, #fc3b22, $color-orange-white)
}
#app{
    font-family: Avenir, Helvetica, Arial, sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    min-width: 100%;
    background: linear-gradient(to right, #ffebb1, white);
    // padding: 5px;
}
.Basic-view{
    margin: 5px;
}
</style>
