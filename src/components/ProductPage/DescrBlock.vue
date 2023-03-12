<!-- БЛОК С ОПИСАНИЕМ ТОВАРА -->
<template>
    <!-- ГЛАВНЫЙ БЛОК С ОПИСАНИЕМ ТОВАРА -->
    <div class='description-block'>
        <div class="description-block__content">
            <strong>
                <!-- ТЕКСТ ОПИСАНИЯ -->
                <div class="description-text">
                    {{ this.descriptionData }}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum aliquam ratione dolore tempore eos non quas dolorem autem saepe amet consequatur repellat dolorum inventore earum possimus quibusdam repellendus porro expedita maxime, pariatur, maiores temporibus! Earum, natus recusandae neque distinctio nulla quidem aut nisi velit ex vero, labore temporibus maxime! Earum, culpa? At perspiciatis, eveniet ab, cum unde consequatur possimus architecto asperiores aliquam totam quos! Ut quasi magni molestias dolor est consectetur, animi iste consequuntur distinctio vel molestiae quaerat similique possimus commodi, doloribus assumenda deleniti inventore, odio quos rerum. Possimus beatae corrupti eum suscipit ipsum unde consequuntur explicabo quae culpa excepturi ex inventore sed, consectetur quasi iste, dicta at debitis saepe similique sint dolorum. Et doloribus ducimus soluta deleniti! Porro reprehenderit beatae voluptates. Nam est non cumque aliquid quaerat voluptatem laborum adipisci fugit, qui rem ex numquam possimus in quas, dolore a eos sapiente consectetur eligendi tempore corporis cupiditate velit aperiam consequatur. Nesciunt tenetur dolor sed qui, eos dolorem voluptatem nihil sequi harum non placeat officia quas dicta? Earum aut, incidunt similique, perferendis magnam eos quidem recusandae aperiam corporis voluptas odio a qui nemo eaque voluptatum vel, sequi dicta est quia! Nesciunt natus a maiores incidunt similique nihil vel doloremque.
                </div>
            </strong>
            
        </div>
        
        <!-- КНОПКА РАЗВЕРНУТЬ ОПИСАНИЕ ТОВАРА -->
        <div 
        class="open-text-more"
        @click="showTextDescription"
        v-show="!isOpenTextDescription"
        >
        Развернуть описание...
        </div>
        <!-- КНОПКА СКРЫТЬ ОПИСАНИЕ -->
        <button-comp 
        class="hidden-text-description"
            @click="hiddenTextDescription"
            v-show="isOpenTextDescription"
            >
            Скрыть описание
        </button-comp>
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
            const parentDescriptionBlock = document.querySelector('.description-block__content');
            parentDescriptionBlock.style.height = 'max-content'
            parentDescriptionBlock.style.borderBottomLeftRadius = '20px'
            parentDescriptionBlock.style.borderBottomRightRadius = '20px'
            parentDescriptionBlock.style.borderTopLeftRadius = '20px'
            parentDescriptionBlock.style.borderTopRightRadius = '20px'
            parentDescriptionBlock.style.border = '1px solid rgb(253, 148, 11)'
        },
        // МЕТОД СКРЫВАЕТ ТЕКСТ ОПИСАНИЯ ТОВАРА
        hiddenTextDescription(){
            const parentDescriptionBlock = document.querySelector('.description-block__content');
            parentDescriptionBlock.style.borderBottomLeftRadius = '0px'
            parentDescriptionBlock.style.borderBottomRightRadius = '0px'
            parentDescriptionBlock.style.borderTopLeftRadius = ''
            parentDescriptionBlock.style.borderTopRightRadius = ''
            parentDescriptionBlock.style.height = '200px'
            parentDescriptionBlock.style.border = ''
            this.isOpenTextDescription = false
        }
    },
    watch: {
        // Смена темной темы 
        darkMode(newValue){
            // смена темы для openTextMore
            const openTextMore = document.querySelector('.open-text-more');
            if(newValue){
                openTextMore.style.background = 'linear-gradient(360deg, rgba(36, 33, 33, 1), rgba(34, 32, 32, 0.85), rgba(0, 0, 0, 0))'
            }else{
                openTextMore.style.background = ''
            }

            // смена темы для descriptionText
            const descriptionText = document.querySelector('.description-text');
            if(newValue){
                descriptionText.style.color = 'rgb(255, 205, 138)'
            }else{
                descriptionText.style.color = ''
            }
        }
    },
    computed: {
        ...mapState({
            products: state => state.products,
            darkMode: state => state.darkMode,
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
        // смена темы для openTextMore
        const openTextMore = document.querySelector('.open-text-more');
        if(this.darkMode){
            openTextMore.style.background = 'linear-gradient(360deg, rgba(36, 33, 33, 1), rgba(34, 32, 32, 0.85), rgba(0, 0, 0, 0))'
        }else{
            openTextMore.style.background = ''
        }

        // смена темы для descriptionText
        const descriptionText = document.querySelector('.description-text');
        if(this.darkMode){
            descriptionText.style.color = 'rgb(255, 205, 138)'
        }else{
            descriptionText.style.color = ''
        }
    },
    created(){
    }
}
</script>
<style lang="scss" scoped>
.description-block{
    position: relative;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 30px 0 20px 0;

    .description-block__content{
        position: relative;
        display: flex;
        flex-direction: column;
        font-size: 20px;
        height: 250px;
        padding: 15px;
        border: $border;
        border-bottom: none;
        border-radius: $radius;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        // box-shadow: $shadow;
        overflow: hidden;
        transition: width 0.5 ease;

    }
    .hidden-text-description{
        position: relative;
        top: 10px;
        right: 10px;
        margin-left: auto;
        padding: 2px 30px;
    }
    .open-text-more{
        position: absolute;
        bottom: -1px;
        left: -1px;
        right: -1px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background-color: rgba(234, 216, 76, 0.557);
        background: linear-gradient(
            360deg, 
            white, 
            rgba(255, 255, 255, 0.55),
            );
        // border: $border;
        height: 50px;
        // width: 1350px;
        color: orangered;
        transition: all 0.5s ease;
        &:hover{
            cursor: pointer;
            bottom: -20px;
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
}

</style>