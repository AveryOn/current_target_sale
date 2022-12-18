<template>
    <div v-show="show" class="basic-settings-layout">
        <div class="settings-content">
            <div class="setting-header">
                <h1 class="setting-title-text">Settings</h1>
                <button-comp @click="$emit('close')">Close</button-comp>
            </div>
            <div class="block-setting-layout">
                <div class="group-setting">
                    <h2 class="group-setting-title">User Settings</h2>
                    <div class="group-setting-body">User Settings Body</div>
                </div>
                <div class="group-setting">
                    <h2 class="group-setting-title">Moderator Settings</h2>
                    <div class="group-setting-body">Moderator Settings Body</div>
                </div>
            </div>
            <!-- <h2 class="title-group-setting">Moderator Settings</h2>
            <div class="group-setting">

            </div> -->
        </div>
    </div>
</template>
<script>
import ShowTemplate from '@/mixins/ShowTemplate';
export default {
    mixins: [ShowTemplate],
}
</script>
<style lang="scss" scoped>
@include h1-gradient;
@include h2-gradient;
.basic-settings-layout{
    display: flex;
    flex-direction: column;
    height: 70vh;
    width: 100%;
    background-color: white;
    border: $border;
    border-radius: $radius;
    overflow-y: scroll;
    overflow-x: hidden;
}
.settings-content{
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .setting-header{
        position: sticky;
        top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border: $border;
        border-radius: $radius;
        padding: 5px 20px;
        margin: 5px 5px 20px 5px;
        box-shadow: $shadow;
        .setting-title-text{
            display: flex;
        }
    }
    .block-setting-layout{
        display: flex;
        height: max-content;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 800px;
        width: 500px;
        margin: 10px;
    }
    .group-setting{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0 20px 0;
    }
    .group-setting-title{
        display: flex;
        align-items: center;
        height: 5%;
        margin: 10px;
    }
    .group-setting-body{
        width: 100%;
        height: 600px;
        border: $border;
        border-radius: $radius;
        margin-bottom: 20px;
    }
}
</style>