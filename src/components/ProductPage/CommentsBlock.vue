<!-- БЛОК С КОММЕНТАРИЯМИ -->
<template>
    <h1 class="title-text">Отзывы о товаре</h1>
    <div class="comments-block">
        <!-- ОТРИСОВКА КОММЕНТАРИЕВ -->
        <comment-comp
            v-for="comment in textComment"
            :comment="comment"
            >
        </comment-comp>
    </div>
</template>
<script>
import CommentComp from '@/components/ProductPage/CommentComp.vue'
import { mapState } from 'vuex'
export default {
    components: {
        CommentComp,
    },
    computed:{
        ...mapState({
            products: state => state.products,
        }),
        textComment(){
            for(const product of this.products){
                if(product.id == this.$route.params.productId){
                    return product.comments
                }else{
                    continue
                }
            }
        },
    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
h1, h2{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
   .comments-block{
    width: 90%;
    height: 400px;
    border-bottom: $border;
    border-top: $border;
    overflow: hidden;
    margin: 20px;
    padding: 10px 0 10px 0;
    &:hover{
        overflow: auto;
    }
    &::-webkit-scrollbar{
        width: 9px;
        height: 9px;
    }
    &::-webkit-scrollbar-track{
        background: rgba(128, 128, 128, 0.2);
        &:hover{
            background: rgba(128, 128, 128, 0.3);
        }
    }
    &::-webkit-scrollbar-thumb{
        background: linear-gradient(360deg, #fc3b22, $color-orange-white)
    }
}
</style>