<!-- КОРИЗИНА С ТОВАРОМ 
    ФУНКЦИОНАЛ ДОСТУПЕН ПО РЕГИСТРАЦИИ ПОЛЬЗОВАТЕЛЯ -->
<template>
    <div class="cart-page">
        <div class="header-cart-page">
            <h1 class="title-text">Cart</h1>
        </div>
        <div class="cart-body">
            <div class="body-top">
                <h1 class="body-top-text">Your added products</h1>
                <input-comp placeholder="Search..." class="search-cart-products"></input-comp>
            </div>
            <div class="body-content">
                <!-- ФИЛЬТЕР ПАНЕЛЬ -->
                <filter-panel class="filter-panel"></filter-panel>
                <div class="cart-products-layout">

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

                    <div class="products-optional-header">
                        <div>#тут будет TagsBar</div>

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
                            <!-- <form type="submit">
                            </form> -->

                            <!-- Кнопка ползволяет удалить несколько товаров на выбор -->
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
                            v-show="cartProducts.length > 0" 
                            :disabled="isShowConfirmDelete" 
                            >
                                View...
                            </button-comp>
                            
                            <button-comp 
                            class="btn-optional" 
                            :disabled="isShowConfirmDelete"
                            @click="isShowRestoreCart = true"
                            >
                                Недавно удаленный товар
                            </button-comp>

                            <modal-comp @click="isShowRestoreCart = false" :show="isShowRestoreCart">
                                <div class="cart-restore-block">

                                    <!-- ШАПКА -->
                                    <div class="cart-restore-block__header">
                                        <h2>Недавно удаленные</h2>
                                        <div class="__header__btns">
                                            <button-comp @click="isShowRestoreCart = false">Закрыть</button-comp>
                                        </div>
                                    </div>

                                    <!-- ОСНОВАНАЯ ЧАСТЬ -->
                                    <div class="cart-restore-block__body">
                                        <div class="__body__list-products">
                                            <cart-product-item 
                                            :cartProduct="{id: 1, name: 'test'}"
                                            v-for="cartItem in 5"
                                            ></cart-product-item>
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
                            @click="openCatalog"
                            >
                                Открыть каталог
                            </button-comp>
                            <button-comp 
                            class="open-catalog__btn"
                            @click="goHome"
                            >
                                Вернуться на главную
                            </button-comp>
                        </div>
                    </div>

                    <!-- Отрисовка товара в корзине -->
                    <div v-show="cartProducts.length > 0" class="cart-products-items">

                        <!-- Отрисовка товаров в корзине -->
                        <cart-product-item
                        v-for="cartProduct in cartProducts"
                        :key="cartProduct.id"
                        :cartProduct="cartProduct"
                        @deleteProductCart="deleteProductCart(cartProduct)"
                        @selectCartProductOne="selectCartProductOne"
                        >
                        </cart-product-item>
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
import FilterPanel from '@/components/CatalogPage/FilterPanel.vue'
import cartProductItem from '@/components/CartPage/cartProductItem.vue'
import { mapState, mapMutations } from 'vuex';
export default {
    components: {
        FilterPanel,
        cartProductItem,
    },
    data(){ 
        return{
            // Поле получает с localStorage данные массива с товаром для корзины
            addedProducts: JSON.parse(localStorage.getItem('addedProducts')),

            // Поле получает с localStorage массив недавно удаленного товара
            deleteProducts: JSON.parse(localStorage.getItem('deleteProducts')),

            // Поле получает с localStorage булевую перменную показывающая развернута или свернута корзина
            openListCart: JSON.parse(localStorage.getItem('openListCartProduct')),

            // Поле используется для включения режима удаления товара на выбор
            // deleteModeCart: false,

            // Поле используется для отображения уведомления об подтверждении удаления ВСЕГО товара
            isShowConfirmDelete: false,

            // Поле используется для отображения уведомления об подтверждении удаления ВЫБРАННОГО товара
            isShowSelectConfirmDelete: false,

            // true Если нажата кнопка "Выбрать всё", при режиме удаления
            isSelectAll: false,

            // Открытие блока с недавно удаленным товаром
            isShowRestoreCart: false,
            
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
            localStorage.setItem('openListCartProduct', JSON.stringify(true))
            this.openListCart = true
            listCartProducts.style.overflow = 'visible'
            listCartProducts.style.maxHeight = 'max-content'
        },

        // Метод возвращает в исходное состояние отрисовку товара в корзине 
        hiddenListCartProduct(){
            localStorage.setItem('openListCartProduct', JSON.stringify(false))
            this.openListCart = false
            const listCartProducts = document.querySelector('.cart-products-items')
            listCartProducts.style.overflow = 'hidden'
            listCartProducts.style.maxHeight = '80vh'
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
        
    },
    watch: {
        // Режим выборочного удаления товара
        deleteModeCart(){
            // Если deleteModeCart = true то бэкграунд цвет кнопки будет красным
            if(this.deleteModeCart){
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
        }
        
    },
    computed: {
        // извлечение данных товара со стора
        ...mapState({
            products: state => state.products,
            deleteModeCart: state => state.CartModule.deleteModeCart,
            selectCartProduct: state => state.CartModule.selectCartProduct,
            removeSelectAll: state => state.CartModule.removeSelectAll,
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
    },
    mounted() {
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
        }
        // Окно товара который был недавно удален 
        .cart-restore-block{
            display: flex;
            flex-direction: column;
            background-color: white;
            width: 900px;
            min-height: 60vh;
            max-height: 70vh;
            border: $border;
            border-radius: $radius;
            &__header{
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: white;
                min-height: 80px;
                width: 100%;
                border-bottom: $border;
                border-top-left-radius: $radius;
                border-top-right-radius: $radius;
                padding: 0 10px 0 10px;
                &__btns{

                }
            }
            &__body{
                border: $border;
                margin: 20px 0 20px 0;
                overflow-x: hidden;
                overflow-y: auto;
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
            top: 5px;
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
            justify-content: space-between;
            align-items: center;
            margin: -1px;
            background: $background-gr;
            // border-radius: $radius;
            border-top-left-radius: $radius;
            border-top-right-radius: $radius;
            // ТЕСТОВЫЙ СЕЛЕКТОР

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
</style>