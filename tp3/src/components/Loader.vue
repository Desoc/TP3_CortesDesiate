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
        border: 6px;
        border-style: solid;
        border-radius: 50px;
        border-color: rgb(255, 161, 127);
        border-top-color: chartreuse;
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
