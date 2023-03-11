<template>
<!-- 
    <svg class="icon edit" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 25 25" display="none">
        <g id="_01_align_center" data-name="01 align center">
            <path d="M22,9.979V16H16v6H2V3A1,1,0,0,1,3,2H16.148L17.359.646A4.934,4.934,0,0,1,18.07,0H3A3,3,0,0,0,0,3V24H18.414L24,18.414V7.979ZM18,21.586V18h3.586Z"/><path d="M12.729,11.82,20.34,3.313a.945.945,0,0,1,1.372-.038.943.943,0,0,1,0,1.335L13.68,12.643a4.964,4.964,0,0,1,1.042,1.785l8.4-8.4a2.947,2.947,0,0,0,0-4.163,2.943,2.943,0,0,0-4.276.118l-8.136,9.093A4.967,4.967,0,0,1,12.729,11.82Z"/>
            <path d="M10,13c-4,0-5,6-5,6h5a3,3,0,0,0,0-6Z"/>
        </g>
    </svg> -->

    <svg class="icon delete"  xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 25 25" display="none">
        <g id="_01_align_center" data-name="01 align center">
            <path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"/>
            <rect x="9" y="10" width="2" height="8"/>
            <rect x="13" y="10" width="2" height="8"/>
        </g>
    </svg>

</template>
<script>
export default {
    name: 'i-delete',
}
</script>
<style lang="scss" scoped>
@include icon-size;
.delete{
    position: relative;
    width: 30px;
    height: 30px;
    top: -1px;
    left: 0;
    fill: orange;
    &:hover{
        fill: rgb(255, 123, 0);
    }
}
</style>