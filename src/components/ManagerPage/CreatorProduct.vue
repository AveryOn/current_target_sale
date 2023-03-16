<!-- ОКНО СОЗДАНИЯ НОВОГО ТОВАРА, ТАКЖЕ ИСПОЛЬЗУЕТСЯ И В OWNER СТРАНИЦЕ -->
<template>

    <div class="creator-product" v-show="show">
        
        <div class="creator-product__header">
            <h2 class="creator-product__title">Заполните поля формы для создания нового товара</h2>
        </div>

        <div class="creator-product__body">

            <form v-show="true" class="creator-product__form" @submit.prevent>

                <!-- Ввод АРТИКУЛА Товара -->
                    <label class="for_input" for="article">Укажите артикул товара (Число)</label>
                    <div class="creator-product__item">
                        <input-comp 
                        class="creator-product__input" 
                        id="article" 
                        placeholder="Артикул"
                        :inputType="'number'"
                        ></input-comp>
                        <button-comp>Подтвердить</button-comp>
                    </div>
                

                <!-- Ввод НАИМЕНОВАНИЯ товара -->
                <label class="for_input" for="name">Укажите наименование товара</label>
                    <div class="creator-product__item">
                        <input-comp 
                        class="creator-product__input" 
                        id="name" 
                        placeholder="Наименование"
                        :inputType="'text'"
                        >
                        </input-comp>
                        <button-comp>Подтвердить</button-comp>
                    </div>


                <!-- Ввод ЦЕНЫ товара -->
                    <label class="for_input" for="price">Укажите цену товара</label>
                    <div class="creator-product__item">
                        <input-comp 
                        class="creator-product__input" 
                        id="price" 
                        placeholder="Цена"
                        :inputType="'number'"
                        ></input-comp>
                        <button-comp>Подтвердить</button-comp>
                    </div>


                <!-- Ввод наименования ГРУППЫ товара -->
                <label class="for_radio-select" for="group_name">К какой группе товара будет относиться данный товар</label>
                <div class="creator-product__item">
                    <div class="creator-product__select-radio">
                        <radio-button
                        v-for="group in groups"
                        id="group_name"
                        :name="'group_name'"
                        :value="group.name"
                        v-model="group_name"
                        :key="group.id"
                        >
                        </radio-button>
                    </div>
                    <button-comp>Подтвердить</button-comp>
                </div>


                <!-- Ввод наименования КАТЕГОРИИ товара -->
                <label class="for_radio-select" for="category_name">К какой категории товара будет относиться данный товар</label>
                <div class="creator-product__item">
                    <div class="creator-product__select-radio">
                        <radio-button
                        v-for="category in (group_name === 'Лето')? categories['Лето'] : categories['Зима']"
                        id="category_name"
                        :name="'category_name'"
                        :value="category.name"
                        v-model="category_name"
                        :key="category.id"
                        >
                        </radio-button>
                    </div>
                    <button-comp>Подтвердить</button-comp>
                </div>


                <!-- Ввод ТЕГОВ товара -->
                <label class="for_input" for="tags">Добавьте теги, которые помогут в поиске и сортировке этого товара</label>
                <!-- Компонент для отрисовки добавленных тегов -->
                <span class="tags_array">

                <!-- Уведомление о том что цвет был уже выбран -->
                    <notification-mini-error 
                    :show="isTagAlreadyHas"
                    class="error-select-tag"
                    >
                        Вы уже добавили этот тег
                    </notification-mini-error>

                    <!-- Подсказка -->
                    <p v-show="!addedTags.length" class="tags_array__hint">Чтобы добавить теги нажмите на кнопку справа</p>
                    <!-- тег компонент -->
                    <tag-comp class="tags_array__tag" v-for="tag in addedTags">{{ tag }}</tag-comp>
                    <!-- Кнопка добавления тега -->
                    <span class="append-tag-btn" v-show="!isAddTag" @click="isAddTag = true">
                        <i-upload></i-upload>
                    </span>
                </span>
                <!-- Поле для ввода тега -->
                <div v-show="isAddTag" class="creator-product__item">
                    <input-comp 
                    class="creator-product__input" 
                    id="tags" 
                    placeholder="Наименование тега"
                    @keyup.enter="addTag" 
                    :inputType="'text'"
                    v-model="tag_input"
                    >
                    </input-comp>
                    <!-- Кнопка подтверждает добавление тега и отправляет его в массив addedTags -->
                    <button-comp @click="addTag">Подтвердить</button-comp>
                </div>


                <!-- Ввод СКИДКИ на товар -->
                <label class="for_input" for="">Укажите скидку для этого товара</label>
                <div class="select-discount-block">
                    <h1 v-show="!isEditDiscount" class="discount-value">{{discount}}%</h1>

                    <!-- Поле ручного ввода скидки товара -->
                    <div class="select-discount-block__change-block" v-show="isEditDiscount" >
                        <input-comp 
                        class="select-discount-block__input" 
                        placeholder="Скидка"
                        :inputType="'number'"
                        v-model="discount"
                        :style="(discount > 100 || !discount.length || discount < 0)? {border: '2px solid red'} : {border: '1px solid rgb(253, 148, 11)'}"
                        >
                        </input-comp>
                        <button 
                        title="Подтвердить" 
                        class="select-discount-block__input-btn"
                        @click="closeInputDiscount"
                        >
                            <i-ok class="select-discount-block__confirm-btn-ok"></i-ok>
                        </button>
                    </div>

                    <div class="select-discount-block__increment-btns">
                        <button @click="(discount > 0)? discount -= 5 : false" class="select-discount-block__increment-btn">-</button>
                        <button @click="(discount < 100)? discount += 5 : false" class="select-discount-block__increment-btn">+</button>
                    </div>

                    <div class="select-discount-block__confirm-btns">

                        <button 
                        title="Изменить" 
                        class="select-discount-block__confirm-btn"
                        @click="editDiscount"
                        >
                            <i-pencil class="select-discount-block__confirm-btn-edit"></i-pencil>
                        </button>

                        <button 
                        title="Подтвердить" 
                        class="select-discount-block__confirm-btn"
                        @click="confirmDiscount"
                        >
                            <i-ok class="select-discount-block__confirm-btn-ok"></i-ok>
                        </button>
                        <notification-mini-success 
                        class="success-confirm-dicsount" 
                        :show="isSuccessConfirmDiscount"
                        >
                            Скидка сохранена!
                        </notification-mini-success>

                    </div>
                    
                </div>
                
                
                <!-- Ввод ЦВЕТА товара -->
                <label class="for_input" for="colors">Добавьте цвет товара (можно несколько)</label>

                <!-- Компонент для отрисовки добавленных цветовых тегов -->
                <span class="tags_array">

                    <!-- Уведомление о том что цвет был уже выбран -->
                    <notification-mini-error 
                    :show="isColorAlreadyHas"
                    class="error-select-tag"
                    >
                        Вы уже добавили этот цвет
                    </notification-mini-error>

                    <!-- Подсказка -->
                    <p v-show="!colors.length" class="tags_array__hint">
                        {{ 
                            (isAddColor)? 
                            'Сюда будут встраиваться теги цветов которые вы добавляете' : 
                            'Чтобы добавить цвета нажмите на кнопку справа' 
                        }}
                    </p>
                    <!-- тег компонент цвета -->
                    <tag-comp class="tags_array__tag" v-for="color in colors">{{ color }}</tag-comp>
                    <!-- Кнопка добавления тега -->
                    <span class="append-tag-btn" v-show="!isAddColor" @click="isAddColor = true">
                        <i-upload></i-upload>
                    </span>
                </span>
                <!-- Поле для ввода цвета товара -->
                <div v-show="isAddColor" class="creator-product__item">
                    <input-comp 
                    class="creator-product__input" 
                    id="colors" 
                    placeholder="Цвет (Пример: Красный)"
                    @keyup.enter="addColor" 
                    :inputType="'text'"
                    v-model="color_input"
                    >
                    </input-comp>
                    <!-- Кнопка подтверждает добавление цвета и отправляет его в массив colors -->
                    <button-comp @click="addColor">Подтвердить</button-comp>
                </div>


                <!-- Ввод МАТЕРИАЛОВ для товара -->
                <label class="for_input" for="materials">Добавьте материал, входящий в состав товара (можно несколько)</label>

                <!-- Компонент для отрисовки добавленных тегов материала -->
                <span class="tags_array">

                    <!-- Уведомление о том что материал был уже выбран -->
                    <notification-mini-error 
                    :show="isMaterialAlreadyHas"
                    class="error-select-tag"
                    >
                        Вы уже добавили этот материал
                    </notification-mini-error>

                    <!-- Подсказка -->
                    <p v-show="!materials.length" class="tags_array__hint">
                        {{ 
                            (isAddMaterial)? 
                            'Сюда будут встраиваться теги материалов которые вы добавляете' : 
                            'Чтобы добавить материалы нажмите на кнопку справа' 
                        }}
                    </p>
                    <!-- тег компонент матриала -->
                    <tag-comp class="tags_array__tag" v-for="material in materials">{{ material }}</tag-comp>
                    <!-- Кнопка добавления материала -->
                    <span class="append-tag-btn" v-show="!isAddMaterial" @click="isAddMaterial = true">
                        <i-upload></i-upload>
                    </span>
                </span>
                <!-- Поле для ввода материалов товара -->
                <div v-show="isAddMaterial" class="creator-product__item">
                    <input-comp 
                    class="creator-product__input" 
                    id="materials" 
                    placeholder="Материал (Пример: Полиэстер)"
                    @keyup.enter="addMaterial" 
                    :inputType="'text'"
                    v-model="material_input"
                    >
                    </input-comp>
                    <!-- Кнопка подтверждает добавление цвета и отправляет его в массив colors -->
                    <button-comp @click="addMaterial">Подтвердить</button-comp>
                </div>


                <!-- Ввод СТРАНЫ ПРОИЗВОДСТВА товара -->
                <label class="for_input" for="country_origin">Укажите страну-производителя товара</label>
                <div class="creator-product__item">
                    <input-comp 
                    class="creator-product__input" 
                    id="country_origin" 
                    placeholder="Страна производства"
                    :inputType="'text'"
                    >
                    </input-comp>
                    <button-comp>Подтвердить</button-comp>
                </div>


                <!-- Ввод ОПИСАНИЯ для товара -->
                <label class="for_input" for="description" @click="log">Добавьте описание к товару (макс 1000 символов)</label>
                <div class="creator-product__item">

                    <!-- Уведомление о том что поле ввода пустое -->
                    <notification-mini-error 
                    class="error-description-empty"
                    :show="isDescriptionEmpty"
                    @click="isDescriptionEmpty = false"
                    >
                        Поле ввода пустое!
                    </notification-mini-error>

                    <!-- Блок показывает написанное описание товара -->
                    <div
                    class="description-ready-text"
                    v-show="isConfirmDescription"
                    >
                        {{ description }}

                        <button 
                        title="Изменить" 
                        class="description-ready-text__edit-btn"
                        @click="editDescription"
                        >
                            <i-pencil class="description-ready-text__edit-btn--pencil"></i-pencil>
                        </button>
                        
                    </div>

                    <textarea 
                    class="description-area"
                    id="description"
                    :style="(darkMode)? 
                    {backgroundColor: 'rgb(33, 33, 33)', color: 'rgb(255, 205, 138)'} :
                    {backgroundColor: '', color: ''}"
                    placeholder="Введите описание товара"
                    v-show="!isConfirmDescription"
                    v-model="description"
                    maxlength="1000"
                    >
                    </textarea>
                    <button 
                    class="description-area__btn"
                    title="Подтвердить" 
                    v-show="!isConfirmDescription"
                    @click="confirmDescription"
                    >
                        <i-ok class="description-area__btn-ok"></i-ok>
                    </button>
                </div>


                <!-- Добавление КАРТИНОК товара -->
                <label class="for_input" for="images" @click="log">Добавьте картинки для товара</label>
                <div 
                class="preview-images"
                :style="(!images.length)? {height: '200px'} : {height: ''}"
                >
                    <p 
                    class="preview-images__hint" 
                    v-show="!images.length"
                    >
                        Здесь будут отображаться изображения товара, которые вы добавляете
                    </p>
                    <!-- Превью-блок который отображает превью-картинку и кнопку ее удаления -->
                    <div 
                    class="image-preview-item-container"
                    v-show="images.length" 
                    v-for="image in images"
                    >
                        <!-- Превью картинка -->
                        <img 
                        class="image-preview-item"
                        :src="image" 
                        alt="preview" 
                        >
                        <!-- Кнопка удаления картинки из превью-блока -->
                        <button 
                        class="del-image-btn"
                        title="Убрать"
                        @click="removeImage(image)" 
                        >
                            <i-close class="del-image-btn--cross"></i-close>
                        </button>
                    </div>
                </div>
                
                <inputImages class="input-images"  @getImages="appendImages">Добавить</inputImages>
                
                
                <!-- Ввод ОСТАТКОВ товара -->
                <label class="for_input" for="remains">Укажите количество этого товара на складе (в наличии)</label>
                <div class="select-discount-block">
                    <h1 v-show="!isEditRemains" class="discount-value">{{remains}}</h1>
      
                    
                    <!-- Поле ручного ввода количества товара -->
                    <div class="select-discount-block__change-block" v-show="isEditRemains" >
                        <input-comp 
                        class="select-discount-block__input" 
                        id="remains"
                        placeholder="Количество"
                        :inputType="'number'"
                        v-model="remains"
                        :style="(!remains.length || remains < 0)? {border: '2px solid red'} : {border: '1px solid rgb(253, 148, 11)'}"
                        >
                        </input-comp>
                        <button 
                        title="Подтвердить" 
                        class="select-discount-block__input-btn"
                        @click="closeInputRemains"
                        >
                            <i-ok class="select-discount-block__confirm-btn-ok"></i-ok>
                        </button>
                    </div>

                    <div class="select-discount-block__increment-btns">
                        <button @click="(remains > 0)? remains-- : false" class="select-discount-block__increment-btn">-</button>
                        <button @click="remains++" class="select-discount-block__increment-btn">+</button>
                    </div>

                    <div class="select-discount-block__confirm-btns">

                        <button 
                        title="Изменить" 
                        class="select-discount-block__confirm-btn"
                        @click="editRemains"
                        >
                            <i-pencil class="select-discount-block__confirm-btn-edit"></i-pencil>
                        </button>

                        <button 
                        title="Подтвердить" 
                        class="select-discount-block__confirm-btn"
                        @click="confirmRemains"
                        >
                            <i-ok class="select-discount-block__confirm-btn-ok"></i-ok>
                        </button>
                        <notification-mini-success 
                        class="success-confirm-dicsount" 
                        :show="isSuccessConfirmRemains"
                        >
                            Количество товара сохранено!
                        </notification-mini-success>

                    </div>
                    
                </div>


                <!-- Акционный блок -->
                <div class="creator-product__item">
                    
                    <h2>[ Акционный блок, в стадии разработки ]</h2>

                </div>

                <div class="form--btns">
                    <button-comp class="form--btns__send-cheking-btn">Отправить данные на проверку</button-comp>
                </div>

            </form>
        </div>

    </div> 

</template>

<script>
import ShowTemplate from '@/mixins/ShowTemplate';
import inputImages from '@/components/ManagerPage/inputImages.vue'
import { mapState } from 'vuex';
import _ from 'lodash'
export default {
    components: {
        inputImages,
    },
    mixins: [ShowTemplate],
    props: {
        show:{
            required: true,
        }
    },
    data: () => ({

        // Артикул
        article: null,

        // Теги
        isAddTag: false,
        // addedTags: [ "шерстяные изделия", "что-то ещё", "шапки",  "шерстяные изделия", "что-то ещё",],
        addedTags: [],
        tag_input: '',
        isTagAlreadyHas: false,

        // Скидка
        discount: 0,
        isEditDiscount: false,
        isSuccessConfirmDiscount: false,

        // Цвета
        colors: [],
        isAddColor: false,
        color_input: '',
        isColorAlreadyHas: false,
        
        // Материалы
        materials: [],
        isAddMaterial: false,
        material_input: '',
        isMaterialAlreadyHas: false,

        // Страна производства
        country_origin: '',

        // Описание товара
        description: '',
        isConfirmDescription: false,
        isDescriptionEmpty: false,

        // Изображения товара
        images: [],

        // Скидка
        remains: 0,
        isEditRemains: false,
        isSuccessConfirmRemains: false,

        group_name: '',
        category_name: '',
        groups: [
            {id: 1, name: 'Зима'},
            {id: 2, name: 'Лето'},
        ],
        categories: {
            'Зима': [{id: 1, name: 'Головные уборы'}, {id: 2, name: 'Куртки'},],
            'Лето': [{id: 1, name: 'Головные уборы'}, {id: 2, name: 'Футболки'},],
        }
    }),
    methods: {
        log(){
            console.log(this.images);
        },

        // Метод добавляет теги в массив addedTags
        addTag(){
            if(!this.addedTags.includes(this.tag_input.toLowerCase())){
                this.addedTags.push(this.tag_input.toLowerCase())
                this.tag_input = ''
                this.isAddTag = false
            }else{
                this.isTagAlreadyHas = true
                setTimeout(() => {
                    this.isTagAlreadyHas = false
                }, 1500)
            }
        },

        // Метод добавляет цвета в массив colors
        addColor(){
            if(!this.colors.includes(this.color_input.toLowerCase())){
                this.colors.push(this.color_input.toLowerCase())
                this.color_input = ''
                this.isAddColor = false
            }else{
                this.isColorAlreadyHas = true
                setTimeout(() => {
                    this.isColorAlreadyHas = false
                }, 1500)
            }
        },

        // Метод добавляет материалы в массив materials
        addMaterial(){
            if(!this.materials.includes(this.material_input.toLowerCase())){
                this.materials.push(this.material_input.toLowerCase())
                this.material_input = ''
                this.isAddMaterial = false
            }else{
                this.isMaterialAlreadyHas = true
                setTimeout(() => {
                    this.isMaterialAlreadyHas = false
                }, 1500)
            }
        },

        // Метод скрывает поле кастомного ввода скидки
        closeInputDiscount(){
            if(this.discount <= 100 && this.discount >= 0){
                this.isEditDiscount = false
            }
            if(!this.discount.length){
                this.discount = 0
            }
        },

        editDiscount(){
            this.isEditDiscount = true
        },

        confirmDiscount(){
            this.isSuccessConfirmDiscount = true
            setTimeout(() => {
                this.isSuccessConfirmDiscount = false
            }, 1500)
        },

        // Метод обновляет поле description, все что вводит клиент в text-area попадает в description
        updateDescription(value){
            let descr_words = this.description.split('')
            descr_words.push(value)
            this.description = descr_words.join('')
        },

        // Метод подтверждает ввод ОПИСАНИЯ товара и включает блок в который встраивается текст описания
        confirmDescription(){
            if(this.description.length && _.trim(this.description) !== ''){
                this.isConfirmDescription = true
            }else{
                this.isDescriptionEmpty = true
                setTimeout(() => {
                    this.isDescriptionEmpty = false
                }, 1500)
            }
        },

        // Метод включает редактирование ОПИСАНИЯ товара
        editDescription(){
            this.isConfirmDescription = false
        },

        // Метод добавляет в массив картинки пришедшие из формы ввода файлов
        appendImages(images){
            this.images = images
        },

        // Метод удаляет картинку из блока превью (массив images) 
        removeImage(image){
            this.images = this.images.filter(i => i !== image)
        },

        closeInputRemains(){
            if(this.remains >= 0){
                this.isEditRemains = false
            }
            if(!this.remains.length){
                this.remains = 0
            }
        },
        editRemains(){
            this.isEditRemains = true

        },
        confirmRemains(){
            this.isSuccessConfirmRemains = true
            setTimeout(() => {
                this.isSuccessConfirmRemains = false
            }, 1500)
        },

    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),

    },
    mounted(){
    },
  
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
.blockX{
    height: 600px;
    width: 100%;
    border: $border;
    border-radius: $radius;
}
.error-description-empty{
    right: 25px;
    top: 25px;
}
.error-select-tag{
    right: 0;
    bottom: -30px;
}
.preview-images{
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px;
    height: max-content;
    max-height: 310px;
    width: 95%;
    overflow-x: auto;
    border-radius: $radius;
    border: $border;
    box-shadow: $shadow;
    &::-webkit-scrollbar{
        height: 7px;
    }
}
.preview-images__hint{
    font-size: 18px;
    margin: 0 auto;
}
.input-images {
    margin-left: auto;
    margin-right: 25px;
}
.image-preview-item-container{
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 0 5px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgb(0, 0, 0, .6);
}
.image-preview-item{
    position: relative;
    width: 150px;
    border: $border;
    border-radius: 15px;
    margin: 0 5px;
}
.del-image-btn{
    position: absolute;
    right: 15px;
    top: 10px;
    padding: 2px 4px;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(33, 33, 33, .8);
    .del-image-btn--cross{
        width: 18px;
        height: 18px;
        top: 2px;
        left: 0;
    }
}
.creator-product{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: max-content;
    .creator-product__header{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
        padding-bottom: 5px;
        border-bottom: $border;
    }
    .creator-product__title{
        font-size: 1.4em;
        padding: 0 15px;
    }
    .creator-product__body{
        display: flex;
        width: 100%;
        max-height: 70vh;
        overflow-y: auto;
        height: max-content;
        margin-bottom: 20px;
        &::-webkit-scrollbar{
            width: 10px;
        }
    }
    .creator-product__form{
        position: relative;
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;


        .creator-product__item{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 95%;
            height: max-content;
            border-radius: $radius;
            box-shadow: $shadow;
            margin-bottom: 40px;

            .description-ready-text{
                display: flex;
                width: 100%;
                height: max-content;
                align-items: center;
                justify-content: flex-start;
                border: $border;
                border-radius: 10px;
                padding: 15px 10px;
                margin-top: 7px;
                .description-ready-text__edit-btn{
                    position: absolute;
                    box-shadow: 2px 8px 15px rgb(0 0 0 / 29%);
                    bottom: 5px;
                    right: 10px;
                    padding: 8px;
                    border-radius: 20px;
                    background-color: rgba(0, 0, 0, 0);
                    border: none;
                    cursor: pointer;
                }
                .description-ready-text__edit-btn--pencil{
                    top: 0;
                    left: 0;
                }
            }
            .description-area {
                resize: none;
                width: 100%;
                height: 200px;
                padding: 10px;
                margin: 10px;
                border-radius: 10px;
                outline: 1px solid rgba(0, 0, 0, 0);
                font-size: 18px;
                border: 1px solid rgb(38, 93, 128);
                &::-webkit-scrollbar{
                    width: 7px;
                    height: 7px;
                }
            }
            .description-area__btn{
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                right: 25px;
                bottom: 25px;
                border: 1px solid rgba(253, 148, 11, .9);
                background: rgba(33, 33, 33, 0.76);
                padding: 5px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                box-shadow: $shadow;
                cursor: pointer;
            }
            .description-area__btn-ok{
                width: 18px;
                height: 18px;
            }

        }
        .tags_array{
            position: relative;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 80%;
            height: -moz-max-content;
            height: max-content;
            padding: 10px;
            margin: 10px 0 30px 0;
            border: 1px solid rgb(253, 148, 11);
            border-radius: 15px;
            box-shadow: $shadow;
            .tags_array__hint{
                opacity: .75;
                cursor: default;
            }
            .append-tag-btn{
                width: -moz-max-content;
                width: max-content;
                height: -moz-max-content;
                height: max-content;
                position: relative;
                margin-left: auto;
                padding: 2px;
                cursor: pointer;
            }

        }
        .select-discount-block{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 160px;
            height: -moz-max-content;
            height: max-content;
            padding: 10px 30px 0 30px;
            border: 1px solid rgb(253, 148, 11);
            border-radius: 15px;
            box-shadow: 2px 8px 15px rgb(0 0 0 / 29%);
            margin: 5px 0 30px 0;
            .discount-value{
                font-size: 2.5em;
                border-bottom: $border;     
                padding: 0 5px;           
            }
            .select-discount-block__change-block{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .select-discount-block__input{
                width: 80px;
            }

            .select-discount-block__input-btn{
                position: relative;
                width: 20%;
                right: -4px;
                background: none;
                border: none;
                height: max-content;
                cursor: pointer;
            }

            .select-discount-block__increment-btns{
                display: flex;
                justify-content: space-around;
                width: 100%;
                height: max-content;
                // border: $border;
                margin-top: 5px;
                padding: 5px;
            }
            .select-discount-block__increment-btn{
                color: rgb(253, 148, 11);
                cursor: pointer;
                font-size: 42px;
                background-color: rgba(0, 0, 0, 0);
                border: none;
                // margin: 0 2px;
            }
            .select-discount-block__confirm-btns{
                display: flex;
                width: 100%;
                justify-content: space-between;
            }
            .select-discount-block__confirm-btn{
                position: relative;
                box-shadow: $shadow;
                top: -7px;
                padding: 3px;
                border-radius: 20px;
                background-color: rgba(0, 0, 0, 0);
                border: none;
                cursor: pointer;
            }
            .select-discount-block__confirm-btn-edit{
                top: 0;
                left: 0;
            }
            .select-discount-block__confirm-btn-ok{
                width: 20px;
                height: 20px;
            }
            .success-confirm-dicsount{
                position: absolute;
                top: 0;
                top: -26px;
                right: -201px;
            }
        }
        .for_input{
            position: relative;
            width: -moz-max-content;
            width: max-content;
            margin-right: auto;
            margin-bottom: 2px;
            left: 30px;
            font-size: 18px;
        }
        .for_radio-select{
            position: relative;
            width: -moz-max-content;
            width: max-content;
            margin-right: auto;
            margin-bottom: 7px;
            left: 30px;
            font-size: 19px;
        }
        .creator-product__input{
            width: 80%;
        }
        .creator-product__select-radio{
            margin-left: 30px;
            width: 80%;
        }
        .form--btns{
            width: 100%;
            height: max-content;
            display: flex;
            align-items: center;
            padding: 5px 20px;
            margin-top: 10px;
            .form--btns__send-cheking-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                font-size: 18px;
            }
        }
    }
}

</style>