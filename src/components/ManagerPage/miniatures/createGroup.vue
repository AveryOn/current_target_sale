
<template>
    
    <!-- МИНИАТЮРА ДЛЯ СОЗДАНИЯ ГРУППЫ ТОВАРА -->
    <div class="create-group">

        <svg class="miniature create-category__nature" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
            <g id="_01_align_center" data-name="01 align center">
                <path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM3,2H21a1,1,0,0,1,1,1V20.586L11.121,9.707a3,3,0,0,0-4.242,0L2,14.586V3A1,1,0,0,1,3,2ZM2,17.414l6.293-6.293a1,1,0,0,1,1.414,0L20.586,22H2Z"/>
                <path d="M16,10a3,3,0,1,0-3-3A3,3,0,0,0,16,10Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,16,6Z"/>
            </g>
        </svg>

        <svg class="miniature create-group__categories" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1" height="1">
            <g id="_01_align_center" data-name="01 align center">
                <path d="M0,3v8H11V0H3A3,3,0,0,0,0,3ZM9,9H2V3A1,1,0,0,1,3,2H9Z"/>
                <path d="M0,21a3,3,0,0,0,3,3h8V13H0Zm2-6H9v7H3a1,1,0,0,1-1-1Z"/>
                <path d="M13,13V24h8a3,3,0,0,0,3-3V13Zm9,8a1,1,0,0,1-1,1H15V15h7Z"/>
                <polygon points="17 11 19 11 19 7 23 7 23 5 19 5 19 1 17 1 17 5 13 5 13 7 17 7 17 11"/>
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
    position: absolute;
    width: 30px;
    height: 30px;
    left: 114px;
    top: 18px;
}
.create-group__categories{
    width: 80px;
    height: 80px;
}

</style>