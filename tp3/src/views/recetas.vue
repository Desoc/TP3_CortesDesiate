<template>
    <div>
        <h1 class="medio">RECETAS</h1>
        <router-view></router-view>
    </div>
</template>
<style>

body {
    background-color: rgb(255, 203, 92);
    font-family: "Latin Modern Roman 10";
    font-style: oblique;
}
.a {
    font-size: small;
    color: black;
}
.ing {
    display: flex;
    flex-flow: column wrap;
    margin: 2% 2% 2% 2%;
}
.cent {
    width: fit-content;
    margin-left: 20px;
    margin-right: 20px;
    height: max-content;
}
.borde {
    border-color: rgb(255, 110, 84);
    border-style: groove;
    width: auto;
    border-width: 15px;
    margin-bottom: 15px;
}
.tarj {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-bottom: 2%;
}
.imag {
    height: auto;
    width: 395px;
    border-color: rgb(255, 110, 84);
    border-style: groove;
    border-width: 12px;
    margin-top: 2%;
}
.hist {
    width: fit-content;
}

.borders {
    border-color: black;
    border-style: solid;
    text-align: center;
    margin: -1px;
    background-color: rgb(238, 238, 238);
}
.hide {
    display: none;
}
.btn {
    background-color:gainsboro;
    font-size: small;
    width: fit-content;
    border-style: groove;
    border-color: rgb(206, 209, 13);
    margin-left: 2px;
    padding: 0.5px;
}
#tabla {
    background-color: lightblue;
    margin: auto;
    padding-top: 10px;
}
.medio {
    margin: auto;
    width: fit-content;
}
.m {
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    display: flex;
    justify-content: center;
}
.mem {
    text-align: center;
}
.med {
    width: fit-content;
    height: fit-content;
    margin: 5px;
}
ul{
    list-style: none;
}
li{
    list-style: none;
    margin-right: 15px;
}
@media (max-width: 767px) {
    .cent {
        margin-left: auto;
        margin-right: auto;
        }
    .imag {
    height: 275px;
    width: 295px;
    border-color: rgb(255, 110, 84);
    border-style: groove;
    border-width: 12px;
    margin-top: 2%;
    }
}
</style>
