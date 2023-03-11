
<!-- АККАУНТ КЛИЕНТА (ПОЛЬЗОВАТЕЛЯ ИЛИ СОТРУДНИКА) -->
<template>
    <!-- ГЛАВНЫЙ БЛОК -->
    <div class="account-main" :class="{'dark': darkMode}">


        <!-- МОДАЛЬНОЕ ОКНО ДЛЯ РЕДАКТИРОВАНИЯ ДАННЫХ АККАУНТА -->
        <modal-comp @click="log" :show="editDataMode">
            <div 
            class="account__menu-change-client-data" 
            :class="{'dark': darkMode}" 
            :style="(!darkMode)? {backgroundColor: 'white'} : {backgroundColor: ''}"
            >
                <!-- ПОДТВЕРЖДЕНИЕ ОЧИЩЕНИЯ ЭЛЕМЕНТА ДАННЫХ -->
                <div 
                class="menu-change-client-data__confirm-block"
                v-show="confirmRemoveDataItem"
                >
                    <!-- <div class="menu-change-client-data__confirm-message"></div> -->
                    <notification-confirm
                    class="menu-change-client-data__confirm-message"
                    :show="confirmRemoveDataItem"
                    @eventYes="removeItemData"
                    @eventNo="cancelRemoveItemData"
                    >
                        Вы уверены, что хотите очистить это поле?
                    </notification-confirm>
                </div>

                <h2 class="menu-change-client-data__title">Редактирование профиля</h2>
                <i-close @click="editDataMode = false" class="menu-change-client-data__close-btn"></i-close>

                <!-- Имя -->
                <changeDataItem 
                @changeData="recordChangeData" 
                @reqRemoveDataItem="reqRemoveDataItem"
                :titleItem="'Имя'" 
                :valueItem="(changeUserData.name === null)? nameComuted : changeUserData.name" 
                :typeItem="typeItemChangeData.string"
                :nameItem="'name'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.name = false" 
                        :show="notifications.warning.name"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.name = false" 
                        :show="notifications.success.name"
                        >
                            Имя успешно изменено!
                        </notification-mini-success>
                    </template>

                </changeDataItem>


                <!-- Фамилия -->
                <changeDataItem 
                @changeData="recordChangeData" 
                @reqRemoveDataItem="reqRemoveDataItem"
                :titleItem="'Фамилия'" 
                :valueItem="(changeUserData.lastname === null)? lastnameComuted : changeUserData.lastname" 
                :typeItem="typeItemChangeData.string"
                :nameItem="'lastname'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.lastname = false" 
                        :show="notifications.warning.lastname"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.lastname = false" 
                        :show="notifications.success.lastname"
                        >
                        Фамилия успешно изменена!
                        </notification-mini-success>
                    </template>
                </changeDataItem>


                  <!-- Пол -->
                <changeDataItem 
                @changeData="recordChangeData"
                :titleItem="'Пол'" 
                :valueItem="(changeUserData.sex === null)? sexComuted : changeUserData.sex" 
                :typeItem="typeItemChangeData.radio"
                :nameItem="'sex'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.sex = false" 
                        :show="notifications.warning.sex"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.sex = false" 
                        :show="notifications.success.sex"
                        >
                        Пол успешно изменен!
                        </notification-mini-success>
                    </template>
                </changeDataItem>


                <!-- Никнейм -->
                <changeDataItem 
                @changeData="recordChangeData" 
                :titleItem="'Никнейм'" 
                :valueItem="(changeUserData.username === null)? usernameComuted : changeUserData.username" 
                :typeItem="typeItemChangeData.string"
                :nameItem="'username'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.username = false" 
                        :show="notifications.warning.username"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.username = false" 
                        :show="notifications.success.username"
                        >
                        Никнейм успешно изменен!
                        </notification-mini-success>
                    </template>

                    <!-- ОШИБКА, если изменяемые данные уже есть в базе данных -->
                    <template v-slot:error>
                        <notification-mini-error
                        class="change-error" 
                        @click="notifications.alreadyHas.username = false" 
                        :show="notifications.alreadyHas.username"
                        >
                            Такой никнейм уже существует!
                        </notification-mini-error>
                    </template>
                </changeDataItem>


                  <!-- Эл.Почта -->
                <changeDataItem 
                @changeData="recordChangeData" 
                :titleItem="'Эл.Почта'" 
                :valueItem="(changeUserData.email === null)? emailComuted : changeUserData.email" 
                :typeItem="typeItemChangeData.string"
                :nameItem="'email'"
                >
                    <!-- Предупреждение, что данное поле не изменено для того чтобы его сохранить -->
                    <template v-slot:warning>
                        <notification-warning 
                        class="non-change-warning" 
                        @click="notifications.warning.email = false" 
                        :show="notifications.warning.email"
                        >
                            Вы не внесли изменения в это поле!
                        </notification-warning>
                    </template>

                    <!-- Уведомление об успешном редактировании элемента данных -->
                    <template v-slot:success>
                        <notification-mini-success
                        class="change-sucess" 
                        @click="notifications.success.email = false" 
                        :show="notifications.success.email"
                        >
                            Электронная почта успешно изменена!
                        </notification-mini-success>
                    </template>

                    <!-- ОШИБКА, если изменяемые данные уже есть в базе данных -->
                    <template v-slot:error>
                        <notification-mini-error
                        class="change-error" 
                        @click="notifications.alreadyHas.email = false" 
                        :show="notifications.alreadyHas.email"
                        >
                            Такой email уже существует!
                        </notification-mini-error>
                    </template>
                </changeDataItem>

                <!-- КНОПКИ КОМПОНЕНТА РЕДАКТИРОВАНИЯ -->
                <div class="account__menu-change-client-data__btns">
                    <button-comp @click="commitChangeData">Сохранить изменения</button-comp>
                    <button-comp @click="clearChangeUserData">Сбросить изменения</button-comp>
                </div>

            </div>
        </modal-comp>
        <!-- @click="editDataMode = false" -->

        <!-- МОДАЛЬНОЕ ОКНО ДЛЯ ВЫБОРА МИНИАТЮРЫ АВАТАРКИ -->
        <modal-comp @click="log" :show="selectMiniature">
            <div 
            class="select-miniature"
            :class="{'dark': darkMode}"
            :style="(!darkMode)? {backgroundColor: 'white'} : {backgroundColor: ''}"
            >
                <h1 class="select-miniature__title">Выберите миниатюру</h1> 
                <div class="select-miniature__body">
                    <div class="divImg" id="divImg">
    
                        <movedElement
                        @updatePositionMove="updatePositionMove" 
                        >
                        
                        </movedElement>
    
                        <img 
                        v-show="changeUserData.image !== null && changeUserData.image.length" 
                        id="img" 
                        class="img" 
                        :src="changeUserData.image" 
                        alt="books_dark"
                        >
                    </div>
                </div>

                <div class="select-miniature__btns">
                    <button-comp class="select-miniature__btn" @click="commitImage">Сохранить</button-comp>
                    <button-comp class="select-miniature__btn" @click="selectMiniature = false">Отмена</button-comp>
                </div>

            </div>
        </modal-comp>

        <!-- ШАПКА СТРАНИЦЫ АККАУНТ -->
        <header class="account-main_header">
            <h1 class="account-main_header__text">Ваш аккаунт</h1>
        </header>

        <!-- ТЕЛО СТРАНИЦЫ -->
        <div class="account-main_body">

            <!-- БЛОК С ОБЩЕЙ ИНФОРМАЦИЕЙ О КЛИЕНТЕ -->
            <div class="account-main_body__client-info">

                <!-- БЛОК ВЗАИМОДЕЙСТВИЯ С АВАТАРКОЙ КЛИЕНТА -->
                <div class="client-info__image-block">

                    <div class="crop">
                        <img 
                        v-show="userData?.image !== null"
                        id="avatar" 
                        :src="(userData?.image !== null)? userData?.image : ''" 
                        alt="profileImage"
                        :style="{
                            top: resultPosition.top + 'px',
                            left: resultPosition.left + 'px',
                            width: '300px'
                            }"
                        >
                    </div>

                    <div class="client-info__image-btns">

                        <input-file @uploadImage="uploadImage" id="inputFile">
                            <i-upload v-if="!imageComuted && changeUserData.image === null"></i-upload>
                            <i-edit v-if="imageComuted && changeUserData.image === null"></i-edit>
                            <i-ok class="save-image-btn" v-if="changeUserData.image !== null"></i-ok>
                        </input-file>

                        

                        <button-comp 
                        v-show="imageComuted" 
                        class="image-btns__btn" 
                        @click="deleteImage"
                        >
                            Delete x
                        </button-comp>

                    </div>
                </div>

                <!-- БЛОК ДАННЫХ КЛИЕНТА -->
                <div class="client-info__data-block">
                    <ul type="none">
                        <!-- Имя -->
                        <itemComp :titleItem="'Имя'" :valueItem="nameComuted"></itemComp>

                        <!-- Фамилия -->
                        <itemComp :titleItem="'Фамилия'" :valueItem="lastnameComuted"></itemComp>

                        <!-- ПОЛ -->
                        <itemComp :titleItem="'Пол'" :valueItem="sexComuted"></itemComp>

                        <!-- Никнейм (Username) -->
                        <itemComp :titleItem="'Никнейм'" :valueItem="usernameComuted"></itemComp>

                        <!-- Эл. почта -->
                        <itemComp :titleItem="'Эл.почта'" :valueItem="emailComuted"></itemComp>
                    </ul>
                </div>

                <!-- КНОПКИ ВЗАИМОДЕЙСТВИЯ С ДАННЫМИ КЛИЕНТА -->
                <div class="client-info__btns-block">
                    <button-comp @click="editDataMode = true">Редактровать профиль</button-comp>
                    <button-comp @click="logout">Выйти <i-login v-show="false"></i-login></button-comp>
                </div>
            </div>

            <!-- БЛОК СТАТИСТИКИ КЛИЕНТА -->
            <div class="account-main_body__client-statistics">

                <ul type="none">
                    <!-- Дата регистрации -->
                    <itemComp 
                    :title="creationTimeComutedDifference" 
                    :titleItem="'Дата создания аккаунта'" 
                    :valueItem="creationTimeComuted"
                    >
                    </itemComp>

                    <!-- Дата редактирования аккаунта -->
                    <itemComp 
                    :title="(editTimeComutedDifference !== this.accountWords.noneChange) ? editTimeComutedDifference : ''" 
                    :titleItem="'Последнее изменение аккаунта'" 
                    :valueItem="editTimeComuted"
                    >
                    </itemComp>

                </ul>

            </div>

        </div>

    </div>
</template>
<script>
import changeDataItem from '@/components/AccountPage/changeDataItem.vue';
import itemComp from '@/components/AccountPage/itemComp.vue';
import movedElement from '@/components/AccountPage/movedElement.vue'
import { mapState } from 'vuex';
import moment from 'moment'

export default {
    name: 'account',

    components: {
        itemComp,
        changeDataItem,
        movedElement,
    },
    
    data: () => ({

        // Открытие окна редактирования профиля
        editDataMode: true,

        // Открытие окна выбра миниатюры для аватарки
        selectMiniature: false,

        // Подтверждение очищения элемента данных
        confirmRemoveDataItem: false,
        removingItemData: {name: null, value: null},

        // Поле в которое записываются данные клиента пришедшие с сервера
        userData: {},

        // Поле в которое записываются данные редактирования аккаунта
        changeUserData: {
            name: null,
            lastname: null,
            sex: null,
            username: null,
            email: null,
            image: null,
        },

        // Поле в которое записываются данные для очищения
        removeUserData: {
            name: null,
            lastname: null,
        },

        // Всплытие уведомлений
        notifications: {
            // Всплытие предупреждения
            warning: {
                name: false,
                lastname: false,
                sex: false,
                username: false,
                email: false,
            },
            // Всплытие успеха
            success: {
                name: false,
                lastname: false,
                sex: false,
                username: false,
                email: false,
            },
            // Всплытие ошиби о том что это уникальные данные и они уже присутствуют в БД
            alreadyHas: {
                username: false,
                email: false,
            }

        },

        // ###################### ПОЛЯ ДЛЯ РАБОТЫ С ВЫБОРОМ МИНИАТЮРЫ АВАТАРКИ #################

        movingData: {
            width: null, 
            height: null,
        },

        sizeImage: {
            width: null,
            height: null,
        },
        circlePosiotion: {
            top: 0,
            left: 0,
        },

        // Размеры круга, который выбирает область аватарки
        sizeCircle: {
            width: null,
            height: null, 
        },
        resultPosition: {
            top: (JSON.parse(localStorage.getItem('positionAvatar')))? JSON.parse(localStorage.getItem('positionAvatar')).top : 0,
            left: (JSON.parse(localStorage.getItem('positionAvatar')))? JSON.parse(localStorage.getItem('positionAvatar')).left : 0,
        }

    }),

    methods: {
        log(){
            console.log(this.changeUserData);
        },

        // Метод разлогинавет пользователя
        logout(){
            this.$store.commit('AuthModule/changeIsAuth', {isAuth: false, role: null, id: null})
            localStorage.removeItem('isAuth')
            localStorage.removeItem('ACCESS_TOKEN')
            window.location.reload()
        },

        // Метод ЗАПОЛНЯЕТ поля данных изменения которые приходят с каждого элемента редактирования
        recordChangeData(data){
            if(data.success === false && data.alreadyHas){
                this.notifications.alreadyHas[data.name] = true
                setTimeout(() => {
                    this.notifications.alreadyHas[data.name] = false
                }, 3000);
            }
            else if(data.value === false && data.success === false){
                this.notifications.warning[data.name] = true
                setTimeout(() => {
                    this.notifications.warning[data.name] = false
                }, 3000);
            }
            else{
                this.changeUserData[data.name] = data.value
                this.notifications.success[data.name] = true
                setTimeout(() => {
                    this.notifications.success[data.name] = false
                }, 3000);
                console.log(data);
            }
            return false
        },

        // Метод СОХРАНЯЕТ на сервере изменные данные клиента
        commitChangeData(){
            try{
                if(this.removeUserData.name !== null || this.removeUserData.lastname !== null){
                    console.log('Сервер -> удаление данных');
                }
                if(
                    this.changeUserData.name !== null ||
                    this.changeUserData.lastname !== null ||
                    this.changeUserData.sex !== null || 
                    this.changeUserData.username !== null ||
                    this.changeUserData.email !== null

                ){
                    // this.$store.dispatch('UserModule/updateUserData', {changeUserData: this.changeUserData})
                    // window.location.reload()
                    console.log('Сервер -> обновление данных');
                }
            } catch (e) {}            
        },

        // Метод сбрасывает все измененения данных
        clearChangeUserData(){
            // Очищение полей редактирования
            this.changeUserData.name = null
            this.changeUserData.lastname = null
            this.changeUserData.sex = null
            this.changeUserData.username = null
            this.changeUserData.email = null
            // Очищение полей удаления
            this.removeUserData.name = null
            this.removeUserData.lastname = null
        },

        // Метод добавляет загруженную картинку пользователем в обьект данных для редактирования 
        uploadImage(image){
            this.changeUserData.image = image
            this.selectMiniature = true
        },


        // ######################    МЕТОДЫ ДЛЯ ВЫБОРА МИНИАТЮРЫ АВАТАРКИ #######################


        updatePositionMove(position){
            this.circlePosiotion.top = position.top
            this.circlePosiotion.left = position.left
            this.sizeCircle = {...position.sizeCircle}
        },

        recordPosition(top, left){
            this.resultPosition.top = top
            this.resultPosition.left = left
        },

        commitImage(){
            // Блок обрамляющий картинку, нужен для получения точного размера картинки
            const image = document.getElementById('divImg')
            // высота картинки
            const imageHeight =  Math.round(image.getBoundingClientRect().height)
            const imageWidth =  Math.round(image.getBoundingClientRect().width)
            // Занчения ширины и высоты перетаскиваемого круга
            const circleHeight = this.sizeCircle.height
            const circleWidth = this.sizeCircle.width
            const circleLeft = this.circlePosiotion.left
            const circleTop = this.circlePosiotion.top

            const circleBottom = (imageHeight - (circleTop + circleHeight)) - 5
            const circleRight = imageWidth - (circleLeft + circleWidth)
            // результирующие значения координат для перетаскиваемого блока 
            let top = 0, left = 0

            // Если какая-либо сторона картины будет пересечена
            if(circleLeft <= 0 || circleTop <= 0 || circleBottom <= 0 || circleRight <= 0){
                
                // Верхний Левый Угол
                if(circleLeft <= 0 && circleTop <= 0){
                    console.log('Верхний Левый Угол <= 0!');
                    top = 0
                    left = 0
                    this.recordPosition(top, left)
                }
                // Верхний Правый Угол
                else if(circleRight <= 0 && circleTop <= 0){
                    console.log('Верхний Правый Угол <= 0!');
                    top = 0
                    left = Math.round((imageWidth - circleWidth) / 2)
                    this.recordPosition(top, left)
                }
                // Нижний Правый Угол
                else if(circleRight <= 0 && circleBottom <= 0){
                    console.log('Нижний Правый Угол <= 0!');
                    top = Math.round((imageHeight - circleHeight) / 2)
                    left = Math.round((imageWidth - circleWidth) / 2)
                    this.recordPosition(top, left)
                }
                // Нижний Левый Угол
                else if(circleLeft <= 0 && circleBottom <= 0){
                    console.log('Нижний Левый Угол <= 0!');
                    top = Math.round((imageHeight - circleHeight) / 2)
                    left = 0
                    this.recordPosition(top, left)
                }
                // 
                else{
                    // Правая сторона
                    if(circleRight <= 0){
                        top = Math.round(circleTop / 2)
                        left = Math.round((imageWidth - circleWidth) / 2)
                        this.recordPosition(top, left)
                    }
                    // Нижняя сторона
                    else if(circleBottom <= 0){
                        console.log('Нижняя <= 0');
                        top = Math.round((imageHeight - circleWidth) / 2)
                        left = Math.round(circleLeft / 2)
                        this.recordPosition(top, left)
                    }
                    // Верхняя сторона
                    else if(circleTop <= 0){
                        console.log('Верхняя <= 0');
                        top = 0
                        left = Math.round(circleLeft / 2)
                        this.recordPosition(top, left)
                    }
                    // Левая сторона
                    else if(circleLeft <= 0){
                        console.log('Левая <= 0');
                        top = Math.round(circleTop / 2)
                        left = 0
                        this.recordPosition(top, left)
                    }
                }
            // Если ни одна сторона не пересечена
            }else if(circleLeft > 0 && circleTop > 0 && circleBottom > 0 && circleRight > 0){
                console.log('Ни одна сторона не персечена!');
                top = Math.round(circleTop / 2)
                left = Math.round(circleLeft / 2)
                this.recordPosition(top, left)
            }
            localStorage.setItem('positionAvatar', JSON.stringify(
                {
                    top: -this.resultPosition.top,
                    left: -this.resultPosition.left,
                }
            ))
            this.$store.dispatch('UserModule/updateUserData', {changeUserData: this.changeUserData})
            console.log(this.resultPosition)
        },

        deleteImage(){
            if(this.userData && this.userData.image !== null){
                this.userData.image = null
                this.$store.dispatch('UserModule/updateUserData', {changeUserData: this.userData})
            }else{
                console.log('!this.userData || this.userData.image === null)');
            }
            
        },

        // Метод запрашивает подтверждение на очищение элемента данных
        reqRemoveDataItem(item){
            this.confirmRemoveDataItem = true
            this.removingItemData = {...item}
        },

        // Метод подтверждает очищение поля элемента данных
        removeItemData(){
            try{
                this.removeUserData[this.removingItemData.name] = this.removingItemData.value
                console.log(this.removeUserData);
            }catch(e){

            }finally{
                this.confirmRemoveDataItem = false
            }
        },

        // Метод отменяет очищение элемента данных
        cancelRemoveItemData(){
            console.log('No');
            this.confirmRemoveDataItem = false
            return false
        },

    },

    computed: {
        ...mapState({
            darkMode: state => state.darkMode,

            // Допсутимые обозначения неопределенных данных
            accountWords: state => state.accountWords,

            // Поле в которое записываются данные клиента пришедшие с сервера
            userDataStore: state => state.UserModule.userData,

            // Допустимые типы элемента редактирования
            typeItemChangeData: state => state.typeItemChangeData,

        }),


//###############################################  БЛОК ОБЩИХ ДАННЫХ КЛИЕНТА  #######################################################


        // Вычисление ИМЕНИ клиента относительно полученных данных 
        nameComuted(){
                let name = this.userData.name
                if(name) return name
                else return this.accountWords.noneData
        },

        // Вычисление ФАМИЛИИ клиента относительно полученных данных 
        lastnameComuted(){
            let lastname = this.userData.lastname
            if(lastname) return lastname
            else return this.accountWords.noneData
        },

        // Вычисление ПОЛА клиента относительно полученных данных 
        sexComuted(){
            let sex = this.userData.sex
            if(sex) return sex
            else return this.accountWords.noneData
        },

        // Вычисление НИКНЕЙМА клиента относительно полученных данных 
        usernameComuted(){
            let username = this.userData.username
            if(username) return username
            else return this.accountWords.noneData
        },

        // Вычисление ЭЛ.ПОЧТЫ клиента относительно полученных данных 
        emailComuted(){
            let email = this.userData.email
            if(email) return email
            else return this.accountWords.noneData
        },

        // Вычисление АВАТАРКИ клиента относительно полученных данных 
        imageComuted(){
            if(this.userData.image) return this.userData.image
            else return false
        },


//####################################################  БЛОК СТАТИСТИКИ  #######################################################


        // Вычисление ВРЕМЕНИ СОЗДАНИЯ аккаунта клиента относительно полученных данных 
        creationTimeComuted(){
            if(this.userData?.creation_time?.length){
                let creation_time = this.userData.creation_time
                return moment(creation_time, 'x').format('DD.MM.YYYY')
            }else return this.accountWords.undefinedData
        },


        // Вычисление ВРЕМЕНИ РЕДАКТИРОВАНИЯ аккаунта клиента относительно полученных данных 
        editTimeComuted(){
            if(this.userData?.edit_time?.length){
                let editTime = this.userData.edit_time
                return moment(editTime, 'x').format('DD.MM.YYYY')
            }else return this.accountWords.noneChange
        },

        // Вычисление разницы во времени между ТЕКУЩИМ временем и последним редактированием аккаунта
        editTimeComutedDifference(){
            if(this.userData?.edit_time?.length){
                const editTime = this.userData.edit_time
                return moment(editTime, "x").fromNow()
            }else return this.accountWords.noneChange
        },

        // Вычисление разницы во времени между ТЕКУЩИМ временем и ВРЕМЕНЕМ СОЗДАНИЯ аккаунта
        creationTimeComutedDifference(){
            if(this.userData?.creation_time?.length){
                const creationTime = this.userData.creation_time
                return moment(creationTime, "x").fromNow()
            }else return this.accountWords.noneChange
        }

    },

    created(){
        this.$store.dispatch('UserModule/getDataUser').then(data => {
            this.userData = {...data}
        })
    },
    mounted(){
		// const avatar = document.getElementById('avatar')
        // if(avatar){
        //     avatar.style.top = this.positionImage.top + 'px'
        //     avatar.style.left = this.positionImage.left + 'px'
        // }

        const image = document.getElementById('divImg')
        const imageHeight =  Math.round(image.getBoundingClientRect().height)
        const imageWidth =  Math.round(image.getBoundingClientRect().width)
        this.sizeImage.width = imageWidth
        this.sizeImage.height = imageHeight

        setTimeout(() => {
            const img = document.getElementById('img')
            const { width, height } = img.getBoundingClientRect()
            this.movingData = {
                width: Math.round(width), 
                height: Math.round(height),
            }
        }, 100)

    },
    

}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
.non-change-warning{
    position: absolute;
    top: 50px;
    right: 0px;
}
.change-sucess{
    position: absolute;
    right: 40px;
    left: 40px;
}
.change-error{
    position: absolute;
    right: 20px;
    left: 20px;
}
.account-main{
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    height: max-content;
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
    background-color: white;
    .menu-change-client-data__confirm-block{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
        border-radius: $radius;
        z-index: 10000;
    }
    .menu-change-client-data__confirm-message{
        position: relative;
        top: 0;
        right: -10px;
        margin: 0 auto;
    }
    .account__menu-change-client-data{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 80vh;
        padding: 20px 10px 20px 10px;
        border: $border;
        border-radius: $radius;
        .menu-change-client-data__title{
            align-self: center;
            margin: 10px 0 30px 0;
        }
        .menu-change-client-data__close-btn{
            position: absolute;
            width: 20px;
            height: 20px;
            left: 93%;
            top: 20px;
            cursor: pointer;
        }

        .account__menu-change-client-data__btns{
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0 0 0 ;
            align-self: center;
        }
    }


    .account-main_header{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 30px 20px;
        height: max-content;
        border-bottom: $border;
    }
    .account-main_header__text{
        position: relative;
        right: 20px;
        font-size: 2.3em;
    }
    .account-main_body{
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0;
        // border: $border;
        // border-radius: $radius;
    }
    .account-main_body__client-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: max-content;
        border: $border;
        border-radius: $radius;
        margin: 20px 0;
        padding: 0 15px;
        box-shadow: $shadow;
        .client-info__image-block{
            display: flex;
            width: max-content;
            height: max-content;
            border-bottom: $border;
            padding: 30px 20px;
            
            .client-info__image{
                width: 200px;
                height: auto;
            }
            .client-info__image-btns{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                width: max-content;
                height: 200px;
                // border: $border;
                // border-radius: $radius;
                margin-left: 20px;
            }
            .image-btns__btn{
                padding: 30px 20px;
            }
            .save-image-btn{
                width: 35px;
                height: 35px;
            }

        }
        .client-info__data-block{
            display: flex;
            width: 100%;
            flex-direction: column;
            // border: $border;
            // border-radius: $radius;
            margin: 20px 0;
        }
        .client-info__btns-block{
            display: flex;
            justify-content: space-around;
            width: 100%;
            // border: $border;
            // border-radius: $radius;
            margin-bottom: 10px;
        }
    }
    .account-main_body__client-statistics{
        display: flex;
        width: max-content;
        border: $border;
        border-radius: $radius;
        margin: 20px 0;
        padding: 5px 10px;
        box-shadow: $shadow;
    }
}


.select-miniature{
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    border: $border;
    border-radius: $radius;
    padding: 10px 15px 0 15px;
    box-shadow: $shadow;
}
.select-miniature__title{
    margin-top: 10px;
}
.select-miniature__body{
    position:relative;
    height: max-content;
    max-height: 80%;
    border-top: $border;
    border-bottom: $border;
    overflow: hidden;
    overflow-y: auto;
    margin: 20px 0;
}
.divImg{
    position:relative;
    width: 600px;
    min-height: 500px;
    height: max-content;
}
.img{
	width:100%;
    
}
.select-miniature__btns{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .select-miniature__btn{
        font-size: 18px;
    }
}

// Аватарка
.crop{
	float:left;
	margin:.5em 10px .5em 0;
	overflow:hidden; /* this is important */
	position:relative; /* this is important too */
	border:1px solid #ccc;
	width:200px;
	height:200px;
    border-radius: 50%;
	}
.crop img{
	position:absolute;
	width: 200px;
	top: 0;
	left: 0;
}
@include darkMode_with_font;
</style>