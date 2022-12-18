<!-- БЛОК С КОММЕНТАРИЯМИ -->
<template>
<h1>Comments Block</h1> 
<div class="comments-block">
    <!-- COMMENT 1 -->
    <div class="comment">
        <div class="UserMetadata">
            <div class="CommentPhoto"></div>
            <div class="Username">Username_1</div>
        </div>
        <p class="CommentMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit deleniti qui, nisi earum maiores labore voluptatum doloribus quis facere quidem doloremque consectetur et impedit accusamus recusandae. Nihil, eos nisi!</p>
    </div>
    <!-- COMMENT 2 -->
    <div class="comment">
        <div class="UserMetadata">
            <div class="CommentPhoto"></div>
            <div class="Username">Username_2</div>
        </div>
        <p class="CommentMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit deleniti qui, nisi earum maiores labore voluptatum doloribus quis facere quidem doloremque consectetur et impedit accusamus recusandae. Nihil, eos nisi!</p>
    </div>
    <!-- COMMENT 2 -->
    <div class="comment">
        <div class="UserMetadata">
            <div class="CommentPhoto"></div>
            <div class="Username">Username_3</div>
        </div>
        <p class="CommentMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit deleniti qui, nisi earum maiores labore voluptatum doloribus quis facere quidem doloremque consectetur et impedit accusamus recusandae. Nihil, eos nisi!</p>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
h1, h2{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
   .comments-block{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: $border;
    border-radius: $radius;
    box-shadow: $shadow;
}
.comment{
    display: flex;
    flex-direction: column;
    width: 90%;
    min-height: 80px;
    margin: 10px;
    padding: 10px;
    align-self: flex-start;
}
.UserMetadata{
    display: flex;
    align-items: center;
}
.CommentPhoto{
    width: 40px;
    height: 40px;
    background-color: black;
    border-radius: 50%;
}
.Username{
    margin-left: 10px;
}
.CommentMessage{
    margin-top: 10px;
} 
</style>