<!-- БЛОК С ОПИСАНИЕМ ТОВАРА -->
<template>
    <div class="description-block">
        <strong>
            {{ this.descriptionData }}
        </strong>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            products: state => state.products, 
        }),

        descriptionData(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.description
                }else{
                    continue
                }
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.description-block{
    display: flex;
    justify-content: flex-start;
    width: 90%;
    font-size: 20px;
    height: 200px;
    padding: 15px;
    margin: 10px 0 20px 0;
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
}
</style>