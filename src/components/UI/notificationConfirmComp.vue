<!-- КОМПОНЕНТ СЛУЖИТ ДЛЯ ПОДТВЕРЖДЕНИЯ ТОГО ИЛИ ИНОГО ДЕЙСТВИЯ -->
<!-- НАПОДОБИЕ ВСПЛЫВАЮЩЕЙ ПОДСКАЗКИ ALERT() -->
<template>
    <div 
    v-show="show" 
    class="notification-confirm"
    >
        <div class="notification-confirm-message">
            <slot></slot>
            <div class="confirm__btns">
               
                <!-- ДА -->
                <button-comp 
                class="confirm__btns--btn" 
                @click="eventYes"
                >
                    Да
                </button-comp>
                
                <!-- НЕТ -->
                <button-comp
                id="confirmNo"
                class="confirm__btns--btn" 
                @click.prevent="eventNo"
                >
                    Нет
                </button-comp>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'notification-confirm',
    props: {
        show: {
            type: Boolean,
            default: false,
            required: true,
        }
    },
    methods: {
        eventNo(){
            this.$emit('eventNo')
        },
        eventYes(){
            this.$emit('eventYes')
        },
    },

}
</script>
<style lang="scss" scoped>
.notification-confirm{
    position: fixed;
    display: flex;
    align-items: center;
    top: 50px;
    right: 10px;
    width: max-content;
    min-height: 100px;
    background: linear-gradient(to right, #fc3b22aa, rgba(253, 148, 11, 0.665));
    border-radius: $radius;
    border: 1px solid rgb(254, 180, 9);
    z-index: 1000;
    padding: 10px;
    cursor: pointer;
    .notification-confirm-message{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 15px;
        padding: 10px;
        background-color: rgb(254, 180, 9);
        color: rgb(255, 255, 255);
        border-radius: 10px;
        font-weight: bold;
    }
    .confirm__btns{
        display: flex;
        margin: 20px auto 0 auto;
        &--btn{
            display: flex;
            justify-content: center;
            width: 100px;
        }
    }
}
</style>