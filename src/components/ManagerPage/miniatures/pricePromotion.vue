<template>
    <!-- МИНИАТЮРА ДЛЯ ОБЬЯВЛЕНИЯ СКИДКИ ТОВАРА -->
    <div class="price-promotion">

        <!-- Доллар -->
        <svg class="miniature price-promotion__dollar"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g id="_01_align_center" data-name="01 align center">
                <path d="M19,8V7.068A5.073,5.073,0,0,0,13.932,2H13V0H11V2h-.932a5.068,5.068,0,0,0-1.6,9.875L11,12.72V20h-.932A3.071,3.071,0,0,1,7,16.932V16H5v.932A5.073,5.073,0,0,0,10.068,22H11v2h2V22h.932a5.068,5.068,0,0,0,1.6-9.875L13,11.28V4h.932A3.071,3.071,0,0,1,17,7.068V8Zm-4.1,6.021A3.068,3.068,0,0,1,13.932,20H13V13.387ZM11,10.613,9.1,9.979A3.068,3.068,0,0,1,10.068,4H11Z"/>
            </g>
        </svg>

        <!-- Знак процента -->
        <svg class="miniature price-promotion__percent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M1.707,23.707l-1.414-1.414L22.293,.293l1.414,1.414L1.707,23.707ZM9,5c0-2.206-1.794-4-4-4S1,2.794,1,5s1.794,4,4,4,4-1.794,4-4Zm-2,0c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm16,14c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Zm-2,0c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Z"/>
        </svg>

    </div>

</template>
<script>
export default {
    // props: {
    //     show: Boolean,
    //     required: true,
    //     default: false,
    // }
}
</script>
<style lang="scss" scoped>
.price-promotion{
    position: relative;
    left: 10px;
}
.miniature{
    display: inline-block;
    position: relative;
    fill: rgb(253, 148, 11);
}
.price-promotion__dollar{
    width: 90px;
    height: 90px;
}
.price-promotion__percent{
    width: 40px;
    height: 40px;
    left: -20px;
    top: -5px;
}
</style>