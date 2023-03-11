<!-- 
    ИНПУТ ДЛЯ ФАЙЛОВ
 -->
 <template>

    <div>
        <input 
        v-show="0" 
        ref="file" 
        type="file" 
        @change="readFile"
        accept="image/*,.img, .jpg, .jpeg, .png"
        >
        <button class="input-file" @click="triggerClickInputFile">
            <slot></slot>
        </button>
    </div>

</template>
<script>
export default {
    name: 'input-file',

    methods: {

        readFile(){
            try{
                const file = this.$refs.file.files[0];
                const reader = new FileReader()
                
                reader.onload = e => {
                    this.$emit('uploadImage', e.target.result)
                }
    
                reader.readAsDataURL(file)
            }catch(e) {
                console.log('Не удалось загрузить фото');
            }
        },

        triggerClickInputFile(){
            this.$refs.file.click()
        }
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