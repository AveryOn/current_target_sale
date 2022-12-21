<!-- Навигационные кнопки для мобильной версии 
    запускаются в @/styles/media/navbar_m.scss когда ширина дисплея менее 850px-->
<template>
<!-- БЛОК КНОПОК -->
<div class="navbar-mobile">
<!-- ЛЕВОСТОРОННИЕ КНОПКИ -->
    <div class="btns__left">

    <!-- Кнопка На главную -->
        <button-comp
        @click="$router.push({name: 'main'})" 
        title="Home"
        class="btn-mobile-nav">
            <i-home></i-home>
        </button-comp>

    <!-- Кнопка Каталог -->
        <button-comp 
        @click="$router.push({name: 'catalog'})" 
        title="Catalog"
        class="btn-mobile-nav">
        <i-catalog></i-catalog>
        </button-comp>

    <!-- кнопка Корзина -->
        <button-comp 
        @click="$router.push({name: 'cart'})" 
        title="Cart"
        class="btn-mobile-nav">
        <i-cart></i-cart>
        </button-comp>

    <!-- Кнопка Настройки -->
        <button-comp 
        @click="$store.commit('SettingsModule/openSettingsModal')" 
        title="Settings"
        class="btn-mobile-nav"> 
        <i-settings></i-settings>
        </button-comp>
    </div>
<!-- ПРАВОСТОРОННИЕ КНОПКИ -->
    <div class="btns__right">

    <!-- Кнопка смены цветовой темы -->
        <button-comp
        class="btn-mobile-nav"
        >
        <i-theme></i-theme>{{ ($store.state.darkTheme)? 'Dark' : 'Light' }}
        </button-comp>

    <!-- Кнопка Войти -->
        <button-comp 
        @click="$router.push({name: 'auth'})" 
        title="Login and Registred" 
        class="btn-mobile-nav"
        >
            <i-login></i-login>
        </button-comp>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.navbar-mobile{
    position: absolute;
    top: 15vh;
    width: 100%;
    display: none;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 20px;
    box-shadow: $shadow;
    }
// НавБар Лев.кнопки и Прав.кнопки
    .btns__left{
        display: flex;
    }
    .btns__right{
        display: flex;
    }
// @include btn-mobile-icon;
</style>






