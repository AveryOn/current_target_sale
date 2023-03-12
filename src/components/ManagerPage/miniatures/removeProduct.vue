<template>
    <!-- <div class="create-product">
    </div> -->

    <!-- МИНИАТЮРА ДЛЯ УДАЛЕНИЯ ТОВАРА -->
    <div class="remove-product">

        <svg class="miniature remove-product__trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1" height="1">
            <g id="_01_align_center" data-name="01 align center">
                <path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"/>
                <rect x="9" y="10" width="2" height="8"/>
                <rect x="13" y="10" width="2" height="8"/>
            </g>
        </svg>

    </div>

</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.remove-product{
    max-width: 90px;
    max-height: 90px;
}
.miniature{
    display: inline-block;
    position: relative;
    fill: rgb(253, 148, 11);
}
.remove-product__trash{
    width: 90px;
    height: 90px;
}

</style>