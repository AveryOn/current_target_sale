<template>
    <div class="main-owner-page">
        <div class="navbar-owner-page">
            <h1>Hello, Owner!</h1>
        </div>
        <div class="statistics">
            <!-- <table>
                <tr>
                    <th scope="col">Company</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr> 
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table> -->
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
h1{
    background-image: linear-gradient(90deg, #fc3b22, $color-orange-white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.main-owner-page{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    border: $border;
    border-radius: $radius;
    .navbar-owner-page{
        display: flex;
        h1{
            font-size: 3.5em;
            margin: 20px;
        }
    }
}
</style>