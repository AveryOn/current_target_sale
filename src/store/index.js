// ГЛАВНОЕ ХРАНИЛИЩЕ
import { createStore } from 'vuex'
import { ManagerModule } from './ManagerModule'
import { OwnerModule } from './OwnerModule'
import { CatalogModule } from './CatalogModule'
import { CartModule } from './CartModule'
import { SettingsModule } from './SettingsModule'
import { AuthModule } from './AuthModule'

export default createStore({
  state: {
    isAuth: {prefix: 'manger'},
    isMiniChat: false,
    isButtonUp: false,

    // Массив с товарами
    products: [
        {
        id: 1,
        price: 3600, 
        name: 'куртка',
        specifications: {color: 'черный', material: ["синтетика", "шерсть"],},
        category: {name: 'куртки'}, 
        group: {name: 'зима'},
        tags: ['куртки', 'верхняя одежда']
      },
      {
        id: 2,
        price: 550, 
        name: 'шапка',
        specifications: {color: 'серый', material: ["шерсть"],}, 
        category: {name: 'головные уборы'}, 
        group: {name: 'зима'}, 
        tags: ['шапки', 'головные уборы']
      },
      {
        id: 3,
        price: 900, 
        name: 'футболка',
        specifications: {color: 'белый', material: ["полиэстер"],}, 
        category: {name: 'повседневное'}, 
        group: {name: 'лето'}, 
        tags: ['футболки', 'верхняя одежда', 'повседневное']
      },
      {
        id: 4,
        price: 350, 
        name: 'кепка',
        specifications: {color: 'красный', material: ["полиэстер", "ткань"]}, 
        category: {name: 'головные уборы'}, 
        group: {name: 'лето'}, 
        tags: ['кепки', 'верхняя одежда', 'головные уборы']
      },
      {
        id: 5,
        price: 2300, 
        name: 'сапоги зимние',
        specifications: {color: 'черный', material: ["каучук", "кожа"],}, 
        category: {name: 'обувь'}, 
        group: {name: 'зима'}, 
        tags: ['обувь', 'путешествия']
      },
    ],
    // Группы товара
    groups: [
        {name: 'зима'},
        {name: 'лето'},
    ] ,
    // Категории товара
    categories: [
        {name: 'обувь'},
        {name: 'головные уборы'},
        {name: 'повседневное'},
        {name: 'куртки'}, 
    ],
    // Сюда записываются теги товаров которые отфильтрованы на данный момент
    // Если не была применена никакая фильтрация то записывается тег "Все товары" 
    tags: [],
    
    // Обьект который передается вычисляемому свойству 
    // Используется для фильтрации товара в комп. components.CatalogPage.SortedCatalog
    filterData: {
        searchProduct: '',
        tags: [], 
        price: {from: 0, to: 0},
        colors: [],
        materials: [],
    },
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
