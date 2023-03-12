<!-- КОМПОНЕНТ ПРИМЕНЯЕТСЯ ДЛЯ ОТОБРАЖЕНИЯ ЭЛЕМЕНТА ИСТОРИИ РАБОТЫ -->
<template>

    <div 
    class="history-item"
    :class="{'dark': darkMode}"
    >

        <!-- Миниатюра события -->
        <!-- Миниатюра события подстраивается автоматически относительно названия события которое характеризует
            элемент истории, к примеру это может быит создание(create_product) товара или повышение цены(price_up)
        -->
        <span class="history-item__miniature">
            <priceDrop v-if="(operationType === 'price_drop')? true : false"></priceDrop>
            <priceUp v-else-if="(operationType === 'price_up')? true : false"></priceUp>
            <pricePromotion v-else-if="(operationType === 'price_promotion')? true : false"></pricePromotion>
            <createProduct v-else-if="(operationType === 'create_product')? true : false"></createProduct>
            <removeProduct v-else-if="(operationType === 'remove_product')? true : false"></removeProduct>
            <editProduct v-else-if="(operationType === 'edit_product')? true : false"></editProduct>
            <announceEvent v-else-if="(operationType === 'announce_event')? true : false"></announceEvent>
            <createCategory v-else-if="(operationType === 'create_category')? true : false"></createCategory>
            <createGroup v-else-if="(operationType === 'create_group')? true : false"></createGroup>
        </span>
    
        <!-- Тело -->
        <div class="history-item__body">

            <!-- Шапка -->
            <div class="history-item__header">

                <!-- Название события -->
                <p class="history-item__title">{{ operationName }}</p>
                
                <!-- Время события -->
                <p class="history-item__creation-time">{{ operationTime }}</p>

            </div>
            
            <!-- Мини-описание события -->
            <p class="history-item__description">{{ operationDetail }}</p>

        </div>

    </div>

</template>
<script>
import priceDrop from '@/components/ManagerPage/miniatures/priceDrop.vue'
import priceUp from '@/components/ManagerPage/miniatures/priceUp.vue'
import pricePromotion from '@/components/ManagerPage/miniatures/pricePromotion.vue'
import createProduct from '@/components/ManagerPage/miniatures/createProduct.vue'
import removeProduct from '@/components/ManagerPage/miniatures/removeProduct.vue'
import editProduct from '@/components/ManagerPage/miniatures/editProduct.vue'
import announceEvent from '@/components/ManagerPage/miniatures/announceEvent.vue'
import createCategory from '@/components/ManagerPage/miniatures/createCategory.vue'
import createGroup from '@/components/ManagerPage/miniatures/createGroup.vue'
import { mapState } from 'vuex';
export default {
    components: {
        priceDrop,
        priceUp,
        pricePromotion,
        createProduct,
        removeProduct,
        editProduct,
        announceEvent,
        createCategory,
        createGroup,
    },
    props: {
        operationType: {
            type: String,
            required: true,
        },
        operationName: {
            type: String,
            required: true,
        },
        operationTime: {
            type: [String, Number],
            required: true,
        },
        operationDetail: {
            type: [String, Number],
            required: true,
        },
    },

    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },

    
}
</script>
<style lang="scss" scoped>
.history-item{
    position: relative;
    display: flex;
    width: 95%;
    min-height: 150px;    
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
    margin: 10px 0;
    color: $color-orange-white;
    .history-item__miniature{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15%;
        height: 100%;
        border-right: $border;
    }
    .history-item__body{
        width: 85%;
        display: flex;
        flex-direction: column;
        cursor: default;
    }
    .history-item__header{
        max-height: 50px;
        height: max-content;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: $border;
        padding: 0 20px;
        font-size: 20px;
    }
    .history-item__description{
        padding: 20px;
        font-size: 18px;

    }
}
@include darkMode_with_font;
</style>