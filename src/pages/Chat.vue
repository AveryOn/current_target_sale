<!-- ЭТО ЧАТ МОДЕРАТОРА, ИСПОЛЬЗУЕТСЯ И ДЛЯ ФУНКЦИОНАЛА СТРАНИЦЫ ВЛАДЕЛЬЦА -->
<template>
    <div>
        <button-comp class="btn-back-route" @click="$router.go(-1)">Back</button-comp>
        <div class="main">
            <h1>This is Chat</h1>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.main{
    display: flex;
    justify-content: center;
}
.btn-back-route{
    box-shadow: $shadow;
}
</style>