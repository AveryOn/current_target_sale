import { createStore } from 'vuex'
import { ManagerModule } from './ManagerModule'
import { OwnerModule } from './OwnerModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ManagerModule: ManagerModule,
    OwnerModule: OwnerModule
  },
})
