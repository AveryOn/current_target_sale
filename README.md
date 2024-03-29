# current_target_sale

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### =====> Current Target Sale <=====

version: 0.1.0

Интернет магазин рассчитан на одного поставщика (Компанию)

### 1. Используемые технологии: 

    Фронтенд:

    1) Vue.js(v. 3) - веб-фреймворк для разработки фронтенд приложений и сайтов
    2) JavaScript - функционал фронтенд части
    3) CSS/SCSS - оформление/стили
    4) HTML - разметка
    5) AXIOS - библиотека для связи клиент-серверной части
    6) gsap - библиотека анимаций DOM-элементов

    Бэкенд:

    1) Python - функционал бэкенд части
    2) FastAPI - современный и быстрый бэкенд-фреймворк
    3) OAuth2 - стандарт безопасности, основанный на токенах
    4) SqlAlchemy - система ORM для управления СУБД
    5) SQLite3 - база данных
    6) uvicorn - реализация веб-сервера ASGI для Python.

### 2. Страницы навигации:

    Роутер:
    
    1) MainAppRendering - главный контейнер. Содержит в себе роуты всего приложения
        Встраивается между Навбаром и Футером
        служит только для отрисовки остальных компонентов
    
    Дочерние маршруты:

    2) main - стартовая страница
    3) auth - страница авторизации и регистрации
    4) manager - страница модератора магазина
    5) manager-chat - чат доступный модератору магазина
    6) owner - старница владельца магазина
    7) owner-chat - чат доступный владельцу магазина
    8) product - страница товара
    9) cart - корзина
    19) catalog - каталог товаров, содержит в себе два дочерних маршрута:
        category - компонент отрисовывающий группы товара (самые крупные группировки товара, относящиеся к временам года)
        sorted - компонент, отрисовывающий сортировку товара по тегам категориям и группам товаров
                этот компонент также содержит в себе фильтр-панель позволяющая фильтровать товар:
                1) по тегам,
                2) по цене,
                3) по цвету,
                4) по материалу изготовления
    20) 404 - NotFound



