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
    <main-app-rendering class="Basic-view"></main-app-rendering>

    <mini-chat v-show="$store.state.isMiniChat"></mini-chat>
    <mini-chat-button @click="$store.commit('openMiniChat')"></mini-chat-button>
    <!-- КНОПКА СКРОЛЛА ВВЕРХ -->
    <!-- Принимает пропсом булевое значение для отображения (аналог v-show) -->
    <button-up :listclass="$store.state.isButtonUp">up</button-up>
    <!-- Футер -->
    <!-- <footer-comp></footer-comp> -->
</template>
<script>
import MainAppRendering from '@/pages/MainAppRendering.vue'
import NavbarComp from '@/components/Navbar/NavbarComp.vue'
import FooterComp from '@/components/Footer/FooterComp.vue'
import MiniChat from '@/components/MiniChat/MiniChat.vue'
import MiniChatButton from '@/components/MiniChat/MiniChatButton.vue'
import SettingsComp from '@/components/SettingsComp/SettingsComp.vue'
export default {
    components: {
        MainAppRendering,
        NavbarComp,
        FooterComp,
        MiniChat,
        MiniChatButton,
        SettingsComp,
    },
    created(){
    },
    mounted(){

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 300){
                this.$store.commit('showButtonUp')
            }
            else{
                this.$store.commit('hideButtonUp')
            }
        });

    }
}
</script>
<style lang="scss">
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
