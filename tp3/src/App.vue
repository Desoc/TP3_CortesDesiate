<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
#app {
  background-color: coral;
  width: 1366px;
  /* height: max-content; */
}
</style>
