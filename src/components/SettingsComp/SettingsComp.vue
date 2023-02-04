<template>
    <div v-show="show" class="settings">
        <!-- ШАПКА -->
        <div class="settings-header">
            <h1 class="settings-title-text">{{ settingsTitle }}</h1>
            <button-comp @click="$emit('close')">Закрыть</button-comp>
        </div>

        <!-- Кнопка для возврата на главную панель настроек -->
        <button-comp 
        class="settings__to-back-btn"
        v-show="openChapterSetting.isOpen && openChapterSetting.tabName !== ''" 
        @click="backSettingStart"
        >
            {{ '<' }}
        </button-comp>

        <!-- КОМПОНЕНТ ОТРИСОВЫВАЮЩИЙ СПИСОК КНОПОК НАСТРОЕК И ВКЛАДОК С НАСТРОЙКАМИ -->
        <div v-show="!openChapterSetting.isOpen" class="settings-body-list">
            
            <!-- В этом компоненте содержатся настройки доступные для рядового пользователя -->
            <div class="settings-body-list__user">

                <div class="settings-tab__list">
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
            <cart-setting-view></cart-setting-view>

        </setting-chapter>

    </div>
</template>
<script>
import ShowTemplate from '@/mixins/ShowTemplate';
// Импорт панель настроек выбора. Тип оформления отображения товара в корзине
import cartSettingView from '@/components/CartPage/cartSettingView.vue';

// Импорт вкладки настроек
import settingTab from '@/components/SettingsComp/settingTab.vue'
// Импорт раздела настроек
import settingChapter from './settingChapter.vue';
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
            }
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

        // Метод возвращает пользователя на исходную странцу настроек
        backSettingStart(){
            this.openChapterSetting = {
                isOpen: false,
                tabName: '', 
            }
        }
    },
    computed: {
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
    }
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;

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
        top: 5px;
        width: 100%;
        padding: 50px;
        background-color: white;
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
            
            width: max-content;
            width: 100%;
            height: max-content;
            .settings-tab__list{
                display: flex;
                flex-direction: column;
                width: max-content;
                width: 100%;
                border: $border;
                padding: 5px;                
            }
        }
    }

}
</style>