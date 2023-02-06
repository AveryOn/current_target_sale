<!-- ПАНЕЛЬ ВЫВОДИТ СТАТИСТИКУ ИНТЕРНЕТ МАГАЗИНА -->
<template>
    <div class="statistics">
        <h1-comp>Statistics</h1-comp>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    watch: {
        darkMode(newValue){
            // Смена темы для statistics
            const statistics = document.querySelector('.statistics')
            if(newValue){
                statistics.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            }else{
                statistics.style.backgroundColor = ''
            }
        }
    }, 
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
        }),
    },
    mounted(){
             // Смена темы для statistics
             const statistics = document.querySelector('.statistics')
            if(this.darkMode){
                statistics.style.backgroundColor = 'rgba(36, 33, 33, 0.9)'
            }else{
                statistics.style.backgroundColor = ''
            }
    },
}
</script>
<style lang="scss" scoped>
.statistics{
    display: flex;
    border: $border;
    border-radius: $radius;
    min-width: 70%;
    min-height: 50vh;
    background-color: white;
    box-shadow: $shadow;
}  
</style>