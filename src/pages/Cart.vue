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
                <filter-panel class="filter-panel"></filter-panel>
                <div class="cart-products-layout">
                    <div class="products-optional-header">
                        <div>#тут будет TagsBar</div>
                        <div class="optional-btns">
                            <button-comp class="btn-optional">View...</button-comp>
                            <button-comp class="btn-optional">Restore</button-comp>
                        </div>
                    </div>
                    <div class="cart-products-items">
                        <cart-product-item></cart-product-item>
                        <cart-product-item></cart-product-item>
                        <cart-product-item></cart-product-item>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FilterPanel from '@/components/CatalogPage/FilterPanel.vue'
import cartProductItem from '@/components/CartPage/cartProductItem.vue'
export default {
    components: {
        FilterPanel,
        cartProductItem,
    },
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
.cart-page{
    z-index: 1;
    display: flex;
    flex-direction: column;
    // border: $border;
    // border-radius: $radius;
    min-height: 100vh;
    margin: 30px 10px 0 10px;
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
            div{
                margin-left: 20px;
            }
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
        .cart-products-items{
            display: flex;
            flex-direction: column;
            height: max-content;
            margin: 50px auto 20px auto;
            padding: 5px;
            width: 85%;
        }
    }
}
</style>