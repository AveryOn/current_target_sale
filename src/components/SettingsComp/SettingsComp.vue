<template>
    <div v-show="show" :class="{'dark': darkMode}" class="settings">
        <!-- ШАПКА -->
        <div class="settings-header">
            <h1 :class="{'dark': darkMode}" class="settings-title-text">{{ settingsTitle }}</h1>
            <button-comp :class="{'dark-btn': darkMode}" @click="$emit('close')">Закрыть</button-comp>
        </div>

        <!-- Кнопка для возврата на главную панель настроек -->
        <button-comp 
        class="settings__to-back-btn"
        :class="{'dark': darkMode}" 
        v-show="openChapterSetting.isOpen && openChapterSetting.tabName !== ''" 
        @click="backSettingStart"
        >
            {{ '<' }}
        </button-comp>

        <!-- КОМПОНЕНТ ОТРИСОВЫВАЮЩИЙ СПИСОК КНОПОК НАСТРОЕК И ВКЛАДОК С НАСТРОЙКАМИ -->
        <div v-show="!openChapterSetting.isOpen" class="settings-body-list">
            
            <!-- В этом компоненте содержатся настройки доступные для рядового пользователя -->
            <div class="settings-body-list__user">

                <!-- Контейнер с кнопками -->
                <div class="settings-btns__list">
                    <div class="settings-btns__list--item">
                        <h3>Темная тема</h3>
                        <check-button :isCheck="isDarkMode" @checked="darkModeActive"></check-button>
                    </div>
                </div>

                <!-- Контейнер со спиком вкладок -->
                <div class="settings-tab__list">
                    <h3 class="settings-tab__list--title">Разделы настроек</h3>
                    <!-- Вкладка содержащая набор настроек относящихся в определенной области магазина -->
                    <setting-tab :tabName="'cart-setting'" @openTab="openTab">
                        Настройки корзины
                    </setting-tab>
                    <!-- Вкладка содержащая набор настроек относящихся в определенной области магазина -->
                    <setting-tab :tabName="''" @openTab="openTab">
                        example#1
                    </setting-tab>
                    <!-- Вкладка содержащая набор настроек относящихся в определенной области магазина -->
                    <setting-tab :tabName="''" @openTab="openTab">
                        example#2
                    </setting-tab>
                </div>
                
            </div>
            
        </div>

        <!-- КОМПОНЕНТ ОТРИСОВЫВАЕТ ОТДЕЛЬНО ВЫБРАННУЮ ВКЛАДКУ С НАСТРОЙКАМИ -->
        <setting-chapter 
        v-show="openChapterSetting.isOpen && openChapterSetting.tabName === 'cart-setting'" 
        :openChapterSetting="openChapterSetting" 
        class="settings-body-item_comp"
        >
            <cart-setting-view :class="{'dark': darkMode}"></cart-setting-view>

        </setting-chapter>

    </div>
</template>
<script>
import ShowTemplate from '@/mixins/ShowTemplate';
// Импорт панели выбора оформления отображения товара в корзине
import cartSettingView from '@/components/CartPage/cartSettingView.vue';

// Импорт вкладки настроек
import settingTab from '@/components/SettingsComp/settingTab.vue'
// Импорт раздела настроек
import settingChapter from './settingChapter.vue';

import { mapState } from 'vuex';
export default {
    mixins: [ShowTemplate],
    components: {
        settingTab,
        settingChapter,
        cartSettingView,
    },
    data(){
        return {
            // Поле дает команду тому или иному разделу настроек открыться (стать видимым)
            // tabName - имя вкладки относительного которого отрисовывается необходимый раздел настроек
            openChapterSetting: {
                isOpen: false,
                tabName: '',
            },
            isDarkMode: JSON.parse(localStorage.getItem('darkMode')),
        }
    },
    methods: {
        // Метод меняет значения поля openChapterSetting относительно которых отрисовывается тот или иной раздел настроек
        openTab(tabName){
            if(tabName !== '' || undefined){
                this.openChapterSetting = {
                    isOpen: true,
                    tabName: tabName,
                }
            }else{
                return false
            }   
        },
        // Метод включает и отключает темную тему
        darkModeActive(checked){
            if(checked){
                this.$store.commit('darkModeActive')
                localStorage.setItem('darkMode', true)
            }else{
                this.$store.commit('darkModeDisabled')
                localStorage.setItem('darkMode', false)            
            }
        },

        // Метод возвращает пользователя на исходную странцу настроек
        backSettingStart(){
            this.openChapterSetting = {
                isOpen: false,
                tabName: '', 
            }
        }
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
        // Свойство возрвращает название для окна настроек в Шапке относительно открытого раздела настроек
        settingsTitle(){
            // Title когда открыт раздел настроек Корзины
            if(this.openChapterSetting.tabName === 'cart-setting'){
                return 'Настройки корзины'
            }
            // Title по умолчанию
            if(this.openChapterSetting.tabName === '' && !this.openChapterSetting.isOpen){
                return 'Общие настройки'
            }
        }
    },
    watch: {
        // Меняет цветовую тему у хедера окна настроек 
        darkMode(newValue){
            const header = document.querySelector('.settings-header')
            if(newValue){
                header.style.backgroundColor = 'rgb(36, 33, 33)'
            }else{
                header.style.backgroundColor = ''
            }
        } 
    },
    mounted(){
        // Меняет цветовую тему у хедера окна настроек 
        const header = document.querySelector('.settings-header')
        if(this.darkMode){
            header.style.backgroundColor = 'rgb(36, 33, 33)'
        }else{
            header.style.backgroundColor = ''
        }
    }
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
@include h3-gradient;

.settings{
    display: flex;
    flex-direction: column;
    height: 70vh;
    width: max-content;
    max-width: 70vh;
    background-color: white;
    border: $border;
    border-radius: $radius;
    padding: 0 10px 0 10px;
    overflow:auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        width: 9px;
        height: 9px;
    }
    .settings__to-back-btn{
        align-self: flex-start;
        font-size: 16px;
        font-weight: bolder;
        padding: 3px 15px 3px 15px;
    }
    .settings-header{
        position: sticky;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-self: center;
        background-color: white;
        top: 5px;
        width: 100%;
        padding: 50px;
        border: $border;
        border-radius: $radius;
        padding: 5px 20px;
        margin: 5px 10px 20px 10px;
        box-shadow: $shadow;
        z-index: 1050;
        .settings-title-text{
            display: flex;
        }
    }
    .settings-body-list{
        position: relative;
        display: flex;
        align-self: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 100%;
        height: max-content;
        padding: 20px 0 20px 0;
        margin: 0 10px 0 10px;
        .settings-body-list__user{
            display: flex;
            flex-direction: column;
            width: max-content;
            width: 100%;
            height: max-content;
            .settings-btns__list{
                display: flex;
                flex-direction: column;
                width: max-content;
                width: 100%;
                border-bottom: $border;
                padding: 5px; 
                margin-bottom: 10px;
            }
            .settings-btns__list--item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: $border;
                border-radius: $radius;
                padding: 10px;
                width: 100%;
                max-width: 100%;
                margin: 0 0 10px 0;
            }
            .settings-tab__list{
                display: flex;
                flex-direction: column;
                width: max-content;
                width: 100%;
                padding: 5px;                
            }
            .settings-tab__list--title{
                align-self: center;
                margin-bottom: 10px;
            }
        }
    }

}
@include darkMode;
@include darkMode_btn;
</style>