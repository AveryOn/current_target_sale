<template>
    
    <!-- МИНИАТЮРА ДЛЯ СОЗДАНИЯ ГРУППЫ ТОВАРА -->
    <div class="create-group">

        <svg class="miniature create-category__nature" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
            <g id="_01_align_center" data-name="01 align center">
                <path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM3,2H21a1,1,0,0,1,1,1V20.586L11.121,9.707a3,3,0,0,0-4.242,0L2,14.586V3A1,1,0,0,1,3,2ZM2,17.414l6.293-6.293a1,1,0,0,1,1.414,0L20.586,22H2Z"/>
                <path d="M16,10a3,3,0,1,0-3-3A3,3,0,0,0,16,10Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,16,6Z"/>
            </g>
        </svg>

    </div>

</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.create-group{
    max-width: 90px;
    max-height: 90px;
}
.miniature{
    display: inline-block;
    position: relative;
    fill: rgb(253, 148, 11);
}
.create-category__nature{
    width: 90px;
    height: 90px;
}

</style>