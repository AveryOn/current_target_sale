<!-- ГЛАВНЫЙ СОМПОНЕНТ DOM-ДЕРЕВА-->
<template>
    <!-- НАВИГАЦИОННАЯ ПАНЕЛЬ (НАВБАР) -->
    <!-- ИСПОЛЬЗУЕТСЯ МОНТИРОВАНИЕ КНОПОК В НАВБАР ЧЕРЕЗ ИМЕНОВАННЫЕ СЛОТЫ
    ДЛЯ ЛЕВОСТОРОННИХ КНОПОК ИСПОЛЬЗУЙ АТРИБУТ  v-slot:btnsLeft  ДЛЯ ПРАВОСТОРОННИХ  v-slot:btnsRight -->
    <navbar-comp id="top-app">
        <!-- Левосторонние кнопки -->
        <template v-slot:btnsLeft>
            <div class="btn-left">
                <!-- Кнопка На главную -->
                <button-comp @click="$router.push({name: 'main'})" title="Home" class="btn-navigate">Home</button-comp>
                <!-- Кнопка Каталог -->
                <button-comp @click="$router.push({name: 'catalog'})" title="Catalog" class="btn-navigate">Catalog</button-comp>
                <!-- кнопка Корзина -->
                <button-comp @click="$router.push({name: 'cart'})" title="Cart" class="btn-i">Cart</button-comp>
                <!-- Кнопка Настройки -->
                <button-comp @click="$store.commit('SettingsModule/openSettingsModal')" title="Settings" class="btn-navigate">Settings</button-comp>
            </div>
        </template>
        <!-- Правосторонние кнопки -->
        <template v-slot:btnsRight>
            <div class="btns-right">
                <!-- Кнопка смены цветовой темы -->
                <button-comp>Theme: {{ ($store.state.darkTheme)? 'Dark' : 'Light' }}</button-comp>
                <!-- Кнопка Войти -->
                <button-comp @click="$router.push({name: 'auth'})" title="Login and Registred" class="btn-i">Login -></button-comp>
            </div>
        </template>
    </navbar-comp>

    <!-- МОДАЛЬНОЕ ОКНО С НАСТРОЙКАМИ САЙТА  -->
    <modal-comp @click="$store.commit('SettingsModule/closeSettingsModal')" :show="$store.state.SettingsModule.isModalSettings">
        <!-- Панель Настроек -->
        <settings-comp 
        @close="$store.commit('SettingsModule/closeSettingsModal')" 
        :show="$store.state.SettingsModule.isShowSettings">
        </settings-comp>
    </modal-comp>
    <!-- СЮДА ВСТРАИВАЮТСЯ ВСЕ КОМПОНЕНТЫ И СТРАНИЦЫ  -->
    <router-view class="Basic-view"></router-view>
    <mini-chat v-show="$store.state.isMiniChat"></mini-chat>
    <mini-chat-button @click="$store.commit('openMiniChat')"></mini-chat-button>
    <!-- КНОПКА СКРОЛЛА ВВЕРХ -->
    <!-- Принимает пропсом булевое значение для отображения (аналог v-show) -->
    <button-up :listclass="$store.state.isButtonUp">up</button-up>
    <!-- Футер -->
    <footer-comp></footer-comp>
</template>
<script>
import NavbarComp from '@/components/Navbar/NavbarComp.vue'
import FooterComp from '@/components/Footer/FooterComp.vue'
import MiniChat from '@/components/MiniChat/MiniChat.vue'
import MiniChatButton from '@/components/MiniChat/MiniChatButton.vue'
import SettingsComp from '@/components/SettingsComp/SettingsComp.vue'
export default {
    components: {
        NavbarComp,
        FooterComp,
        MiniChat,
        MiniChatButton,
        SettingsComp,
    },
    data(){
        return{
        }
    },
    methods:{
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
#app{
    min-height: 100vh;
    min-width: 100%;
    background: linear-gradient(to right, #ffebb1, white);
    // padding: 5px;
}
.Basic-view{
    margin: 5px;
}
// НавБар Лев.кнопки и Прав.кнопки
.btn-left{
    display: flex;
}
.btn-right{
    display: flex;
}
</style>
