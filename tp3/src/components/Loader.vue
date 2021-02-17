<template>
    <div id="load"></div>
</template>
<script>
export default {
}
</script>
<style lang="css">
    #load {
        width: 40px;
        height: 40px;
        margin: 200px 550px 200px 650px;
        border: 6px;
        border-style: solid;
        border-radius: 50px;
        border-color: rgb(255, 161, 127);
        border-top-color: rgb(0, 255, 149);
        animation-name: girar;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }
    @keyframes girar {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
