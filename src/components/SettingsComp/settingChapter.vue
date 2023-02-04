
<!-- КОМПОНЕНТ ОТРИСОВЫВАЕТ РАЗДЕЛЫ НАСТРОЕК 
    ОТНОСИТЕЛЬНО ОТКРЫТОЙ ВКЛАДКИ В ПАНЕЛЕ НАСТРОЕК -->
<template>
    <div class="settings-body-chapter">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        openChapterSetting: {
            type: [Object],
            required: true,
        }
    },
}
</script>
<style lang="scss" scoped>
.settings-body-chapter{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
    max-width: 100%;
    height: max-content;
    padding: 20px 0 20px 0;
}
</style>