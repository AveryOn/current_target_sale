<!-- ОКНО РЕДАКТИРОВАНИЯ ИМЕЮЩЕГОСЯ ТОВАРА, ТАКЖЕ ИСПОЛЬЗУЕТСЯ И В OWNER СТРАНИЦЕ -->
<template>
    <div class="editor-product" v-show="show">
    
        <div class="editor-product__header">
            <h2 class="editor-product__title">Внесите изменения в поля выбранного товара</h2>
        </div>

        <div class="editor-product__body">

            <form v-show="true" class="editor-product__form" @submit.prevent>
                
                <!-- Редактирование НАИМЕНОВАНИЯ товара -->
                <label 
                    class="for_input" 
                    for="name"
                    :style="(productDataEdit.name !== null && productDataEdit.name !== productDataBase.name)? {color: '#15ea15'} : {color: ''}"
                    >
                    <i-ok class="ready-icon-success" v-show="(productDataEdit.name !== null && productDataEdit.name !== productDataBase.name)"></i-ok> 
                    Измените наименование товара
                </label>

                <!-- Отображение текущего НАИМЕНОВАНИЯ -->
                <div class="example-data">
                    <p class="example-data_text">
                        {{ (productDataEdit.name !== null)? productDataEdit.name : productDataBase.name }}
                    </p>

                    <!-- Кнопка редактирования НАИМЕНОВАНИЯ -->
                    <button
                        v-show="!isEditName"
                        title="Изменить" 
                        class="example-data_edit-btn"
                        @click="isEditName = true"
                        >
                            <i-pencil class="example-data_edit-btn--pencil"></i-pencil>
                    </button>

                    <!-- Кнопка отмены редактирования НАИМЕНОВНИЯ -->
                    <button
                        v-show="isEditName"
                        title="Отмена" 
                        class="example-data_cancel-btn"
                        @click="isEditName = false"
                        >
                            <i-close class="example-data_cancel-btn--cross"></i-close>
                    </button>
                </div>

                <div v-show="isEditName" class="editor-product__item">

                    <!-- Уведомление о незаполненном поле -->
                    <notification-mini-error 
                    :show="nameIsEmpty"
                    class="error-input"
                    @click="nameIsEmpty = false"
                    >
                        Вы не внесли изменений!
                    </notification-mini-error>

                    <notification-mini-success 
                    class="success-input" 
                    :show="nameSuccess"
                    @click="nameSuccess = false"
                    >
                        Наименование товара сохранено!
                    </notification-mini-success>

                    <input-comp 
                    class="editor-product__input" 
                    id="name" 
                    placeholder="Наименование"
                    :inputType="'text'"
                    v-model="name"
                    >
                    </input-comp>
                    <button-comp @click="confirmName">Подтвердить</button-comp>
                </div>


                <!-- Редактирование ЦЕНЫ товара -->
                <label 
                class="for_input" 
                :style="(productDataEdit.price !== null && productDataEdit.price !== productDataBase.price)? {color: '#15ea15'} : {color: ''}"
                for="price"
                >
                    <i-ok class="ready-icon-success" v-show="productDataEdit.price !== null && productDataEdit.price !== productDataBase.price"></i-ok> 
                    Укажите цену товара
                </label>

                <!-- Отображение текущей ЦЕНЫ товара -->
                <div class="example-data">
                    <p class="example-data_text">
                        {{ (productDataEdit.price !== null)? productDataEdit.price : productDataBase.price }}
                    </p>

                    <!-- Кнопка редактирования НАИМЕНОВАНИЯ -->
                    <button
                        v-show="!isEditPrice"
                        title="Изменить" 
                        class="example-data_edit-btn"
                        @click="isEditPrice = true"
                        >
                            <i-pencil class="example-data_edit-btn--pencil"></i-pencil>
                    </button>

                    <!-- Кнопка отмены редактирования НАИМЕНОВНИЯ -->
                    <button
                        v-show="isEditPrice"
                        title="Отмена" 
                        class="example-data_cancel-btn"
                        @click="isEditPrice = false"
                        >
                            <i-close class="example-data_cancel-btn--cross"></i-close>
                    </button>
                </div>

                <div class="editor-product__item" v-show="isEditPrice">

                    <!-- Уведомление о незаполненном поле -->
                    <notification-mini-error 
                    :show="priceIsEmpty"
                    class="error-input"
                    @click="priceIsEmpty = false"
                    >
                        Это поле пустое!
                    </notification-mini-error>

                    <notification-mini-success 
                    class="success-input" 
                    :show="priceSuccess"
                    @click="priceSuccess = false"
                    >
                        Цена сохранена!
                    </notification-mini-success>

                    <input-comp 
                    class="editor-product__input" 
                    id="price" 
                    placeholder="Цена"
                    :inputType="'number'"
                    v-model="price"
                    ></input-comp>
                    <button-comp @click="confirmPrice">Подтвердить</button-comp>
                </div>


                <!-- Редактирование ГРУППЫ товара -->
                <label 
                    class="for_input" 
                    for="group_name"
                    :style="(productDataEdit.group_name !== null && productDataEdit.group_name !== productDataBase.group_name)? {color: '#15ea15'} : {color: ''}"
                    >
                    <i-ok class="ready-icon-success" v-show="(productDataEdit.group_name !== null && productDataEdit.group_name !== productDataBase.group_name)"></i-ok> 
                    Группа товара
                </label>

                <!-- Отображение текущей ГРУППЫ товара -->
                <div class="example-data">
                    <p class="example-data_text">
                        {{ (productDataEdit.group_name !== null)? productDataEdit.group_name : productDataBase.group_name }}
                    </p>

                    <!-- Кнопка редактирования ГРУППЫ товара -->
                    <button
                        v-show="!isEditGroup"
                        title="Изменить" 
                        class="example-data_edit-btn"
                        @click="isEditGroup = true"
                        >
                            <i-pencil class="example-data_edit-btn--pencil"></i-pencil>
                    </button>

                    <!-- Кнопка отмены редактирования ГРУППЫ товара -->
                    <button
                        v-show="isEditGroup"
                        title="Отмена" 
                        class="example-data_cancel-btn"
                        @click="isEditGroup = false"
                        >
                            <i-close class="example-data_cancel-btn--cross"></i-close>
                    </button>
                </div>

                <div class="editor-product__item" v-show="isEditGroup">
                    <!-- Уведомление о не выбранной радио-кнопке -->
                    <notification-mini-error 
                    :show="groupNameIsEmpty"
                    class="error-input"
                    @click="groupNameIsEmpty = false"
                    >
                        Вы не выбрали группу товара!
                    </notification-mini-error>

                    <notification-mini-success 
                    class="success-input" 
                    :show="groupNameSuccess"
                    @click="groupNameSuccess = false"
                    >
                        Группа товара сохранена!
                    </notification-mini-success>

                    <div class="editor-product__select-radio">
                        <radio-button
                        v-for="group in groups"
                        id="group_name"
                        :name="'group_name'"
                        :value="group.name"
                        v-model="group_name"
                        :radioData="productDataBase.group_name"
                        :key="group.id"
                        >
                        </radio-button>
                    </div>
                    <button-comp @click="confirmGroupName">Подтвердить</button-comp>
                </div>


                <!-- Редактирование КАТЕГОРИИ товара -->
                <label 
                    class="for_input" 
                    for="category_name"
                    :style="(productDataEdit.category_name !== null && productDataEdit.category_name !== productDataBase.category_name)? {color: '#15ea15'} : {color: ''}"
                    >
                    <i-ok class="ready-icon-success" v-show="(productDataEdit.category_name !== null && productDataEdit.category_name !== productDataBase.category_name)"></i-ok> 
                    Категория товара
                </label>

                <!-- Отображение текущей КАТЕГОРИИ товара -->
                <div class="example-data">
                    <p class="example-data_text">
                        {{ (productDataEdit.category_name !== null)? productDataEdit.category_name : productDataBase.category_name }}
                    </p>

                    <!-- Кнопка редактирования КАТЕГОРИИ товара -->
                    <button
                        v-show="!isEditCategory"
                        title="Изменить" 
                        class="example-data_edit-btn"
                        @click="isEditCategory = true"
                        >
                            <i-pencil class="example-data_edit-btn--pencil"></i-pencil>
                    </button>

                    <!-- Кнопка отмены редактирования КАТЕГОРИИ товара -->
                    <button
                        v-show="isEditCategory"
                        title="Отмена" 
                        class="example-data_cancel-btn"
                        @click="isEditCategory = false"
                        >
                            <i-close class="example-data_cancel-btn--cross"></i-close>
                    </button>
                </div>

                <div class="editor-product__item" v-show="isEditCategory">
                    <!-- Уведомление о не выбранной радио-кнопке -->
                    <notification-mini-error 
                    :show="categoryNameIsEmpty"
                    class="error-input"
                    @click="categoryNameIsEmpty = false"
                    >
                        Вы не выбрали категорию товара!
                    </notification-mini-error>

                    <notification-mini-success 
                    class="success-input" 
                    :show="categoryNameSuccess"
                    @click="categoryNameSuccess = false"
                    >
                        Категория товара сохранена!
                    </notification-mini-success>

                    <div class="editor-product__select-radio">
                        <radio-button
                        v-for="category in (productDataBase.group_name === 'Лето')? categories['Лето'] : categories['Зима']"
                        id="category_name"
                        :name="'category_name'"
                        :value="category.name"
                        v-model="category_name"
                        :radioData="productDataBase.category_name"
                        :key="category.id"
                        >
                        </radio-button>
                    </div>
                    <button-comp @click="confirmCategoryName">Подтвердить</button-comp>
                </div>


                <!-- Редактирование ТЕГОВ товара -->
                <label class="for_input" for="tags">Добавьте или измените существующие теги этого товара</label>
                
                <!-- Компонент для отрисовки добавленных тегов -->
                <span class="tags_array">

                    <!-- Уведомление об успешном ДОБАВЛЕНИИ тега -->
                    <notification-mini-success 
                    class="success-input" 
                    :show="tagSuccess"
                    @click="tagSuccess = false"
                    >
                        Тег добавлен!
                    </notification-mini-success>

                    <!-- Уведомление об успешном РЕДАКТИРОВАНИИ тега -->
                    <notification-mini-success 
                    class="success-input" 
                    :show="tagEditSuccess"
                    @click="tagEditSuccess = false"
                    >
                        Тег успешно изменен!
                    </notification-mini-success>

                    <!-- Подсказка -->
                    <p v-show="!productDataBase.tags.length" class="tags_array__hint">Чтобы добавить теги нажмите на кнопку справа</p>
                    <!-- тег компонент -->
                    <div class="editor-tag" v-for="tag in productDataBase.tags">
                        {{ tag }}
                        <button 
                        :style="(darkMode)? {backgroundColor: 'rgba(36, 33, 33, 1)'} : {backgroundColor: ''}" 
                        title="Изменить"
                        class="edit-tag-btn"
                        @click="editTag(tag)"
                        >
                            <i-pencil class="edit-tag-btn--pencil"></i-pencil>
                        </button>
                    </div>
                    <!-- <tag-comp class="tags_array__tag" v-for="tag in productDataBase.tags">{{ tag }}</tag-comp> -->
                    <!-- Кнопка добавления тега -->
                    <span class="append-tag-btn" v-show="!isAddTag" @click="isAddTag = true">
                        <i-upload></i-upload>
                    </span>

                </span>

                <!-- Поле для ввода тега -->
                <div v-show="isAddTag" class="editor-product__item">
                    <input-comp 
                    class="editor-product__input" 
                    id="tags" 
                    placeholder="Наименование тега"
                    :inputType="'text'"
                    v-model="tag_input"
                    >
                    </input-comp>
                    <!-- Кнопка подтверждает добавление тега и отправляет его в массив productDataEdit.tags -->
                    <button-comp @click="addTag">Подтвердить</button-comp>
                </div>

            </form>
            
        </div>
        

    </div>
</template>
<script>
import ShowTemplate from '@/mixins/ShowTemplate';
import { mapState } from 'vuex';
export default {
    mixins: [ShowTemplate],
    props: {
        show:{
            type: [Boolean],
            required: true,
        }
    },

    data: () => ({

        // Данные для редактирования которые приходят с сервера
        productDataBase: {
            name: 'Shoes',
            price: 599,
            group_name: 'Лето',
            category_name: 'Футболки',
            tags: ["шерстяные изделия", "что-то ещё", "шапки",  "шерстяные изделия", "что-то ещё",],
            discount: null,     // =Необязательный параметр
            specifications: {colors: [], materials: []},
            country_origin: null,
            description: null,
            images: [],
            promotion: null,     // =Необязательный параметр
            remains: null,
        },

        // Поля в которые вносятся изменения товара
        productDataEdit: {
            name: null,
            price: null,
            group_name: null,
            category_name: null,
            tags: [],
            discount: null,     // =Необязательный параметр
            specifications: {colors: [], materials: []},
            country_origin: null,
            description: null,
            images: [],
            promotion: null,     // =Необязательный параметр
            remains: null,
        },

        // Name
        name: '',
        isEditName: false,
        nameIsEmpty: false,
        nameSuccess: false,

        // Цена
        price: '',
        isEditPrice: false,
        priceIsEmpty: false,
        priceSuccess: false,

        // Группа
        group_name: '',
        isEditGroup: false,
        groupNameIsEmpty: false,
        groupNameSuccess: false,
        groups: [
            {id: 1, name: 'Зима'},
            {id: 2, name: 'Лето'},
        ],

        // Категория
        category_name: '',
        isEditCategory: false,
        categoryNameIsEmpty: false,
        categoryNameSuccess: false,
        categories: {
            'Зима': [{id: 1, name: 'Головные уборы'}, {id: 2, name: 'Куртки'},],
            'Лето': [{id: 1, name: 'Головные уборы'}, {id: 2, name: 'Футболки'},],
        },

        // Теги
        isAddTag: false,
        // addedTags: [ "шерстяные изделия", "что-то ещё", "шапки",  "шерстяные изделия", "что-то ещё",],
        tag_input: '',
        tagIsEmpty: false,
        isTagAlreadyHas: false,
        tagSuccess: false,
        tagEditSuccess: false,

        // Цвета
        isAddColor: false,
        colorSuccess: false,
        color_input: '',
        isColorAlreadyHas: false,


        // Страна производства
        country_origin: '',
        countryOriginIsEmpty: false,
        countryOriginSuccess: false,


        // Скидка
        discount: 0,
        isEditDiscount: false,
        isSuccessConfirmDiscount: false,


        // Материалы
        materials: [],
        isAddMaterial: false,
        material_input: '',
        isMaterialAlreadyHas: false,


        // Описание товара
        description: '',
        isConfirmDescription: false,
        isDescriptionEmpty: false,

        // Изображения товара
        images: [],
        
        // Остаток
        remains: 0,
        isEditRemains: false,
        isSuccessConfirmRemains: false,
    }),
    
    methods: {
        log(){
            console.log(this.productData);
        },

        // Метод добавляет Наименование товара в обьект productDataEdit
        confirmName(){
    
            if(this.name !== ''){
                this.productDataEdit.name = this.name
                this.name = ''
                this.nameSuccess = true
                setTimeout(() => {
                    this.nameSuccess = false
                    this.isEditName = false
                }, 1500)
                this.log()
    
            }else{
                this.nameIsEmpty = true
                setTimeout(() => {
                    this.nameIsEmpty = false
                }, 1500)
            }
    
        },

        // Метод добавляет Цену товара в обьект productDataEdit
        confirmPrice(){
            if(this.price !== ''){
                this.productDataEdit.price = this.price
                this.price = ''
                this.priceSuccess = true
                setTimeout(() => {
                    this.priceSuccess = false
                    this.isEditPrice = false
                }, 1500)
                this.log()

            }else{
                this.priceIsEmpty = true
                setTimeout(() => {
                    this.priceIsEmpty = false
                    this.isEditPrice = false
                }, 1500)
            }
        },

        // Метод добавляет Название группы товара в обьект productDataEdit
        confirmGroupName(){
            if(this.group_name !== ''){
                this.productDataEdit.group_name = this.group_name
                // this.group_name = ''
                this.groupNameSuccess = true
                setTimeout(() => {
                    this.groupNameSuccess = false
                    this.isEditGroup = false
                }, 1500)
                this.log()

            }else{
                this.groupNameIsEmpty = true
                setTimeout(() => {
                    this.groupNameIsEmpty = false
                    this.isEditGroup = false
                }, 1500)
            }
        },

        // Метод добавляет Название категории товара в обьект productDataEdit
        confirmCategoryName(){
            if(this.category_name !== ''){
                this.productDataEdit.category_name = this.category_name
                this.categoryNameSuccess = true
                setTimeout(() => {
                    this.categoryNameSuccess = false
                }, 1500)
                this.log()

            }else{
                this.categoryNameIsEmpty = true
                setTimeout(() => {
                    this.categoryNameIsEmpty = false
                    this.isEditCategory = false
                }, 1500)
            }
        },

        // Метод добавляет теги в массив sendProductData.tags
        addTag(){
            if(!this.productDataBase.toLowerCase().tags.includes(this.tag_input.toLowerCase())){
                this.sendProductData.tags.push(this.tag_input.toLowerCase())
                this.tagSuccess = true
                setTimeout(() => {
                    this.tagSuccess = false
                }, 1500)
                this.tag_input = ''
                this.isAddTag = false
                this.log()
            }else{
                this.isTagAlreadyHas = true
                setTimeout(() => {
                    this.isTagAlreadyHas = false
                }, 1500)
            }
        },
        editTag(tag_value){
            this.isAddTag = true
            this.tag_input = tag_value
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
@include h1-gradient;
@include h2-gradient;
.editor-product{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    padding: 0 0 25px 0;
    height: max-content;
    .editor-product__header{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0 5px 0;
        padding-bottom: 5px;
        border-bottom: $border;
    }
    .editor-product__title{
        font-size: 1.4em;
        padding: 0 15px;
    }
    .editor-product__body{
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
    .editor-product__form{
        position: relative;
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        // padding-top: 20px;
    }
    .for_input{
        position: relative;
        width: -moz-max-content;
        width: max-content;
        margin-right: auto;
        margin-top: 25px;
        margin-bottom: 2px;
        left: 30px;
        font-size: 18px;
    }
    .ready-icon-success{
        position: absolute;
        fill: #15ea15;
        left: -28px;
        width: 20px;
        height: 20px;
    }
    .editor-product__item{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        height: max-content;
        border-radius: $radius;
        box-shadow: $shadow;
        margin-bottom: 40px;
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
    }
    .editor-product__select-radio{
        position: relative;
        right: -45px;
    }
    .editor-product__input{
        width: 80%;
    }
    .error-input{
        top: -36px;
        right: 10px;
    }
    .success-input{
        top: -36px;
        right: 10px;
    }
    .example-data{
        width: 95%;
        height: max-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        border-radius: $radius;
        border: $border;
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
    .example-data_edit-btn{
        position: relative;
        box-shadow: $shadow;
        padding: 3px 5px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        cursor: pointer;
        .example-data_edit-btn--pencil{
            top: 0;
            left: 0;
        }
    }
    .example-data_cancel-btn{
        position: relative;
        box-shadow: $shadow;
        padding: 3px 5px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        cursor: pointer;
        .example-data_cancel-btn--cross{
            width: 16px;
            height: 16px;
            top: 0;
            left: 0;
        }
    }
    .editor-tag{
        display: flex;
        align-items: center;
        border-radius: $radius;
        padding: 0 8px;
        margin: 1px 5px;
        color: $or-wh-txt;
        transition: all 0.1s ease;
        background: $background-gr;
        color: rgb(255, 255, 255);
        font-size: 18px;
        &:hover{
            cursor: pointer;
            background-color: rgba(0,0,0, .2);
        }
        .edit-tag-btn{
            position: relative;
            right: -5px;
            display: flex;
            align-items: center;
            width: 22px;
            height: 22px;
            padding: 4px;
            justify-content: center;
            background-color: white;
            margin: 2px;
            border-radius: $radius;
            border: none;
            &:hover{
                cursor: pointer;
            }
        }
        .edit-tag-btn--pencil{
            display: flex;
            align-self: center;
            height: 20px;
            width: 20px;
            left: 0;
            top: 0;
        }
    }
}
// @include darkMode_with_font;
</style>