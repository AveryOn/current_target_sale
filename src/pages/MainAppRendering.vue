<!-- КОМПОНЕНТ НЕ НЕСЕТ НИКАКОЙ ЛОГИКИ, ОН СЛУЖИТ ТОЛЬКО ДЛЯ ОТРИСОВКИ ВСЕХ КОМОПОНЕНТОВ В ПРИЛОЖЕНИИ APP -->
<!-- (ДЛЯ МАРШРУТИЗАЦИИ) -->
<template>
  <div class="main-app-rendering">

    <!-- Спиннер загрузки -->
    <div v-show="$store.state.isLoading" class="app-loading">
      <loadingSpin></loadingSpin>
    </div>

    <router-view v-slot="{ Component, route }">
        <transition name="fade">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
  </div>
</template>
<script>
import loadingSpin from '@/components/UI/loadingSpin.vue'
export default {
  components: {
    loadingSpin,
  },

}
</script>
<style lang="scss" scoped>
.main-app-rendering{
  position: relative;
  min-height: 80vh;
  z-index: 0;
  .app-loading{
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #817b7b5f;
    border-radius: $radius;
    z-index: 99999999;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>