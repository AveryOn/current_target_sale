<!-- КОРИЗИНА С ТОВАРОМ 
    ФУНКЦИОНАЛ ДОСТУПЕН ПО РЕГИСТРАЦИИ ПОЛЬЗОВАТЕЛЯ -->
<template>
    <div class="cart-page">
        <div class="header-cart-page">
            <h1 class="title-text">Cart</h1>
        </div>
        <div class="cart-body">
            <!-- ШАПКА -->
            <div class="body-top">
                <h1 class="body-top-text">{{ (auth && auth.isAuth)? 'Ваши добавленные товары' : 'Корзина для выбранного товара' }}</h1>
                <input-comp placeholder="Search..." class="search-cart-products"></input-comp>
            </div>
            <div class="body-content">
                <!-- ФИЛЬТЕР ПАНЕЛЬ -->
                <filter-panel class="filter-panel"></filter-panel>
                <div class="cart-products-layout">
                    
                    <!-- Компонент отрисовывается если пользователь не авторизован
                        Перекрывает корзины предлагая авторизоваться или зарегестрироватся
                    -->
                    <div 
                    class="cart-products-layout__not-auth" 
                    :class="{'dark': darkMode}"
                    :style="(!darkMode)? {backgroundColor: 'white'} : {backgroundColor: ''}"
                    v-show="!auth || !auth.isAuth"
                    >
                        <div class="not-auth__body">

                            <h2 class="not-auth__body-text">Авторизуйтесь или зарегестрируйтесь для того, чтобы добавлять товары в корзину</h2>
                        
                            <p class="not-auth__body-action--description">
                                Если вы не авторизованы в системе, вы не сможете совершать некоторые операции, 
                                в том числе и добавление товара в корзину.
                                Вы можете авторизоваться или зарегестрироватся, если впервые в нашем магазине.
                                Так у вас будет больше привелегий!
                            </p>
                            <div class="not-auth__body-action--btns">
                                <button-comp @click="this.$router.push({name: 'auth'})">Авторизация <i-login></i-login></button-comp>
                                <button-comp @click="this.$router.push({name: 'main'})"><i-home></i-home> На главную </button-comp>
                            </div>
                        </div>
                    </div>

                    <!-- Слой перекрывает компоненты корзины если активно окно подтверждения очищения корзины -->
                    <div 
                    class="cart-products-layout__disabled"
                    v-show="isShowConfirmDelete || isShowSelectConfirmDelete"
                    >
                        <!-- Окно подтверждения удаления выбранного товара -->
                        <notification-confirm 
                        class="confirm--cart__delete-select"
                        :show="isShowSelectConfirmDelete" 
                        @eventNo="isShowSelectConfirmDelete = false"
                        @eventYes="deleteAllSelectProducts"
                        >
                            Вы действительно хотите удалить выбранный товар?
    
                        </notification-confirm>

                        <!-- Блок для подтверждения удаления всех товаров с корзины -->
                        <!-- Отрисовывается когда открыто нажата кнопка "Очистить корзину" -->
                        <form type="submit">
                            <notification-confirm 
                            class="confirm--cart"
                            :show="isShowConfirmDelete" 
                            @eventNo="isShowConfirmDelete = false"
                            @eventYes="cartClear"
                            
                            >
                                Вы действительно хотите очистить корзину?
        
                            </notification-confirm>
                        </form>


                    </div>

                    <!-- ПАНЕЛЬ НАСТРОЙКИ ВНЕШНЕГО ВИДА ОТОБРАЖЕНИЯ ТОВАРА В КОРЗИНЕ -->
                    <modal-comp @click="isViewToCart = false" :show="isViewToCart">
                        <cart-setting-view></cart-setting-view>
                    </modal-comp>

                    <div class="products-optional-header">

                        <!-- НАВБАР ДЛЯ УПРАВЛЕНИЯ КОРЗИНОЙ -->
                        <div class="optional-btns">

                            <!-- Кнопка очищает корзину полностью -->
                            <button-comp 
                            v-show="cartProducts.length > 0" 
                            class="btn-optional"
                            @click="isShowConfirmDelete = true"
                            :disabled="isShowConfirmDelete"
                            >
                                Очистить корзину
                            </button-comp>

                            <!-- Кнопка позволяет удалить несколько товаров на выбор -->
                            <button-comp 
                            v-show="cartProducts.length > 1" 
                            class="btn-optional"
                            id="deleteModeCart"
                            @click="deleteSelectProduct"
                            :disabled="isShowConfirmDelete"
                            >
                                {{ (deleteModeCart)? 'Отменить удаление' : 'Удалить несколько' }}
                            </button-comp>

                            <button-comp
                            class="btn-optional"
                            :disabled="isShowConfirmDelete"
                            @click="(auth && auth.isAuth)? isViewToCart = true : false"
                            >
                                Вид
                            </button-comp>
                            
                            <button-comp 
                            class="btn-optional" 
                            :disabled="isShowConfirmDelete"
                            @click="(auth && auth.isAuth)? isShowRestoreCart = true: false"
                            >
                                Недавно удаленный товар
                            </button-comp>

                            <!-- ОКНО НЕДАВНО УДАЛЕННОГО ТОВАРА! -->
                            <modal-comp @click="isShowRestoreCart = false" :show="isShowRestoreCart">
                                <div class="cart-restore-block">

                                    <!-- Окно подтверждения восстановления всего товара из удаленных -->
                                    <div v-show="isRemoveAllProducts" class="cart-restore-block__gray-layout">
                                        <notification-confirm 
                                        class="cart-restore-block__confirm-remove-all"
                                        :show="isRemoveAllProducts" 
                                        @eventNo="isRemoveAllProducts = false"
                                        @eventYes="removeAllProductsCart"
                                        >
                                            Вы действительно хотите восстановить весь удаленный товар?
                    
                                        </notification-confirm>
                                    </div>

                                    <!-- ШАПКА -->
                                    <div class="cart-restore-block__header">
                                        <h2>Недавно удаленные товары</h2>
                                        <div class="__header__btns">
                                            <button-comp v-show="cartDeleteProducts.length > 0" @click="isRemoveAllProducts = true">Восстановить всё</button-comp>
                                            <button-comp @click="isShowRestoreCart = false">Закрыть</button-comp>
                                        </div>
                                    </div>

                                    <!-- БЛОК-ОПИСАНИЕ КОМПОНЕНТА -->
                                    <!-- Появляется если длина массива this.cartDeleteProducts равна нулю -->
                                    <h2 v-show="cartDeleteProducts.length <= 0" class="cart-restore-block__empty">
                                        Здесь будут отображаться удаленные с корзины товары! 
                                    </h2>

                                    <!-- ОСНОВАНАЯ ЧАСТЬ -->
                                    <div class="cart-restore-block__body" v-show="cartDeleteProducts.length > 0">
                                        <div class="__body__list-products">
                                            <cart-product-item-delete
                                            v-for="cartProduct in cartDeleteProducts"
                                            :cartProduct="cartProduct"
                                            @removeProductCart="removeProductCart(cartProduct)"
                                            ></cart-product-item-delete>
                                        </div>
                                    </div>

                                </div>
                            </modal-comp>

                        </div>
                    </div>

                    <!-- ПАНЕЛЬ С КНОПКАМИ. РЕЖИМ ВЫБОРОЧНОГО УДАЛЕНИЯ ТОВАРОВ С КОРЗИНЫ -->
                    <!-- Отрисовывается когда включен режим deleteModeCart -->
                    <div class="delete-mode-cart--btns">
                        <!-- Кнопка "ВЫБРАТЬ ВСЁ" -->
                        <button-comp 
                        class="select-all-cart-item"
                        v-show="deleteModeCart && !this.selectCartProduct"
                        @click="selectAllCartItem"
                        >
                            Выбрать всё
                        </button-comp>

                        <!-- Кнопка "СНЯТЬ ВЫДЕЛЕНИЕ" -->
                        <button-comp
                        v-show="(deleteModeCart && selectCartProduct) || forDeleteProducts.length >= 1"
                        @click="this.$store.commit('CartModule/changeRemoveCartProduct')"
                        >
                            Снять выделение
                        </button-comp>

                        <!-- Кнопка "УДАЛИТЬ ВЫБРАННОЕ" -->
                        <button-comp
                        v-show="deleteModeCart && this.forDeleteProducts.length > 0"
                        @click="isShowSelectConfirmDelete = true"
                        >
                            Удалить выбранное
                        </button-comp>

                        <!-- TESTING -->
                        <button-comp
                        v-show="deleteModeCart"
                        @click="log"
                        >   
                            _log
                        </button-comp>
                    
                        <p 
                        v-show="deleteModeCart"
                        class="select-quantity">
                            Выбрано:   <strong>{{ this.forDeleteProducts.length }}</strong>
                        </p>
                    </div>

                    <!-- Заголовок показывается когда корзина пуста -->
                    <h2 v-show="cartProducts.length <= 0" class="empty-cart-products">В вашей ебучей корзине нема товара, добавьте что-нибудь...</h2>
                    
                    <!-- Блок "Добавьте превые товары в корзину" -->
                    <!-- Открывает каталог товаров -->
                    <div v-show="cartProducts.length <= 0" class="block-open-catalog">
                        <h3 class="block-open-catalog--title">Добавьте свой первый товар!</h3>
                        <div class="block-open-catalog--btns">
                            <button-comp 
                            class="open-catalog__btn"
                            @click="(auth && auth.isAuth)? openCatalog : false"
                            >
                                Открыть каталог
                            </button-comp>
                            <button-comp 
                            class="open-catalog__btn"
                            @click="(auth && auth.isAuth)? goHome : false"
                            >
                                Вернуться на главную
                            </button-comp>
                        </div>
                    </div>

                    <!-- ОТРИСОВКА ТОВАРОВ В КОРЗИНЕ СПИСКОМ -->
                    <!-- Стандартный стиль отрисовки товаров тип: line  (this.isSelectModeViewCart = 'line') -->
                    <div v-show="cartProducts.length > 0" class="cart-products-items">
                        <cart-product-item
                        v-for="cartProduct in cartProducts"
                        :key="cartProduct.id"
                        :cartProduct="cartProduct"
                        v-show="isSelectModeViewCart === 'line'"
                        @deleteProductCart="deleteProductCart(cartProduct)"
                        @selectCartProductOne="selectCartProductOne"
                        >
                        </cart-product-item>

                    </div>

                    <!-- ОТРИСОВКА ТОВАРОВ В КОРЗИНЕ БЛОКАМИ -->
                    <!-- БЛОЧНАЯ отрисовка. стиль отрисовки товаров тип: block  (this.isSelectModeViewCart = 'block') -->
                    <div v-show="cartProducts.length > 0" class="cart-products-items-view-block">
                        <cart-product-item-view-block
                        v-for="cartProduct in cartProducts"
                        :key="cartProduct.id"
                        :cartProduct="cartProduct"
                        v-show="isSelectModeViewCart === 'block'"
                        @deleteProductCart="deleteProductCart(cartProduct)"
                        @selectCartProductOne="selectCartProductOne"
                        >
                        </cart-product-item-view-block>
                    </div>

                    <!-- БЛОК СКРЫВАЮЩИЙ ЧАСТЬ СПИСКА КОРЗИНЫ -->
                    <div v-show="!openListCart && cartProducts.length >= 3" class="open-content-block">
                        <p @click="openListCartProduct">
                            <strong>
                                Посмотреть все товары
                            </strong>
                        </p>
                    </div>
                    <!-- БЛОК С КНОПКОЙ "Скрыть товары" -->
                    <div v-show="openListCart && cartProducts.length >= 3" class="hidden-content-block">
                        <p @click="hiddenListCartProduct">
                            <strong>
                                Скрыть товары
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// Фильтр-панель
import FilterPanel from '@/components/CatalogPage/FilterPanel.vue'

// Компонент используется для стандартной отрисовки товара в корзине
import cartProductItem from '@/components/CartPage/cartProductItem.vue'

// Компонент используется в окне недавно удаленного твоара корзины
import cartProductItemDelete from  '@/components/CartPage/cartProductItemDelete.vue'

// Компонент товара корзины, используется при стиле оформления корзины типа "block" (this.isSelectModeViewCart = 'block')
import cartProductItemViewBlock from '@/components/CartPage/cartProductItemViewBlock.vue'

import cartSettingView from '@/components/CartPage/cartSettingView.vue'

// Импорт хранилища store vuex
import { mapState, mapMutations } from 'vuex';
export default {
    components: {
        FilterPanel,
        cartProductItem,
        cartProductItemDelete,
        cartProductItemViewBlock,
        cartSettingView,
    },
    data(){ 
        return{

            // оле получает с localStorage данные переменной isAuth
            auth: JSON.parse(localStorage.getItem('isAuth')),

            // Поле получает с localStorage данные массива с товаром для корзины
            addedProducts: JSON.parse(localStorage.getItem('addedProducts')),

            // Поле получает с localStorage массив недавно удаленного товара
            deleteProducts: JSON.parse(localStorage.getItem('deleteProducts')),

            // Поле получает с localStorage булевую перменную показывающая развернута или свернута корзина
            openListCart: JSON.parse(localStorage.getItem('openListCartProduct')),

            // // Поле используется для определения стиля оформления отрисовки товара в корзине (line ||  block)
            // isSelectModeViewCart: localStorage.getItem('isSelectModeViewCart'),

            // Поле используется для отображения уведомления об подтверждении удаления ВСЕГО товара
            isShowConfirmDelete: false,

            // Поле используется для отображения уведомления об подтверждении удаления ВЫБРАННОГО товара
            isShowSelectConfirmDelete: false,

            // Отображение окна настроек. Смена вида карточек товара. Список <=> Иконки
            isViewToCart: false,

            // true Если нажата кнопка "Выбрать всё", при режиме удаления
            isSelectAll: false,

            // Открытие блока с недавно удаленным товаром
            isShowRestoreCart: false,

            // Поле используется для отображения подтверждения восстановления ВСЕГО УДАЛЕННОГО товара
            isRemoveAllProducts: false,
            
            // Массив в который записываются товары выбранные для выборочного удаления
            forDeleteProducts: [],
        }
    },
    methods: {
        log(){
            console.log('forDeleteProducts: ', this.forDeleteProducts);
        },
        ...mapMutations({
            activateDeleteModeCart: 'CartModule/activateDeleteModeCart',
        }),

        // Метод удаляет товар с корзины товаров
        deleteProductCart(cartProduct){
            const cartStorage = this.addedProducts.filter(product => product.id !== cartProduct.id)
            localStorage.setItem('addedProducts', JSON.stringify(cartStorage))

            // Запись в массив удаленных товаров в localeStorage
            this.appendDeleteCartProducts(cartProduct)
        },

        // Метод открывает модальное окно в котором можно изменить
        // changeViewToCart

        // Метод добавляет товар в список недавно удаленного товара
        // Вызывается в методе this.deleteProductCart
        appendDeleteCartProducts(cartProduct){
            let newListDeleteCart = JSON.parse(localStorage.getItem('deleteProducts'))
            const cartItemForDeleteList = {id: cartProduct.id, name: cartProduct.name, article: cartProduct.article}
            if(newListDeleteCart){
                if(newListDeleteCart.length > 0){
                    for(const product of newListDeleteCart){
                        if(!JSON.stringify(newListDeleteCart).includes(JSON.stringify(cartItemForDeleteList))){
                            newListDeleteCart.push(cartItemForDeleteList)
                            localStorage.setItem('deleteProducts', JSON.stringify(newListDeleteCart))
                        }
                        else{
                            continue
                        }
                    }
                }else{
                    newListDeleteCart.push(cartItemForDeleteList)
                    localStorage.setItem('deleteProducts', JSON.stringify(newListDeleteCart))
                }
            }else{
                localStorage.setItem('deleteProducts', JSON.stringify([cartItemForDeleteList]))
            }
        },
        
        // Метод принимает аргумент cartProduct вида: {id: Number, name: String, article: Number}
        // И добавляет cartProduct в localStorage в переменную addedProducts
        addProductAfterDelete(cartProduct){
            let listCartProducts = JSON.parse(localStorage.getItem('addedProducts'))

            if(listCartProducts){
                if(listCartProducts.length > 0){
                    for(const product of listCartProducts){
                        if(!JSON.stringify(listCartProducts).includes(JSON.stringify(cartProduct))){
                            listCartProducts.push(cartProduct)
                            localStorage.setItem('addedProducts', JSON.stringify(listCartProducts))
                        }
                        else{
                            continue
                        }
                    }
                }else{
                    listCartProducts.push(cartProduct)
                    localStorage.setItem('addedProducts', JSON.stringify(listCartProducts))
                }
            }else{
                localStorage.setItem('addedProducts', JSON.stringify([cartProduct]))
            }
        },

        // Метод восстанавливает товар находящийся в списке недавно удаленных 
        removeProductCart(cartProduct){
            if(this.deleteProducts){
                let newDeleteProducts = []
                for(const product of this.deleteProducts){
                    if(product.id === cartProduct.id){
                        // newDeleteProducts.push(product)
                        this.addProductAfterDelete(product)
                    }else{
                        newDeleteProducts.push(product)
                        console.log(newDeleteProducts);
                    }
                }
                localStorage.setItem('deleteProducts', JSON.stringify(newDeleteProducts))
                document.location.reload();
            }
        },

        // Метод восстанвливает ВЕСЬ товар со списка недавно удаленных
        removeAllProductsCart(){
            let cartProducts = JSON.parse(localStorage.getItem('addedProducts'))
            let deleteCartProducts = JSON.parse(localStorage.getItem('deleteProducts'))

            for(const delProduct of deleteCartProducts){
                if(!JSON.stringify(cartProducts).includes(JSON.stringify(delProduct))){
                    cartProducts.push(delProduct)
                }
            }
            localStorage.setItem('deleteProducts', JSON.stringify([]))
            localStorage.setItem('addedProducts', JSON.stringify(cartProducts))
            document.location.reload()
        },

        // Метод добавляет выбранный товар в список для удаления
        selectCartProductOne(cartProduct){
            // Поле cartProduct.data - содержит в себе выбранный товар в корзине
            // Поле cartProduct.isSelect - содержит в себе флаг выбран ли товар или удален из выбранного
            if(cartProduct.isSelect){
                if(!this.forDeleteProducts.includes(cartProduct.data)){
                    this.forDeleteProducts.push(cartProduct.data)
                    this.$store.commit('CartModule/falseSelectCartProduct')
                }else{
                    return false
                }
            }else{
                if(this.forDeleteProducts.length > 0){
                    this.forDeleteProducts = this.forDeleteProducts.filter(product => {
                        if(product !== cartProduct.data){
                            return true
                        }
                    })
                }else{
                    this.$store.commit('CartModule/falseSelectCartProduct')
                }
            }
        },

        // Метод перенаправляет пользователя на каталог всех товаров 
        openCatalog(){
            this.$router.push({name: 'sorted'})
        },

        // Метод возвращает пользователя на главную страницу
        goHome(){
            this.$router.push({name: 'main'})
        },

        // Метод разворачивает корзину с товарами для просмотра всех товаров
        openListCartProduct(){
            const listCartProducts = document.querySelector('.cart-products-items')
            const listCartProductsViewBlock = document.querySelector('.cart-products-items-view-block')
            localStorage.setItem('openListCartProduct', JSON.stringify(true))
            this.openListCart = true

            // Для отрисовки товаров корзины при стиле отрисовки СПИСКОМ (this.isSelectModeViewCart === 'line')
            listCartProducts.style.overflow = 'visible'
            listCartProducts.style.maxHeight = 'max-content'

            // Для отрисовки товаров корзины при стиле отрисовки Блоками (this.isSelectModeViewCart === 'block')
            listCartProductsViewBlock.style.overflow = 'visible'
            listCartProductsViewBlock.style.maxHeight = 'max-content'
        },

        // Метод возвращает в исходное состояние отрисовку товара в корзине 
        hiddenListCartProduct(){
            localStorage.setItem('openListCartProduct', JSON.stringify(false))
            this.openListCart = false
            const listCartProducts = document.querySelector('.cart-products-items')
            const listCartProductsViewBlock = document.querySelector('.cart-products-items-view-block')
            
            // Для отрисовки товаров корзины при стиле отрисовки СПИСКОМ (this.isSelectModeViewCart === 'line')
            listCartProducts.style.overflow = 'hidden'
            listCartProducts.style.maxHeight = '80vh'

            // Для отрисовки товаров корзины при стиле отрисовки БЛОКАМИ (this.isSelectModeViewCart === 'block')
            listCartProductsViewBlock.style.overflow = 'hidden'
            listCartProductsViewBlock.style.maxHeight = '80vh'
        },

        // Метод очищает корзину
        cartClear(){
            // перед очищением корзины все товары заносятся в список удаленных
            this.addedProducts.forEach(product => {
                this.appendDeleteCartProducts(product)
            })
            localStorage.setItem('addedProducts', JSON.stringify([]))
        },

        // Метод ползволяет удалить несколько товаров на выбор
        deleteSelectProduct(){
            this.$store.commit('CartModule/activateDeleteModeCart')
            localStorage.setItem('deleteModeCart', JSON.stringify(this.deleteModeCart))

            // Если список товаров в корзине скрытый то он раскрывается
            if(!this.openListCart){
                this.openListCartProduct()
            }else{
                this.hiddenListCartProduct()
            }
        },

        // Метод удаляет с корзины список выбранных товаров 
        deleteAllSelectProducts(event){
            let localeSelect = []
            if(this.forDeleteProducts.length > 0){
                for(const product of this.addedProducts){
                    for(const selectProduct of this.forDeleteProducts){
                        if(product.id === selectProduct.id){
                            localeSelect.push({id: product.id, name: product.name, article: product.article})
                        }
                    }
                }
                let newCartList = []
                for(const selectProduct of localeSelect){
                    for(const cartProduct of this.addedProducts){
                        if(cartProduct.id === selectProduct.id){
                            // Выбранный товар добавляется в массив недавно удаленных
                            this.appendDeleteCartProducts(selectProduct)
                        }else{
                            if(!JSON.stringify(localeSelect).includes(JSON.stringify(cartProduct))){
                                if(!newCartList.includes(cartProduct)){
                                    newCartList.push(cartProduct)
                                }
                            }else{
                                // корзина очищается полностью и после перезагружается страница для обновления данных
                                localStorage.setItem('addedProducts', JSON.stringify([]))
                                document.location.reload();
                            }
                        }
                    }
                }
                if(newCartList.length > 0){
                    localStorage.setItem('addedProducts', JSON.stringify(newCartList))
                    document.location.reload();
                }
            }else{
                console.log('вы не выбрали товар')
            }
        },

        // Метод позволяет выбрать все элементы при режиме deleteModeCart
        selectAllCartItem(){
            if(!this.selectCartProduct){
                if(this.forDeleteProducts.length <= 0){
                    this.$store.commit('CartModule/activeSelectCartProduct')
                }
                if(this.forDeleteProducts.length >= 1){
                    this.$store.commit('CartModule/activeSelectCartProduct')
                }
            }
        },

        // Метод включает режим отрисовки товара СПИСКОМ
        cartViewLine(){
            this.$store.commit('CartModule/cartViewLine')
            localStorage.setItem('isSelectModeViewCart', 'line')
        },

        // Метод включает режим отрисовки товара БЛОКАМИ
        cartViewBlock(){
            // this.isSelectModeViewCart = 'block'
            this.$store.commit('CartModule/cartViewBlock')
            localStorage.setItem('isSelectModeViewCart', 'block')
        }
        
    },
    watch: {
        // Режим выборочного удаления товара
        deleteModeCart(newvalue){
            // Если deleteModeCart = true то бэкграунд цвет кнопки будет красным
            
            if(newvalue){
                const activeDeleteModeCart = document.querySelector('#deleteModeCart')
                activeDeleteModeCart.style.backgroundColor = '#ff3419'
                activeDeleteModeCart.style.color = 'white'
                activeDeleteModeCart.style.border = '2px dashed white'
                activeDeleteModeCart.style.position = 'relative'
                activeDeleteModeCart.style.top = '-5px'
            }else{
                const activeDeleteModeCart = document.querySelector('#deleteModeCart')
                activeDeleteModeCart.style.background = ''
                activeDeleteModeCart.style.color = ''
                activeDeleteModeCart.style.border = ''
                activeDeleteModeCart.style.position = ''
                activeDeleteModeCart.style.top = ''
            }
        },
        
        // Отслеживает нажатие кнопки "Выбрать весь товар" при режиме выборочного удаления
        selectCartProduct(newValue){
            if(newValue){
                this.forDeleteProducts = this.cartProducts
            }
        },

        // Отслеживает нажатие кнопки "Выбрать весь товар" при режиме выборочного удаления
        removeSelectAll(newValue){
            if(newValue){
                this.forDeleteProducts = []
            }
        },

        // Меняет темную тему для некоторых элементов корзины    
        darkMode(newValue){
            // Смена темы для bodyTop
            const bodyTop = document.querySelector('.body-top')
            if(newValue){
                bodyTop.style.backgroundColor = 'rgba(36, 33, 33, 1)'
            }else{
                bodyTop.style.backgroundColor = ''
            }

            // Смена темы для cartProductsLayout
            const cartProductsLayout = document.querySelector('.cart-products-layout')
            if(newValue){
                cartProductsLayout.style.backgroundColor = 'rgba(36, 33, 33, 1)'
            }else{
                cartProductsLayout.style.backgroundColor = ''
            }

            // Смена темы для deleteModeCart_btns
            const deleteModeCart_btns = document.querySelector('.delete-mode-cart--btns')
            if(newValue){
                deleteModeCart_btns.style.backgroundColor = 'rgba(139, 133, 133, 0.504)'
            }else{
                deleteModeCart_btns.style.backgroundColor = ''
            }

            // Смена темы для cartRestoreBlock
            const cartRestoreBlock = document.querySelector('.cart-restore-block')
            if(newValue){
                cartRestoreBlock.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            }else{
                cartRestoreBlock.style.backgroundColor = ''
            }

            // Смена темы для cartRestoreBlock__grayLayout
            const cartRestoreBlock__grayLayout = document.querySelector('.cart-restore-block__gray-layout')
            if(newValue){
                cartRestoreBlock__grayLayout.style.backgroundColor = 'rgba(36, 33, 33, 0.7)'
            }else{
                cartRestoreBlock__grayLayout.style.backgroundColor = ''
            }
        }
        
    },
    computed: {
        // извлечение данных товара со стора
        ...mapState({
            // Основной массив товара
            products: state => state.products,
            darkMode: state => state.darkMode,
            
            // Режим удаления товаров с корзины
            deleteModeCart: state => state.CartModule.deleteModeCart,
            
            // Режим удаления товаров с корзины. Для выбора всех товаров
            selectCartProduct: state => state.CartModule.selectCartProduct,
            
            // Снимает всё выделение с товара
            removeSelectAll: state => state.CartModule.removeSelectAll,

            // Стиль оформления отрисовки товара в корзине (line || block)
            isSelectModeViewCart: state => state.CartModule.isSelectModeViewCart,
        }),
        
        // Свойство достает все добавленные товары в корзину
        cartProducts(){
            let cartProductsData = new Array()
            // Итерируемся по массиву товаров со стора (state.products),
            if(this.addedProducts){
                for(const product of this.products){
                    // Итерируемся по массиву товаров в localStorage (addedProducts)
                    for(const cartItem of this.addedProducts){
                        if(JSON.stringify(product.id) === JSON.stringify(cartItem.id)){
                            if(!cartProductsData.includes(product)){
                                cartProductsData.push(product)
                            }
                        }else{
                            continue
                        }
                    }
                }
            }else{
                return []
            }
            // Возвращаем массив товара который в корзине
            return cartProductsData
        },

        // Свойство достает все недавно удаленные товары с localeStorage
        cartDeleteProducts(){
            let cartDeleteData = new Array()
            // Итерируемся по массиву товаров со стора (state.products),
            if(this.deleteProducts){
                for(const product of this.products){
                    // Итерируемся по массиву товаров в localStorage (addedProducts)
                    for(const cartItem of this.deleteProducts){
                        if(JSON.stringify(product.id) === JSON.stringify(cartItem.id)){
                            if(!cartDeleteData.includes(product)){
                                cartDeleteData.push(product)
                            }
                        }else{
                            continue
                        }
                    }
                }
            }else{
                return []
            }
            // Возвращаем массив товара который в корзине
            return cartDeleteData
        },
    },
    mounted() {


        // Смена темы для bodyTop
        const bodyTop = document.querySelector('.body-top')
        if(this.darkMode){
            bodyTop.style.backgroundColor = 'rgba(36, 33, 33, 1)'
        }else{
            bodyTop.style.backgroundColor = ''
        }

        // Смена темы для cartProductsLayout
        const cartProductsLayout = document.querySelector('.cart-products-layout')
        if(this.darkMode){
            cartProductsLayout.style.backgroundColor = 'rgba(36, 33, 33, 1)'
        }else{
            cartProductsLayout.style.backgroundColor = ''
        }

        // Смена темы для deleteModeCart_btns
        const deleteModeCart_btns = document.querySelector('.delete-mode-cart--btns')
        if(this.darkMode){
            deleteModeCart_btns.style.backgroundColor = 'rgba(139, 133, 133, 0.504)'
        }else{
            deleteModeCart_btns.style.backgroundColor = ''
        }

        // Смена темы для cartRestoreBlock
        const cartRestoreBlock = document.querySelector('.cart-restore-block')
        if(this.darkMode){
            cartRestoreBlock.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
        }else{
            cartRestoreBlock.style.backgroundColor = ''
        }
    
        // Смена темы для cartRestoreBlock__grayLayout
        const cartRestoreBlock__grayLayout = document.querySelector('.cart-restore-block__gray-layout')
        if(this.darkMode){
            cartRestoreBlock__grayLayout.style.backgroundColor = 'rgba(36, 33, 33, 0.7)'
        }else{
            cartRestoreBlock__grayLayout.style.backgroundColor = ''
        }

        // 

        // Смена темы для openContentBlock
        const openContentBlock = document.querySelector('.open-content-block')
        if(this.darkMode){
            openContentBlock.style.background = 'linear-gradient(360deg, rgba(36, 33, 33, 1), rgba(34, 32, 32, 0.85), rgba(0, 0, 0, 0))'
        }else{
            openContentBlock.style.background = ''
        }

        // Если deleteModeCart = true при темной теме то бэкграунд цвет кнопки будет красным
        if(this.darkMode && this.deleteModeCart){
            const activeDeleteModeCart = document.querySelector('#deleteModeCart')
            activeDeleteModeCart.style.backgroundColor = '#ff3419'
            activeDeleteModeCart.style.color = 'white'
            activeDeleteModeCart.style.border = '2px dashed white'
            activeDeleteModeCart.style.position = 'relative'
            activeDeleteModeCart.style.top = '-5px'
        }else{
            const activeDeleteModeCart = document.querySelector('#deleteModeCart')
            activeDeleteModeCart.style.background = ''
            activeDeleteModeCart.style.color = ''
            activeDeleteModeCart.style.border = ''
            activeDeleteModeCart.style.position = ''
            activeDeleteModeCart.style.top = ''
        }

        // Проверяет есть ли в localeStorage переменная isSelectModeViewCart
        if(localStorage.getItem('isSelectModeViewCart')){
            if(localStorage.getItem('isSelectModeViewCart') === 'line'){
                // this.isSelectModeViewCart = 'line'
                this.$store.commit('CartModule/cartViewLine')
            }
            else if(localStorage.getItem('isSelectModeViewCart') === 'block'){
                // this.isSelectModeViewCart = 'block'
                this.$store.commit('CartModule/cartViewBlock')
            }
        }else{
            // Если свойства нет то оно создается со значением 'line' - значение по умолчанию
            localStorage.setItem('isSelectModeViewCart', 'line')
        }

        // Если нет переменной openListCartProduct в localeStorage, то this.openListCart = false
        if(!localStorage.getItem('openListCartProduct')){
            this.openListCart = false
        }

        // Корзина товара остается развернутой если в localeStorage переменная openListCartProduct = true
        if(this.openListCart){
            const listCartProducts = document.querySelector('.cart-products-items')
            listCartProducts.style.overflow = 'visible'
            listCartProducts.style.maxHeight = 'max-content'
            if(this.cartProducts.length < 3){
                localStorage.setItem('openListCartProduct', JSON.stringify(false))
                this.openListCart = false
            }else{
                localStorage.setItem('openListCartProduct', JSON.stringify(true))
                this.openListCart = true
            }
        }else{
            this.openListCart = false
            const listCartProducts = document.querySelector('.cart-products-items')
            listCartProducts.style.overflow = 'hidden'
            listCartProducts.style.maxHeight = '80vh'
        }

        // При стиле отрисовки карточек товара БЛОКАМИ (this.isSelectModeViewCart === 'block')
        // Корзина товара остается развернутой если в localeStorage переменная openListCartProduct = true
        if(this.openListCart){
            const listCartProducts = document.querySelector('.cart-products-items-view-block')
            listCartProducts.style.overflow = 'visible'
            listCartProducts.style.maxHeight = 'max-content'
            if(this.cartProducts.length < 3){
                localStorage.setItem('openListCartProduct', JSON.stringify(false))
                this.openListCart = false
            }else{
                localStorage.setItem('openListCartProduct', JSON.stringify(true))
                this.openListCart = true
            }
        }else{
            this.openListCart = false
            const listCartProducts = document.querySelector('.cart-products-items-view-block')
            listCartProducts.style.overflow = 'hidden'
            listCartProducts.style.maxHeight = '80vh'
        }
    },

}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
.cart-page{
    z-index: 1;
    display: flex;
    flex-direction: column;
    // border: $border;
    // border-radius: $radius;
    min-height: 100vh;
    margin: 0 10px 0 10px;
    .header-cart-page{
        display: flex;
        min-height: 10vh;
        padding: 20px;
        .title-text{
            margin: 0 30px 0 auto;
            font-size: 3em;
        }
    }
    .cart-body{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 90vh;
        margin: 10px 0 30px 0;
        .body-top{
            display: flex;
            justify-content: space-between;
            border: $border;
            border-radius: $radius;
            padding: 15px 20px;
            margin: 10px 0 10px 0;
            box-shadow: $shadow;
            background-color: white;
        }
        .body-top-text{
            align-self: center;
            cursor: default;
        }
        .search-cart-products{
            margin-right: 30px;
            width: 30%;
            padding-left: 30px;
            font-size: 15px;
            box-shadow: none;
            &:focus{
                width: 60%;
                box-shadow: $shadow;
            }
        }
        .body-content{
            display: flex;
            align-items: stretch;
            min-height: 100vh;
            margin-top: 15px;
        }
        .filter-panel{
            margin: 5px;
        }
        .cart-products-layout{
            position: relative;
            display: flex;
            flex-direction: column;
            align-content: stretch;
            width: 80%;
            border: $border;
            border-radius: $radius;
            margin: 5px;
            box-shadow: $shadow;
            background-color: white;
            .cart-products-layout__not-auth{
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                top: -2px;
                bottom: -2px;
                left: -2px;
                right: -2px;
                border: $border;
                border-radius: $radius;
                z-index: 1000;
            }

            .not-auth__body{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 70%;
                border: $border;
                border-radius: $radius;
                margin: 20px auto;
                padding: 20px;
                box-shadow: $shadow;
            }
            .not-auth__body-text{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                border: $border;
                border-radius: $radius;
                padding: 20px;
                margin-bottom: 20px;
                cursor: default;
            }
            .not-auth__body-action--description{
                display: flex;
                flex-wrap: wrap;
                width: 90%;
                cursor: default;
            }
            .not-auth__body-action--btns{
                display: flex;
                margin: 20px 0 0 0 ;
            }
        }
        // Окно товара который был недавно удален 
        .cart-restore-block{
            position: relative;
            display: flex;
            flex-direction: column;
            background-color: white;
            min-width: 1000px;
            width: max-content;
            min-height: 60vh;
            max-height: 70vh;
            border: $border;
            border-radius: $radius;
            
            // Серый слой перекрывающий окно удаленных товаров если нажата кнопка "Восстановить всё"
            &__gray-layout{
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-color: rgba(128, 128, 128, 0.5);
                border-radius: $radius;
                z-index: 1005;
            }

            // Окно подтверждения ВОССТАНОВЛЕНИЯ ВСЕГО УДАЛЕННОГО ТОВАРА
            &__confirm-remove-all{
                position: relative;
                margin: 30px auto 0 auto;
                z-index: 1010;
            }
            &__header{
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-height: 80px;
                width: 100%;
                border-bottom: $border;
                border-top-left-radius: $radius;
                border-top-right-radius: $radius;
                padding: 0 10px 0 10px;
                .__header__btns{
                    display: flex;
                }
            }
            &__empty{
                // display: flex;
                // width: 50%;
                // height: 40vh;
                border-bottom: $border;
                margin: auto;
                cursor: default;
                // border-radius: $radius;
                // background: $background-gr;
            }
            &__body{
                margin: 0 0 10px 0;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 20px;
            }
            ::-webkit-scrollbar{
            width: 10px;
            height: 10px;
            }
            ::-webkit-scrollbar-track{
                background: rgba(128, 128, 128, 0.2);
                &:hover{
                    background: rgba(128, 128, 128, 0.3);
                }
            }
            ::-webkit-scrollbar-thumb{
                border-radius: $radius;
                background: linear-gradient(360deg, #fc3b22, $color-orange-white)
            }
        }
        // Слой перекрывающий окно корзины при подтверждении очищения корзины
        .cart-products-layout__disabled{
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: $radius;
            z-index: 999;
        }
        .delete-mode-cart--btns{
            position: sticky;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            top: 10px;
            z-index: 10;
            margin-top: 10px;
            background-color: rgba(255, 255, 255, 0.504);
            border-radius: $radius;
        }
        .confirm--cart__delete-select{
            position: relative;
            top: 100px;
            margin: 0 auto 0 auto;
        }
        .select-quantity{
            position: absolute;
            cursor: default;
            display: flex;
            align-self: flex-end;
            right: 10px;
            top: 3px;
            background-color: rgba(245, 222, 179, 0.65);
            padding: 10px;
            border-radius: $radius;
        }
        // Блок подтверждения удаления 
        .confirm--cart{
            position: relative;
            top: 100px;
            margin: 0 auto 0 auto;
        }
        .products-optional-header{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: -1px;
            background: $background-gr;
            border-top-left-radius: $radius;
            border-top-right-radius: $radius;

            .optional-btns{
                display: flex;
                justify-content: center;
                width: max-content;
                padding: 5px;
                margin: 0 10px 0 0;
            }
            .btn-optional{
                font-size: 17px;
                padding: 10px 50px;
                &:hover{
                    box-shadow: $shadow;
                }
            }
        }
        // .cart-btns{
        //     position: relative;
        //     top: 20px;
        //     left: 20px;
        //     display: flex;
        //     align-items: center;
        //     align-self: flex-start;
        //     border-bottom: $border;
        //     padding-bottom: 5px;
        //     .cart__btn{
                
        //     }
        // }
        .empty-cart-products{
            display: flex;
            align-self: center;
            margin-top: 30px;
            color: gray;
        }
        .block-open-catalog{
            position: relative;
            display: flex;
            background: linear-gradient(to right, #fc3b22, $color-orange-white);
            flex-direction: column;
            align-items: center;
            top: -50px;
            border: $border;
            border-radius: $radius;
            margin: auto;
            padding: 50px 30px;
        }
        .block-open-catalog--title{
            color: white;
            font-size: 1.3em;
        }
        .block-open-catalog--btns{
            display: flex;
            justify-content: space-evenly;
            // border: $border;
            margin-top: 30px;
        }
        .open-catalog__btn{
            font-size: 1.1em;
            padding: 15px 20px;
        }
        .cart-products-items{
            display: flex;
            flex-direction: column;
            max-height: 80vh;
            margin: 50px auto 20px auto;
            padding: 5px;
            width: 90%;
            overflow-y: hidden;
            overflow-x: visible;
        }
        .cart-products-items-view-block{
            position: relative;
            top: -30px;
            display: flex;
            flex-wrap: wrap;
            max-height: 80vh;
            margin: 0px auto 20px auto;
            padding: 5px;
            width: 90%;
            overflow-y: hidden;
            overflow-x: visible;
        }
        .open-content-block{
            position: absolute;
            display: flex;
            z-index: 2;
            flex-direction: column;
            background: linear-gradient(
                360deg, 
                white, 
                rgba(255, 255, 255, 0.85),
                rgba(255, 255, 255, 0.0),
            );
            bottom: 0;
            border-bottom-left-radius: $radius;
            border-bottom-right-radius: $radius;
            width: 100%;
            height: 100px;
            & p{
                position: relative;
                bottom: 20px;
                display: block;
                color: $color-orange-white;
                border-bottom: $border; 
                margin: auto auto 0 auto;
                &:hover{
                    cursor: pointer;
                    border-bottom: 3px solid $color-orange-white;
                }
            }
        }
        .hidden-content-block{
            position: absolute;
            display: flex;
            flex-direction: column;
            bottom: 0;
            border-bottom-left-radius: $radius;
            border-bottom-right-radius: $radius;
            width: 100%;
            height: 100px;
            & p{
                position: relative;
                bottom: 10px;
                display: block;
                color: $color-orange-white;
                border-bottom: $border; 
                margin: auto auto 0 auto;
                &:hover{
                    cursor: pointer;
                    border-bottom: 3px solid $color-orange-white;
                }
            }
        }
    }
}
@include darkMode_with_font
</style>