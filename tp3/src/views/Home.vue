<template>
  <div class="home">
    <h1 class="d-flex justify-content-center">5 postres para disfrutar en cualquier epoca del año</h1>
    <Carrousel/>
    <Footer/>
    <!-- <footer>
      <a class="navbar-brand fixed-bottom a">
        <img
          src="../assets/gmail.png"
          width="20"
          height="20"
          alt=""
          loading="lazy"
        />
        ulises.cortes@institutoamemt.edu.ar
      </a>
    </footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Carrousel from '../components/Carrousel.vue'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Carrousel,
    Footer
  }
}
</script>
