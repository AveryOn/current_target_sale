<!-- КОМПОНЕНТ НЕ НЕСЕТ НИКАКОЙ ЛОГИКИ, ОН СЛУЖИТ ТОЛЬКО ДЛЯ ОТРИСОВКИ ВСЕХ КОМОПОНЕНТОВ В ПРИЛОЖЕНИИ APP -->
<!-- (ДЛЯ МАРШРУТИЗАЦИИ) -->
<template>
    <router-view v-slot="{ Component, route }">
        <transition name="fade">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>
<script>
export default {
    created(){
    }
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>