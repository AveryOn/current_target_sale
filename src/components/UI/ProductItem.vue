<!-- ЕДИНИЦА ТОВАРА ( КАРТОЧКА ТОВАРА )-->
<template>
    <div class="product-item">
        <slot></slot>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'product-item',
    watch: {
        darkMode(newValue){
            // Смена темы для productItem
            const productItem = document.querySelectorAll('.product-item')
            if(newValue){
                productItem.forEach(item => {
                    item.style.color = 'rgb(255, 205, 138)'
                })
            }else{
                productItem.forEach(item => {
                    item.style.color = ''
                })
            }
        }
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
    mounted(){
        // Смена темы для productItem
        const productItem = document.querySelectorAll('.product-item')
        if(this.darkMode){
            productItem.forEach(item => {
                item.style.color = 'rgb(255, 205, 138)'
            })
        }else{
            productItem.forEach(item => {
                item.style.color = ''
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.product-item{
    width: 180px;
    height: 230px;
    border: $border;
    border-radius: $radius;
    margin: 10px;
    transition: all 0.1s ease-in-out;
    overflow: hidden;
    &:hover{
        box-shadow: $shadow;
        cursor: pointer;
    }
}
</style>