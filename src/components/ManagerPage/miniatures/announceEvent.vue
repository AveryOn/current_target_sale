<template>

    <!-- МИНИАТЮРА ОБЬЯВЕНИЯ АКЦИИ ИЛИ СОБЫТИЯ -->
    <div class="announce-event">

        <svg class="miniature announce-event__calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1" height="1">
            <path d="M17,10c-3.859,0-7,3.14-7,7s3.141,7,7,7,7-3.14,7-7-3.141-7-7-7Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm1-5.414l1.707,1.707-1.414,1.414-2.293-2.293v-3.414h2v2.586Zm6-11.586v6.349c-.569-.704-1.247-1.312-2-1.818V5c0-.551-.448-1-1-1H3c-.551,0-1,.449-1,1v3h15c-2.142,0-4.106,.751-5.651,2H2v12h7.518c.506,.756,1.125,1.429,1.831,2H0V5c0-1.654,1.346-3,3-3h3V0h2V2h8V0h2V2h3c1.654,0,3,1.346,3,3Z"/>
        </svg>

    </div>

</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.announce-event{
    max-width: 90px;
    max-height: 90px;
}
.miniature{
    display: inline-block;
    position: relative;
    fill: rgb(253, 148, 11);
}
.announce-event__calendar{
    width: 90px;
    height: 90px;
}

</style>