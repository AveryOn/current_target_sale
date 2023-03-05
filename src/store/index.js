// ГЛАВНОЕ ХРАНИЛИЩЕ
import { createStore } from 'vuex'
import { UserModule } from './UserModule'
import { ManagerModule } from './ManagerModule'
import { OwnerModule } from './OwnerModule'
import { CatalogModule } from './CatalogModule'
import { CartModule } from './CartModule'
import { SettingsModule } from './SettingsModule'
import { AuthModule } from './AuthModule'


export default createStore({
  state: () => ({

    // БЛОК ДАННЫХ ДЛЯ АККАУНТА КЛИЕНТА
    accountWords: {
      noneData: 'Нет',
      noneChange: 'Изменений не было',
      undefinedData: 'Данные не получены'
    }, 
    typeItemChangeData: {
      checkbox: 'checkbox',
      string: 'string',
      radio: 'radio',
    },
    
    isMiniChat: false,
    isButtonUp: false,
    isTagAll: 'Весь товар',
    // Для активации спиннера загрузки
    isLoading: false,

    // Роли доступные для клиента
    roles: ['user', 'manager', 'owner',],
    routes: [],
    routesPath: [],
    
    // Для смены темы день/ночь
    darkMode: false,

    // Массив с товарами
    products: [
        {
        id: 1,
        price: 3600, 
        name: 'куртка',
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
    ],
    
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
    tagsEdit(state, newValue){
      state.tags = newValue
    },

    // Активирует спиннер загрузки
    showLoading(state){
      state.isLoading = true
    },

    // Деактивирует спиннер загрузки
    hideLoading(state){
      state.isLoading = false
    },

    // Активирует темную тему
    darkModeActive(state){
      state.darkMode = true
    },
    // Деактивирует ночную тему
    darkModeDisabled(state){
      state.darkMode = false
    },

    // Изменяет массив роутов
    changeRoutes(state, newValue){
      state.routes = newValue
    },

    // Изменяет массив путей всех маршрутов
    changeRoutesPath(state, newValue){
      state.routesPath = newValue
    }
  },

  getters: {
    // Форматирование строковых значений всех путей приложения
    // В массиве содержатся все строковые значения маршрутов(путей) пример -> ['/', 'auth', 'manager-tools',]
    validationRouterPath(state){
      let output = []
      state.routesPath.forEach(path => {
        if(path !== '/' && path !== ''){
          let parsePath = path.split('/')
          if(parsePath.includes('')){
            parsePath.splice(parsePath.indexOf(''), 1)
          }

          output.push(parsePath[0])
        }
      })
      output.splice(0, 0, '/')
      return output
    },

    // Рекурсия получает строковые значения имен всех маршрутов приложения
    // computedRouterName(state){
    //   let outputPaths = []

    //   function computedPaths(route){
    //     outputPaths.push(route.name)
    //     if(route.children !== undefined){
    //       route.children.forEach(child => {
    //           computedPaths(child)
    //         })
    //     }
    //   }
    //   state.routes.forEach(route => {
    //     computedPaths(route)
    //     })
    //   return outputPaths
    // },

  },

  actions: {
    // Обработка адресной строки. Применяется для валидации адресной строки в случае
    // истечения жизненного цикла токена доступа пользователя или сотрудника
    // Возвращает строку пути которая будет обновлена в URL-адресе. 
    // Если не был передан аргумент(str) то возвращается false 
    handlerPath({state, getters}, str){
      if(str){
        let path
        let outputPath = []
        
        // Проверка. Если по краям или отдельно слева или справа строки есть '/'
        // То выполняется данный блок кода if
        if(
            str[0] === '/' ||
            str[str.length-1] === '/' ||
            str[0] === '/' && str[str.length-1] === '/'
  
        ){

            // Разбивает строку на символы.
            // Далее в зависимости от проверки у первого и последнего индексов
            // Вырезаются слеши ('/')
            path = str.split('')
            if(path[0] === '/'){
              path.splice(0, 1)
            }
            if(path[path.length-1] === '/'){
              path.splice(path.length-1, 1)
            }
            if(path[0] === '/' && path[path.length-1] === '/'){
              path.splice(0, 1)
              path.splice(path.length-1, 1)
            }

            // Массив с разделенными символами входящей строки path соединяется в одну строку
            // Которая не содержит в себе слешей '/' по краям
            path = path.join('')
            path = path.split('/')   // Снова разделяет строку только уже через слеш -> ['user', '/', '123']
            
            // Проверка. Если первый элемент строки есть в массиве state.roles 
            // То начало адресной строки имеет примерный вид ('/user/123/catalog')
            // Поэтому первые два элемента такие как 'user' и '123' удаляются через splice
            if(state.roles.includes(path[0])){
              path.splice(0, 1)
              path.splice(0, 1)
              if(path.length <= 0){
                path = ['']
              }
            // Если введенного в адресную строку пути нет в массиве getters.validationRouterPath
            // То возвращается /404 страница
            }if(!getters.validationRouterPath.includes(path[0]) && path[0] !== ''){
              return '/404'
            }

            // На данном этапе массив path не включает в себя роль клиента и его ID ('user', '123')
            // Вид у path если открыт какой-нибудь путь например '/auth' будет таким ['auth']
            // Поэтому через forEach в массив outputPath добавляется сначала "/" а потом элементы массива path
            path.forEach(e => {
              outputPath.push('/')
              outputPath.push(e)
            });

            // Массив outputPath перезаписывается приводя массив outputPath в строку
            outputPath = outputPath.join('')

            // Дополнительная проверка указывает, если по какой-то причине итоговая строка outputPath в значении ''
            // То изменить значение outputPath на "/" что будет означать базовый маршрут main 
            if(outputPath === ''){
              outputPath = '/'
            }
            // Если по краям входного параметра str нет слешей "/"
            // То выполняется данный блок
          }else{
            path = str.split('/')
            
          // Проверка. Если первый элемент строки есть в массиве state.roles 
          // То начало адресной строки имеет примерный вид ('/user/123/catalog')
          // Поэтому первые два элемента такие как 'user' и '123' удаляются через splice
          if(state.roles.includes(path[0])){
              path.splice(0, 1)
              path.splice(0, 1)
          }

          // Если введенного в адресную строку пути нет в массиве getters.validationRouterPath
          // То возвращается /404 страница
          if(!getters.validationRouterPath.includes(path[0]) && path[0] !== ''){
            return '/404'
          }          

          path.forEach(e => {
              outputPath.push('/')
              outputPath.push(e)
          });

          // Массив outputPath перезаписывается приводя массив outputPath в строку
          outputPath = outputPath.join('')

          if(outputPath === ''){
            outputPath = '/'
          }
        }
        return outputPath

      }else{
        console.log('передайте URL-путь в аргумент');
        return false
      }
    },

    // Рекурсия получает строковые значения путей всех маршрутов приложения
    computedRouterPath({state, commit}){
      let outputPaths = []

      function computedPaths(route){
        outputPaths.push(route.path)
        if(route.children !== undefined){
          route.children.forEach(child => {
              computedPaths(child)
            })
        }
      }
      state.routes.forEach(route => {
        computedPaths(route)
        })
      commit('changeRoutesPath', outputPaths)
      return outputPaths
    },

    // Рекурсия получает строковые значения имен всех маршрутов приложения
    computedRouterName({state, commit}){
        let outputPaths = []
  
        function computedPaths(route){
          outputPaths.push(route.name)
          if(route.children !== undefined){
            route.children.forEach(child => {
                computedPaths(child)
              })
          }
        }
        state.routes.forEach(route => {
          computedPaths(route)
          })
        return outputPaths
    },
    
  },
  modules: {
    UserModule,
    ManagerModule,
    OwnerModule,
    CatalogModule,
    CartModule,
    SettingsModule,
    AuthModule,
  },
})
