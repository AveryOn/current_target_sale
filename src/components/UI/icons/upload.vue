<template>

    <svg class="upload" viewBox="-1 -1 25 25" xmlns="http://www.w3.org/2000/svg">
        <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm1-11h4v2h-4v4h-2v-4h-4v-2h4v-4h2z"/>
    </svg>

</template>
<script>
export default {
    name: 'i-upload',
}
</script>
<style lang="scss" scoped>
.upload{
    width: 35px;
    height: 35px;
    fill: $color-orange-white;
    &:hover{
        fill: rgb(255, 123, 0);
    }
}
</style>

