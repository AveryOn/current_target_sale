<!-- БЛОК С ОПИСАНИЕМ ТОВАРА -->
<template>
    <!-- ГЛАВНЫЙ БЛОК С ОПИСАНИЕМ ТОВАРА -->
    <div class="description-block">
        <strong>
            <!-- ТЕКСТ ОПИСАНИЯ -->
            <div class="description-text">
                {{ this.descriptionData }}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum aliquam ratione dolore tempore eos non quas dolorem autem saepe amet consequatur repellat dolorum inventore earum possimus quibusdam repellendus porro expedita maxime, pariatur, maiores temporibus! Earum, natus recusandae neque distinctio nulla quidem aut nisi velit ex vero, labore temporibus maxime! Earum, culpa? At perspiciatis, eveniet ab, cum unde consequatur possimus architecto asperiores aliquam totam quos! Ut quasi magni molestias dolor est consectetur, animi iste consequuntur distinctio vel molestiae quaerat similique possimus commodi, doloribus assumenda deleniti inventore, odio quos rerum. Possimus beatae corrupti eum suscipit ipsum unde consequuntur explicabo quae culpa excepturi ex inventore sed, consectetur quasi iste, dicta at debitis saepe similique sint dolorum. Et doloribus ducimus soluta deleniti! Porro reprehenderit beatae voluptates. Nam est non cumque aliquid quaerat voluptatem laborum adipisci fugit, qui rem ex numquam possimus in quas, dolore a eos sapiente consectetur eligendi tempore corporis cupiditate velit aperiam consequatur. Nesciunt tenetur dolor sed qui, eos dolorem voluptatem nihil sequi harum non placeat officia quas dicta? Earum aut, incidunt similique, perferendis magnam eos quidem recusandae aperiam corporis voluptas odio a qui nemo eaque voluptatum vel, sequi dicta est quia! Nesciunt natus a maiores incidunt similique nihil vel doloremque.
            </div>
        </strong>
        <!-- КНОПКА СКРЫТЬ ОПИСАНИЕ -->
        <button-comp 
            class="hidden-text-description"
            @click="hiddenTextDescription"
            v-show="isOpenTextDescription"
            >
            Hidden
        </button-comp>
    </div>
    <!-- КНОПКА РАЗВЕРНУТЬ ОПИСАНИЕ ТОВАРА -->
    <div 
        class="open-text-more"
        @click="showTextDescription"
        v-show="!isOpenTextDescription"
        >
            Open More...
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return{
            isOpenTextDescription: false,
        }
    },
    methods: {
        // МЕТОД РАЗВОРАЧИВАЕТ ТЕКСТ ОПИСАНИЯ ТОВАРА
        showTextDescription(){
            this.isOpenTextDescription = true
            const parentDescriptionBlock = document.querySelector('.description-block');
            parentDescriptionBlock.style.height = 'max-content'
            parentDescriptionBlock.style.borderBottomLeftRadius = '20px'
            parentDescriptionBlock.style.borderBottomRightRadius = '20px'
        },
        // МЕТОД СКРЫВАЕТ ТЕКСТ ОПИСАНИЯ ТОВАРА
        hiddenTextDescription(){
            const parentDescriptionBlock = document.querySelector('.description-block');
            parentDescriptionBlock.style.borderBottomLeftRadius = '0px'
            parentDescriptionBlock.style.borderBottomRightRadius = '0px'
            parentDescriptionBlock.style.height = '200px'
            this.isOpenTextDescription = false
        }
    },
    computed: {
        ...mapState({
            products: state => state.products, 
        }),
        // СВОЙСТВО ВЫТАСКИВАЕТ ОПИСАНИЕ ТОВАРА СО store С МАССИВА ТОВАРОВ
        descriptionData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.description
                }else{
                    continue
                }
            }
        },
    },
    mounted(){
        // ЭТОТ КУСОК КОДА ПОДБИВАЕТ ШИРИНУ СКРЫВАЮЩЕГО ТЕКСТ БЛОКА ОТНОСИТЕЛЬНО
        // ОСНОВНОГО ГЛАВНОГО БЛОКА ОПИСАНИЯ ТОВАРА
        const openTextMore = document.querySelector('.open-text-more');
        const parentDescriptionBlock = document.querySelector('.description-block');
        openTextMore.style.width = parentDescriptionBlock.clientWidth - 2 + 'px'
    },
    created(){
    }
}
</script>
<style lang="scss" scoped>
.description-block{
    display: flex;
    flex-direction: column;
    width: 90%;
    font-size: 20px;
    height: 200px;
    padding: 15px;
    margin: 10px 0 20px 0;
    border: $border;
    border-radius: $radius;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    // box-shadow: $shadow;
    overflow: hidden;
    transition: width 0.5 ease;
    .hidden-text-description{
        position: relative;
        align-self: flex-end;
        margin: 0 -9px -9px 0;
        padding: 2px 25px;
    }
}
.open-text-more{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: linear-gradient(
        360deg, 
        white, 
        rgba(255, 255, 255, 0.55),
        );
    // border: $border;
    bottom: -420px;
    height: 50px;
    color: orangered;
    transition: all 0.5s ease;
    &:hover{
        cursor: pointer;
        bottom: -440px;
        height: 70px;
        border-bottom-left-radius: $radius;
        border-bottom-right-radius: $radius;
        // border-bottom: $border;
        background: linear-gradient(
        360deg, 
        white, 
        rgba(255, 255, 255, 0.6),
        );
    }
}
.description-text{
    // border: $border;
}
</style>