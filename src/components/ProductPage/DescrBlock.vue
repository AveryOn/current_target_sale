<!-- БЛОК С ОПИСАНИЕМ ТОВАРА -->
<template>
    <div class="description-block">
            <strong>
            <div class="description-text" id="descr" ref="descr">
                {{ this.descriptionData }}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum aliquam ratione dolore tempore eos non quas dolorem autem saepe amet consequatur repellat dolorum inventore earum possimus quibusdam repellendus porro expedita maxime, pariatur, maiores temporibus! Earum, natus recusandae neque distinctio nulla quidem aut nisi velit ex vero, labore temporibus maxime! Earum, culpa? At perspiciatis, eveniet ab, cum unde consequatur possimus architecto asperiores aliquam totam quos! Ut quasi magni molestias dolor est consectetur, animi iste consequuntur distinctio vel molestiae quaerat similique possimus commodi, doloribus assumenda deleniti inventore, odio quos rerum. Possimus beatae corrupti eum suscipit ipsum unde consequuntur explicabo quae culpa excepturi ex inventore sed, consectetur quasi iste, dicta at debitis saepe similique sint dolorum. Et doloribus ducimus soluta deleniti! Porro reprehenderit beatae voluptates. Nam est non cumque aliquid quaerat voluptatem laborum adipisci fugit, qui rem ex numquam possimus in quas, dolore a eos sapiente consectetur eligendi tempore corporis cupiditate velit aperiam consequatur. Nesciunt tenetur dolor sed qui, eos dolorem voluptatem nihil sequi harum non placeat officia quas dicta? Earum aut, incidunt similique, perferendis magnam eos quidem recusandae aperiam corporis voluptas odio a qui nemo eaque voluptatum vel, sequi dicta est quia! Nesciunt natus a maiores incidunt similique nihil vel doloremque.
            </div>
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
    },
    mounted(){
        const element = document.querySelector('.description-block');
        console.log(element);
    },
    created(){
        // this.$watch(
        //     () => ,
        //     () => {
        //         if(this.$route.query.tag){
        //             console.log(this.additFilteredTagsBar);
        //             // this.tagsAddit = [...this.$route.query.tag]
        //         }
        //     },
        //     { immediate: true }
        // )
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
    overflow: auto;
}
.description-text{
    border: $border;
}
</style>