<template>
    <svg class="icon office" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 25 25" display="none">
        <g id="_01_align_center" data-name="01 align center">
            <path d="M21,4H18V2a2,2,0,0,0-2-2H8A2,2,0,0,0,6,2V4H3A3,3,0,0,0,0,7V24H24V7A3,3,0,0,0,21,4ZM8,2h8V4H8ZM3,6H21a1,1,0,0,1,1,1v5H2V7A1,1,0,0,1,3,6ZM2,22V14h9v2h2V14h9v8Z"/>
        </g>
    </svg>
</template>
<script>
export default {
    name: 'i-office',
}
</script>
<style lang="scss" scoped>
@include icon-size;
.office{
    position: relative;
    top: -3px;
    left: -5px;
    fill: orange;
} 
</style>