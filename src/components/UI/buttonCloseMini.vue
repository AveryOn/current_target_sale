<template>
    <div class="button-close-mini">
        x
    </div>
</template>
<script>
export default {
    name: 'button-close-mini',
}
</script>
<style lang="scss" scoped>
.button-close-mini{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    top: -2%;
    right: -90%;
    background-color: red;
    padding: 5px;
    border-radius: 50%;
    font-size: 17px;
    &:hover{
        cursor: pointer;
        rotate: -95deg;
        box-shadow: $shadow;
    }
}
</style>