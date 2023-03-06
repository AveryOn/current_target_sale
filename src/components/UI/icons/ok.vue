<template>

    <svg class="icon ok" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 25 25" display="none">
        <g id="_01_align_center" data-name="01 align center">
            <path d="M7.8,20.53a2.99,2.99,0,0,1-2.121-.877L.086,14.061,1.5,12.646l5.593,5.593a1,1,0,0,0,1.414,0L22.5,4.246,23.914,5.66,9.921,19.653A2.99,2.99,0,0,1,7.8,20.53Z"/>
        </g>
    </svg>

</template>
<script>
export default {
    name: 'i-ok',
}
</script>
<style lang="scss" scoped>
@include icon-size;
.ok{
    position: relative;
    width: 14px;
    height: 14px;
    top: -1px;
    left: 0;
    fill: orange;
    &:hover{
        fill: rgb(255, 123, 0);
    }
}
</style>