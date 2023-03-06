<template>

    <svg class="icon reset" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 25 25" display="none">
        <path d="M12,0c-2.978,0-5.821,1.111-8,3.057V0H2V5c0,1.103,.897,2,2,2h5v-2H4.86c1.867-1.901,4.437-3,7.14-3,5.514,0,10,4.486,10,10s-4.486,10-10,10S2,17.514,2,12H0c0,6.617,5.383,12,12,12s12-5.383,12-12S18.617,0,12,0Z"/>
    </svg>

</template>
<script>
export default {
    name: 'i-reset',
}
</script>
<style lang="scss" scoped>
@include icon-size;
.reset{
    position: relative;
    width: 14px;
    height: 14px;
    top: 0;
    left: 0;
    fill: orange;
    &:hover{
        fill: rgb(255, 123, 0);
    }
}
</style>