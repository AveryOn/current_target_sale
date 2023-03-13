<!-- ОКНО СОЗДАНИЯ НОВОГО ТОВАРА, ТАКЖЕ ИСПОЛЬЗУЕТСЯ И В OWNER СТРАНИЦЕ -->
<template>

    <div class="creator-product" v-show="show">
        
        <div class="creator-product__header">
            <h2 class="creator-product__title">Заполните поля формы для создания нового товара</h2>
        </div>

        <div class="creator-product__body">
            <form class="creator-product__form" @submit.prevent>

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

            </form>
        </div>

    </div> 

</template>

<script>
import ShowTemplate from '@/mixins/ShowTemplate';
export default {
    mixins: [ShowTemplate],
    props: {
        show:{
            required: true,
        }
    },
    data: () => ({
        isAddTag: false,
        // addedTags: [ "шерстяные изделия", "что-то ещё", "шапки",  "шерстяные изделия", "что-то ещё",],
        addedTags: [],
        tag_input: '',

        discount: 0,
        isEditDiscount: false,
        isSuccessConfirmDiscount: false,

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
            console.log(this.discount.length);
        },
        addTag(){
            this.addedTags.push(this.tag_input.toLowerCase())
            this.tag_input = ''
            this.isAddTag = false
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
        }
    }
  
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
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
        // border: $border;
        // padding: 10px 0;
        margin-bottom: 20px;
    }
    .creator-product__form{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .creator-product__item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 95%;
            height: max-content;
            border-radius: $radius;
            box-shadow: $shadow;
            margin-bottom: 30px;
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
            margin: 5px 0 5px 0;
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
    }
}

</style>