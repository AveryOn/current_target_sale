// ГЛАВНОЕ ХРАНИЛИЩЕ
import { createStore } from 'vuex'
import { ManagerModule } from './ManagerModule'
import { OwnerModule } from './OwnerModule'
import { CatalogModule } from './CatalogModule'
import { CartModule } from './CartModule'

export default createStore({
  state: {
    isAuth: {prefix: 'manager'},
    isMiniChat: false,
    isButtonUp: false,
  },
  getters: {
  },
  mutations: {
    openMiniChat(state){
      state.isMiniChat = true
    },
    closeMiniChat(state){
      state.isMiniChat = false
    },
    showButtonUp(state){
      state.isButtonUp = true
    },
    hideButtonUp(state){
      state.isButtonUp = false
    },
  },
  actions: {
  },
  modules: {
    ManagerModule: ManagerModule,
    OwnerModule: OwnerModule,
    CatalogModule: CatalogModule,
    CartModule: CartModule,
  },
})
