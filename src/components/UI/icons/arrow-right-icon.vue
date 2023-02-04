<template>
    <svg class="icon arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12ZM2,12A10,10,0,1,0,12,2,10.011,10.011,0,0,0,2,12Zm13.414-1.414L10.7,5.874,9.289,7.288,14,12,9.327,16.673l1.414,1.414,4.673-4.673a2,2,0,0,0,0-2.828Z"/>
    </svg>
</template>
<script>
export default {
    name: 'i-arrow-right',
}
</script>
<style lang="scss" scoped>
@include icon-size;
.arrow-right{
    position: relative;
    top: 1%;
    fill: orange;
}
</style>

