// ГЛАВНОЕ ХРАНИЛИЩЕ
import { createStore } from 'vuex'
import { ManagerModule } from './ManagerModule'
import { OwnerModule } from './OwnerModule'
import { CatalogModule } from './CatalogModule'

export default createStore({
  state: {
    isAuth: {prefix: 'manager'},
    isMiniChat: false,
  },
  getters: {
  },
  mutations: {
    openMiniChat(state){
      state.isMiniChat = true
    },
    closeMiniChat(state){
      state.isMiniChat = false
    }
  },
  actions: {
  },
  modules: {
    ManagerModule: ManagerModule,
    OwnerModule: OwnerModule,
    CatalogModule: CatalogModule,
  },
})
