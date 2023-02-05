<template>
    <div class="comment">
        <div class="user-metadata">
            <div class="comment-photo"></div>
            <div class="username">{{ comment.username }}</div>
            <p>_________user ID: {{ comment.ownerId }}</p>
        </div>
        <p class="comment-message">{{ comment.comment }}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    watch: {
        darkMode(newValue){
            // Смена темы для comment
            const comment = document.querySelectorAll('.comment')
            if(newValue){
                comment.forEach(item => {
                    item.style.backgroundColor = 'rgba(44, 44, 44, 1)'
                    item.style.color = 'rgb(255, 205, 138)'
                })
            }else{
                comment.forEach(item => {
                    item.style.backgroundColor = ''
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

    mounted() {
        // Смена темы для comment
        const comment = document.querySelectorAll('.comment')
        if(this.darkMode){
            comment.forEach(item => {
                item.style.backgroundColor = 'rgba(44, 44, 44, 1)'
                item.style.color = 'rgb(255, 205, 138)'
            })
        }else{
            comment.forEach(item => {
                item.style.backgroundColor = ''
                item.style.color = ''
            })
        }
    },
}
</script>
<style lang="scss" scoped>
.comment{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 98%;
    background-color: rgba(245, 222, 179, 0.534);
    border-radius: $radius;
    height: 120px;
    margin: 10px auto 10px auto;
    padding: 10px;
    align-self: flex-start;
    transition: box-shadow 0.4s ease;
    &:hover{
        box-shadow: $shadow;
    }
} 
.user-metadata{
    display: flex;
    align-items: center;
}
.comment-photo{
    width: 40px;
    height: 40px;
    background-color: black;
    border-radius: 50%;
}
.username{
    margin-left: 10px;
}
.comment-message{
    margin-top: 10px;
} 
</style>