<!-- ГЛАВНЫЙ СОМПОНЕНТ DOM-ДЕРЕВА-->
<template>
    <!-- НАВИГАЦИОННАЯ ПАНЕЛЬ (НАВБАР) -->
    <navbar-comp></navbar-comp>
    <!-- СЮДА ВСТРАИВАЮТСЯ ВСЕ КОМПОНЕНТЫ И СТРАНИЦЫ  -->
    <router-view class="Basic-view"></router-view>
    <mini-chat v-show="$store.state.isMiniChat"></mini-chat>
    <mini-chat-button @click="$store.commit('openMiniChat')"></mini-chat-button>
    <!-- Футер -->
    <footer-comp></footer-comp>
</template>
<script>
import NavbarComp from '@/components/Navbar/NavbarComp.vue'
import FooterComp from '@/components/Footer/FooterComp.vue'
import MiniChat from '@/components/MiniChat/MiniChat.vue'
import MiniChatButton from '@/components/MiniChat/MiniChatButton.vue'
export default {
    components: {
        NavbarComp,
        FooterComp,
        MiniChat,
        MiniChatButton,
    },
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
</style>
