<template>

    <!-- МИНИАТЮРА ДЛЯ УДАЛЕНИЯ ТОВАРА -->
    <div class="edit-product">

        <svg class="miniature edit-product__edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
            <g id="_01_align_center" data-name="01 align center">
                <path d="M5,19H9.414L23.057,5.357a3.125,3.125,0,0,0,0-4.414,3.194,3.194,0,0,0-4.414,0L5,14.586Zm2-3.586L20.057,2.357a1.148,1.148,0,0,1,1.586,0,1.123,1.123,0,0,1,0,1.586L8.586,17H7Z"/><path d="M23.621,7.622,22,9.243V16H16v6H2V3A1,1,0,0,1,3,2H14.758L16.379.379A5.013,5.013,0,0,1,16.84,0H3A3,3,0,0,0,0,3V24H18.414L24,18.414V7.161A5.15,5.15,0,0,1,23.621,7.622ZM18,21.586V18h3.586Z"/>
            </g>
        </svg>

    </div>

</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.edit-product{
    max-width: 90px;
    max-height: 90px;
}
.miniature{
    display: inline-block;
    position: relative;
    fill: rgb(253, 148, 11);
}
.edit-product__edit{
    width: 90px;
    height: 90px;
}

</style>