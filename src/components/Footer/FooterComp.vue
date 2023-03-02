<template>
    <div class="footer">
        <nav class="footer__navigation">
            <router-link class="navigation__link" :to="{name: 'auth_manager'}">Сотрудникам...</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.footer{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 25vh;
    background: $background-gr;
    margin-top: 50px;
    z-index: 0;
    border: {
        top-left-radius: $radius;
        top-right-radius: $radius;
    }
    .footer__navigation{
        position: absolute;
        bottom: 10px;
        border: 1px solid black;
        width: max-content;
        min-width: 40px;
        height: max-content;
        padding: 10px;
    }
    .navigation__link{
        font-weight: bolder;
        color: rgb(255, 205, 138);
    }
}
</style>