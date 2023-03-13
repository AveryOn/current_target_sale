<!-- ПАНЕЛЬ ОТОБРАЖАЮЩАЯ СПИСОК МОДЕРАТОРОВ И ИХ МЕТАДАННЫЕ -->
<template>
    <div class="list-moderator">
        <h1-comp>List Moderators</h1-comp>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    watch: {
        darkMode(newValue){
            // Смена темы для listModerator
            const listModerator = document.querySelector('.list-moderator')
            if(newValue){
                listModerator.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            }else{
                listModerator.style.backgroundColor = ''
            }
        }
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
    mounted(){
             // Смена темы для listModerator
             const listModerator = document.querySelector('.list-moderator')
            if(this.darkMode){
                listModerator.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            }else{
                listModerator.style.backgroundColor = ''
            }
    },
}
</script>
<style lang="scss" scoped>
.list-moderator{
    display: flex;
    min-width: 100%;
    min-height: 50vh;
    border: $border;
    border-radius: $radius;
    margin: 20px 0;
    background-color: white;
    box-shadow: $shadow;
}
</style>