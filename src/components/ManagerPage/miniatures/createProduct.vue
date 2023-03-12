<template>
    <!-- МИНИАТЮРА ДЛЯ СОЗДАНИЯ НОВОГО ТОВАРА -->
    <div class="create-product">

        <svg class="miniature create-product__plus" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="24" height="24">
            <path d="M255.668,511.885l150.667-147.364c83.577-82.846,84.169-217.758,1.323-301.334s-217.758-84.169-301.334-1.323  c-0.443,0.439-0.884,0.88-1.323,1.323c-83.211,83.213-83.21,218.126,0.003,301.337c0.056,0.056,0.112,0.112,0.168,0.168  L255.668,511.885z M135.13,93.316c66.524-66.618,174.458-66.695,241.076-0.17s66.695,174.458,0.17,241.076L255.668,452.266  L135.13,334.392c-66.571-66.568-66.574-174.498-0.006-241.07C135.126,93.32,135.128,93.318,135.13,93.316L135.13,93.316z   M234.36,235.162h-63.923v-42.616h63.923v-63.923h42.615v63.923h63.923v42.616h-63.923v63.923H234.36V235.162z"/>
        </svg>
    
        <svg class="miniature create-product__trolley" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.974,2h3V0h-3a3,3,0,0,0-3,3V16.271l-2.721.876-2.814-8.84L.064,12.244l2.7,8.922-2.741.882.614,1.9,15.467-4.979A4.018,4.018,0,0,0,19.974,24c5.274-.138,5.273-7.863,0-8V3A1,1,0,0,1,20.974,2ZM2.551,13.551l8.59-2.732,2.207,6.941L4.672,20.553ZM21.974,20a2,2,0,0,1-4,0A2,2,0,0,1,21.974,20ZM9.088,13.265l.605,1.906-3.466,1.1-.606-1.906Z"/>
        </svg>

    </div>

</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.create-product{
    max-width: 90px;
    max-height: 90px;
}
.miniature{
    display: inline-block;
    position: relative;
    fill: rgb(253, 148, 11);
}
.create-product__trolley{
    width: 90px;
    height: 90px;
}
.create-product__plus{
    position: absolute;
    width: 40px;
    height: 40px;
    top: 22px;
    left: 42px;
}

</style>