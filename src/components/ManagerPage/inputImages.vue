<!-- 
    ИНПУТ ДЛЯ картинок для создания товара на панеле модератора или владельца
 -->
 <template>

    <div>
        <input 
        v-show="0" 
        ref="images" 
        type="file" 
        multiple
        @change="readImages"
        accept="image/*,.img, .jpg, .jpeg, .png"
        >
        <button class="input-file" @click="triggerClickInputImage">
            <slot></slot>
        </button>
    </div>

</template>

<script>
export default {
    name: 'input-images',

    data: () => ({

        images: [],
        data: null,

    }),

    methods: {
        log(data){
            console.log(data);
        },
        handlerBlob(file){
            const reader = new FileReader()
            reader.onload = e => {
                if(!this.images.includes(e.target.result)){
                    this.images.push(e.target.result)
                }
            }
            reader.readAsDataURL(file)
        },

        readImages(){
            try{
                const images = [...this.$refs.images.files]
                
                images.forEach(image => {
                    this.handlerBlob(image)
                });

                this.$emit('getImages', this.images)

            }catch(e) {
                console.log('Не удалось загрузить фото');
            }
        },

        triggerClickInputImage(){
            this.$refs.images.click()
        }
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.input-file{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    // border: $border;
    border-radius: $radius;
    color: $color-orange-white;
    border: none;
    outline: rgba(0, 0, 0, 0);
    cursor: pointer;
    background: none;
    box-shadow: 0 2px 2px black;
    &:active{
        box-shadow: 0 0px 2px black;
    }
}

</style>