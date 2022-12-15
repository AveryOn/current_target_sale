<!-- TESTING COMP -->
<template>
    <div class="BlockID">
        <h1>Page Block ID</h1>
        <div class="blockIdContent">
            <!-- <h1>Block Index = {{ blockId }}</h1><br>
            <h1>Block ID = {{ $store.state.blocks[blockId].id }}</h1><br>
            <h1>Block Name = {{ $store.state.blocks[blockId].name }}</h1> -->
            <div class="BlockData">
                <h2>Header Block</h2>
                <div class="HeaderBlock">
                    <div class="ImageBlock">
                        IMAGE BLOCK
                        <h1>{{ blocks[blockId].name }}</h1>
                    </div>
                    <div class="MetaDataBlock">
                        <h2>Meta Data Block:</h2>
                        <h3>Block Index: {{ blockId }}</h3>
                        <h3>Block ID: {{ blocks[blockId].id }}</h3>
                        <h3>Block Name: {{ blocks[blockId].name }}</h3>
                    </div>
                </div><br>
                <h2>Body Block</h2>
                <div class="BodyBlock">
                    <div class="DescriptionBlock">Description Block Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, doloribus adipisci. Vitae, id, in quas sunt architecto sequi blanditiis nulla illo assumenda iste voluptas, minus eius dolorum iure vero ducimus.</div>
                    <div class="CommentsBlock">
                        Comments Block
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            blocks: [...this.$store.state.blocks],
            blockId: this.$route.params.id
        }
    },
}
</script>
<style scoped>
.BlockID{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
}

.blockIdContent{
    width: 100%;
    min-height: 100vh;
    border: 1px solid rgb(48, 157, 165);
    margin: 20px 0;
}
.BlockData{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid rgb(48, 157, 165);
}
.HeaderBlock{
    display: flex;
    width: 100%;
    border: 1px solid rgb(48, 157, 165);
    justify-content: space-around;
}
.ImageBlock{
    width: 300px;
    height: 400px;
    background-color: black;
    margin: 10px;
    box-shadow: 2px 3px 10px black;
    color: white;
    text-align: center;
}
.MetaDataBlock{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 300px;
    border: 1px solid rgb(48, 157, 165);
    margin: 10px;
}
.BodyBlock{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid rgb(48, 157, 165);
    margin-top: 10px;
    min-height: 20vh;

}
.DescriptionBlock{
    display: flex;
    justify-content: center;
    width: 90%;
    height: 200px;
    border: 1px solid rgb(48, 157, 165);
    margin: 10px;
    padding: 15px;
}
.CommentsBlock{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(48, 157, 165);
    margin: 10px;
}
.comment{
    display: flex;
    flex-direction: column;
    width: 90%;
    min-height: 80px;
    margin: 10px;
    padding: 10px;
    border: 1px solid rgb(48, 157, 165);
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