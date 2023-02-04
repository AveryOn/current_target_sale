<!-- КНОПКА ОТПРАВЛЯЕТ КЛИЕНТ В НАЧАЛО ЭКРАНА -->
<template>
    <div @click="upper" :class="{'btn-up-show': listclass}" class="btn-up">
        <!-- <p class="btn-up__inline-text">Вверх</p> -->
        <i-up class="btn-up__inline-text"></i-up>
    </div>
</template>
<script>
export default {
    name: 'button-up',
    props: {
        listclass: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        upper(){
            window.scroll({
                left: 0,
                top: 0,
                behavior: 'smooth',
            })
        }
    }
}
</script>
<style lang="scss" scoped>
// .btn-up{
//     z-index: 1000;
//     position: fixed;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     color:rgb(255, 245, 245);
//     bottom: 0;
//     left: 0;
//     width: 100px;
//     height: 160px;
//     background: linear-gradient(360deg, rgba(253, 148, 11), rgba(253, 148, 11, 0));
//     visibility: hidden;
//     cursor: pointer;
    
//     &.btn-up-show{
//         visibility: visible;
//     }
//     .btn-up__inline-text{
//         position: relative;
//         bottom: 10px;
//         margin: 0 auto 0 auto;
//         font-weight: bolder;
//     }
// }

.btn-up{
    z-index: 998;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color:rgb(255, 245, 245);
    bottom: 10px;
    left: 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    // background: linear-gradient(360deg, rgba(253, 148, 11), rgba(253, 148, 11, 0));
    background: $background-gr;
    opacity: 0.75;
    visibility: hidden;
    cursor: pointer;
    
    &.btn-up-show{
        visibility: visible;
    }
    .btn-up__inline-text{
        position: relative;
        // top: 2px;
        margin: auto;
    }
}
</style>