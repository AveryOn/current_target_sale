<!-- БЛОК С ОТРИСОВКОЙ ИЗОБРАЖЕНИЙ ТОВАРА -->
<template>
    <div class="image-block">
        <!-- ВЫБРАННАЯ КАРТИНКА ИЗ СПИСКА -->
        <div class="image-block__preview">
            <div class="open-full-image">Open...</div>
        </div>
        <!-- СПИСОК КАРТИНОК -->
        <div class="image-block__list">
            <div class="image-mini" v-for="i, el in 5">
                image-mini: {{ i }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        // Отображает кнопку увеличенного просмотра картинки, если курсор наведен
        const imageSelect = document.querySelector('.image-block__preview');
        const openFullImage = document.querySelector('.open-full-image');
        imageSelect.addEventListener('mouseover', (event) => {
            openFullImage.style.visibility = 'visible'
        })
        imageSelect.addEventListener('mouseout', (event) => {
            openFullImage.style.visibility = 'hidden'
        })
    }
}
</script>
<style lang="scss" scoped>
.image-block{
    display: flex;
    justify-content: space-between;
    min-width: 30%;
    width: 42%;
    // border: $border;
    height: 400px;
    .image-block__preview{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 350px;
        background: rgb(227, 205, 163);
        border-radius: $radius;
        box-shadow: $shadow;
        margin-right: 10px;
        .open-full-image{
            position: relative;
            // top: 30px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            visibility: hidden;
            align-self: flex-end;
            cursor: pointer;
            border-top-right-radius: $radius;
            width: 100px;
            height: 35px;
            background: linear-gradient(to left,rgb(255, 147, 6), rgba(255, 147, 6, 0.533), rgba(255, 147, 6, 0));
            transition: all 0.5 ease;
        }
    }
    .image-block__list{
        width: max-content;
        height: 100%;
        // border: $border;
        border-top: $border;
        border-bottom: $border;
        margin: auto;
        overflow: hidden;
        margin-left: 20px;
        padding: 5px 10px 0 10px;
        &:hover{
            overflow: auto;
        }
        &::-webkit-scrollbar{
            width: 6px;
            height: 6px;
        }
        &::-webkit-scrollbar-track{
            background: rgba(128, 128, 128, 0.2);
        }
        &::-webkit-scrollbar-thumb{
            background: linear-gradient(360deg, #fc3b22, $color-orange-white);
        }
        .image-mini{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18vh;
            height: 18vh;
            background: rgb(227, 205, 163);
            margin-bottom: 5px;
            border-radius: $radius;
            transition: box-shadow 0.4s ease;
            &:hover{
                // transition: box-shadow 0.4s ease;
                cursor: pointer;
                box-shadow: $shadow;
                border: $border;
                border-radius: $radius;
            }
        }
    }
}
</style>