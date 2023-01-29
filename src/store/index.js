// ГЛАВНОЕ ХРАНИЛИЩЕ
import { createStore } from 'vuex'
import { ManagerModule } from './ManagerModule'
import { OwnerModule } from './OwnerModule'
import { CatalogModule } from './CatalogModule'
import { CartModule } from './CartModule'
import { SettingsModule } from './SettingsModule'
import { AuthModule } from './AuthModule'


export default createStore({
  state: () => ({
    isAuth: {isAuth: false, prefix: null, id: null},
    isMiniChat: false,
    isButtonUp: false,
    isTagAll: 'Весь товар',

    // Массив с товарами
    products: [
        {
        id: 1,
        price: 3600, 
        name: 'курткафывфывфыввфывфвфвфывфывфывфвфывфвфыфвфывфыкурткафывфывфыввфывфвфвфывфывфывфвфывфвфыфвфывфыкурткафывфывфыввфывфвфвфывфывфывфвфывфвфыфвфывфы',
        specifications: {colors: ['черный'], material: ["синтетика", "шерсть"],},
        category: {name: 'куртки'}, 
        group: {name: 'лето'},
        tags: ['куртки', 'верхняя одежда'],
        description: 'Это нахуй куртка',
        article: 928219,
        comments: [
          {ownerId: 123123, username: '@username_432', comment: 'this is commeasdnt all right!!!'},
          {ownerId: 123352, username: '@username_642', comment: 'this is casomment all rightasda!!!'},
          {ownerId: 121231, username: '@username_152', comment: 'this is commasdent all right!!!'},
          {ownerId: 123145, username: '@username_734', comment: 'this is commeasdnt all rigasdaht!!!'},
        ]
      },
      {
        id: 2,
        price: 550, 
        name: 'шапка',
        specifications: {colors: ['серый'], material: ["шерсть"],}, 
        category: {name: 'головные уборы'}, 
        group: {name: 'зима'}, 
        tags: ['шапки', 'головные уборы'],
        description: 'Это нахуй шапка',
        article: 9989891,
        comments: [
          {ownerId: 123123, username: '@username_432', comment: 'this is commeasdnt all right!!!'},
          {ownerId: 123352, username: '@username_642', comment: 'крутая шапка ебать понравилась! this is casomment all rightasda!!!'},
          {ownerId: 121231, username: '@username_152', comment: 'this is commasdent all right!!!'},
          {ownerId: 123145, username: '@username_734', comment: 'this is commeasdnt all rigasdaht!!!'},
        ]
      },
      {
        id: 3,
        price: 900, 
        name: 'футболка',
        specifications: {colors: ['белый'], material: ["полиэстер"],}, 
        category: {name: 'повседневное'}, 
        group: {name: 'лето'}, 
        tags: ['футболки', 'верхняя одежда', 'повседневное'],
        description: 'Это нахуй футболка',
        article: 727281,
        comments: [
          {ownerId: 123123, username: '@username_432', comment: 'this is commeasdnt all right!!!'},
          {ownerId: 123352, username: '@username_642', comment: 'this is casomment all rightasda!!!'},
          {ownerId: 121231, username: '@username_152', comment: 'this is commasdent all right!!!'},
          {ownerId: 123145, username: '@username_734', comment: 'this is commeasdnt all rigasdaht!!!'},
        ]
      },
      {
        id: 4,
        price: 350, 
        name: 'кепка',
        specifications: {colors: ['красный'], material: ["полиэстер", "ткань"]}, 
        category: {name: 'головные уборы'}, 
        group: {name: 'лето'}, 
        tags: ['кепки', 'верхняя одежда', 'головные уборы'],
        description: 'Это нахуй кепка',
        article: 200291,
        comments: [
          {ownerId: 123123, username: '@username_432', comment: 'this is commeasdnt all right!!!'},
          {ownerId: 123352, username: '@username_642', comment: 'this is casomment all rightasda!!!'},
          {ownerId: 121231, username: '@username_152', comment: 'this is commasdent all right!!!'},
          {ownerId: 123145, username: '@username_734', comment: 'this is commeasdnt all rigasdaht!!!'},
        ]
      },
      {
        id: 5,
        price: 2300, 
        name: 'сапоги зимние',
        specifications: {colors: ['черный'], material: ["резина", "кожа"],}, 
        category: {name: 'обувь'}, 
        group: {name: 'зима'}, 
        tags: ['обувь', 'путешествия'],
        description: 'Это нахуй сапоги зимние',
        article: 1231231,
        comments: [
          {ownerId: 123123, username: '@username_432', comment: 'this is commeasdnt all right!!!'},
          {ownerId: 123352, username: '@username_642', comment: 'this is casomment all rightasda!!!'},
          {ownerId: 121231, username: '@username_152', comment: 'this is commasdent all right!!!'},
          {ownerId: 123145, username: '@username_734', comment: 'this is commeasdnt all rigasdaht!!!'},
        ]
      },
    ],
    // Группы товара
    groups: [
        {name: 'зима'},
        {name: 'лето'},
    ] ,
    // Категории товара
    categories: [
        {name: 'обувь', parentGroup: 'зима'},
        {name: 'головные уборы', parentGroup: 'зима'},
        {name: 'повседневное', parentGroup: 'зима'},
        {name: 'куртки', parentGroup: 'зима'}, 
    ],
    // Сюда записываются теги товаров которые отфильтрованы на данный момент
    // Если не была применена никакая фильтрация то записывается тег "Все товары" 
    tags: [],
    tagsAddit: [],
    // Обьект который передается вычисляемому свойству 
    // Используется для фильтрации товара в комп. components.CatalogPage.SortedCatalog
    filterData: {
        searchProduct: '',
        tags: [], 
        price: {from: 0, to: 0},
        colors: [],
        materials: [],
    },
    addedProducts: JSON.parse(localStorage.getItem('addedProducts')),
  }),

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
    tagsEdit(state, tagsEdit){
      state.tags = tagsEdit
    }
  },

  getters: {
  },
  actions: {
  },
  modules: {
    ManagerModule: ManagerModule,
    OwnerModule: OwnerModule,
    CatalogModule: CatalogModule,
    CartModule: CartModule,
    SettingsModule: SettingsModule,
    AuthModule: AuthModule,
  },
})
