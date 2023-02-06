<template>
    <div @click="checked" class="check-button">
        <div class="check-circle"></div>
    </div>
</template>
<script>
export default {
    name: 'check-button',
    props: {
        isCheck: {
            type: [Boolean],
            default: false,
            required: true,
        }
    },
    data() {
        return {
            isChecked: this.isCheck
        }
    },

    methods: {
        checked(){
            const checkCircle = document.querySelector('.check-circle')
            const checkButton = document.querySelector('.check-button')
            if(this.isCheck){
                this.isChecked = false
                this.$emit('checked', this.isChecked)
                checkCircle.style.marginRight = 'auto'
                checkCircle.style.marginLeft = ''
                checkButton.style.backgroundColor = ''
            }else{
                this.isChecked = true
                this.$emit('checked', this.isChecked)
                checkCircle.style.marginLeft = 'auto'
                checkCircle.style.marginRight = ''
                checkButton.style.backgroundColor = 'rgba(78, 207, 66, 0.637)'
            }
        }
    },
    watch: {
        isCheck(newValue){
            // Этот блок кода служит для того чтобы чекбокс не слетал если параметр с пропса isCheck == true
            // Если чекбокс по умолчанию должен быть акивен то с него биндится isCheck с булевым значением
            const checkCircle = document.querySelector('.check-circle')
            const checkButton = document.querySelector('.check-button')
            if(newValue){
                checkCircle.style.marginLeft = 'auto'
                checkCircle.style.marginRight = ''
                checkButton.style.backgroundColor = 'rgba(78, 207, 66, 0.637)'
            }else{
                checkCircle.style.marginRight = 'auto'
                checkCircle.style.marginLeft = ''
                checkButton.style.backgroundColor = ''
            }
        }
    },

    mounted(){
        // Этот блок кода служит для того чтобы чекбокс не слетал если параметр с пропса isCheck == true
        // Если чекбокс по умолчанию должен быть акивен то с него биндится isCheck с булевым значением
        const checkCircle = document.querySelector('.check-circle')
        const checkButton = document.querySelector('.check-button')
        if(this.isCheck){
            checkCircle.style.marginLeft = 'auto'
            checkCircle.style.marginRight = ''
            checkButton.style.backgroundColor = 'rgba(78, 207, 66, 0.637)'
        }else{
            checkCircle.style.marginRight = 'auto'
            checkCircle.style.marginLeft = ''
            checkButton.style.backgroundColor = ''
        }
    }
}
</script>
<style lang="scss" scoped>
.check-button{
    position: relative;
    width: 40px;
    height: 20px;
    border-radius: 30px;
    border: $border;
    margin: 5px;
    padding: 1px;
    cursor: pointer;
    .check-circle{
        position: relative;
        background: rgb(253, 148, 11);
        width: 50%;
        height: 100%;
        border-radius: 50%;
        border: $border;
    }
}
</style>