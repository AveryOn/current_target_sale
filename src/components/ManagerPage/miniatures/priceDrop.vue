<template>
    <!-- МИНИАТЮРА ДЛЯ СКИДКИ -->
    <div class="price-drop">

        <!-- Доллар -->
        <svg class="miniature price-drop__dollar"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g id="_01_align_center" data-name="01 align center">
                <path d="M19,8V7.068A5.073,5.073,0,0,0,13.932,2H13V0H11V2h-.932a5.068,5.068,0,0,0-1.6,9.875L11,12.72V20h-.932A3.071,3.071,0,0,1,7,16.932V16H5v.932A5.073,5.073,0,0,0,10.068,22H11v2h2V22h.932a5.068,5.068,0,0,0,1.6-9.875L13,11.28V4h.932A3.071,3.071,0,0,1,17,7.068V8Zm-4.1,6.021A3.068,3.068,0,0,1,13.932,20H13V13.387ZM11,10.613,9.1,9.979A3.068,3.068,0,0,1,10.068,4H11Z"/>
            </g>
        </svg>

        <!-- Стрелка вниз -->
        <svg class="miniature price-drop__arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="4 5 15 15">
            <g id="_01_align_center" data-name="01 align center">
                <path d="M16.293,12.707,13,16V6H11V16L7.707,12.707,6.293,14.121l4.293,4.293a2,2,0,0,0,2.828,0l4.293-4.293Z"/>
            </g>
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
.price-drop{
    position: relative;
    left: 10px;
}
.miniature{
    display: inline-block;
    position: relative;
    fill: rgb(253, 148, 11);
}
.price-drop__dollar{
    width: 90px;
    height: 90px;
}
.price-drop__arrow-down{
    width: 40px;
    height: 40px;
    left: -23px;
}
</style>