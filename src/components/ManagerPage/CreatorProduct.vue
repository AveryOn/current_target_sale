<!-- ОКНО СОЗДАНИЯ НОВОГО ТОВАРА, ТАКЖЕ ИСПОЛЬЗУЕТСЯ И В OWNER СТРАНИЦЕ -->
<template>
    <div v-show="show">
        <slot></slot>
    </div>
</template>
<script>
import ShowTemplate from '@/mixins/ShowTemplate';
export default {
    mixins: [ShowTemplate],
    props: {
        show:{
            required: true,
        }
    }
}
</script>
<style lang="scss" scoped>

</style>