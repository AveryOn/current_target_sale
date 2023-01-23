<template>
    <div class="comment">
        <div class="UserMetadata">
            <div class="CommentPhoto"></div>
            <div class="Username">{{ comment.username }}</div>
            <p>_________user ID: {{ comment.ownerId }}</p>
        </div>
        <p class="CommentMessage">{{ comment.comment }}</p>
    </div>
</template>
<script>
export default {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    mounted() {

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