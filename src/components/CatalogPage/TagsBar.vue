<!-- ЛИСТ-БАР С ОТРИСОВКОЙ ТЕГОВ ПО ВЫБРАННОЙ КАТЕГОРИИ -->
<template>
    <div class="tags-bar">
        <slot></slot>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    watch: {
        darkMode(newValue){
            // Смена темы для tags-bar
            const tagsBar = document.querySelector('.tags-bar')
            if(newValue){
                tagsBar.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            }else{
                tagsBar.style.backgroundColor = ''
            }
        }
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
    mounted(){
        // Смена темы для tags-bar
        const tagsBar = document.querySelector('.tags-bar')
        if(this.darkMode){
            tagsBar.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
        }else{
            tagsBar.style.backgroundColor = ''
        }
    }
}
</script>
<style lang="scss" scoped>
.tags-bar{
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    top: 5px;
    display: flex;
    border: $border;
    border-radius: $radius;
    margin: 0 10px;
    padding: 5px 20px;
    background-color: white;
    box-shadow: $shadow;
}
</style>