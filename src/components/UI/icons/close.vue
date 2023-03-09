<template>

    <svg class="icon close" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 25 25" display="none">
        <g id="_01_align_center" data-name="01 align center">
            <polygon points="24 1.414 22.586 0 12 10.586 1.414 0 0 1.414 10.586 12 0 22.586 1.414 24 12 13.414 22.586 24 24 22.586 13.414 12 24 1.414"/>
        </g>
    </svg>

</template>
<script>
export default {
    name: 'i-close',
}
</script>
<style lang="scss" scoped>
@include icon-size;
.close{
    width: 13px;
    height: 13px;
    fill: orange;
    &:hover{
        fill: rgb(255, 123, 0);
    }
}
</style>