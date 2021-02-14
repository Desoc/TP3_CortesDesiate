<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
#app {
  background-color: rgb(255, 203, 92);
}
</style>
