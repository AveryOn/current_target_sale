import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/UI';
import directivies from './directivies'
import './styles/normalize.scss'

import moment from 'moment'

// Установка ru. локали для работы с датами и временем
moment.locale('ru')

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directivies.forEach(directive => {
    app.directive(directive.name, directive)
})
app
    .use(store)
    .use(router)
    .mount('#app')
