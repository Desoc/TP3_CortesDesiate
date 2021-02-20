<template>
  <nav id="nav" class="navbar navbar-expand-sm navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/tabla">
          <a class="nav-link" href="#">Tabla de Postres</a>
          </router-link>
        </li>
        <li class="nav-item dropdown active">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Más recetas
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/recetas/chocotorta">
            <a class="dropdown-item" href="#">Chocotorta</a>
            </router-link>
            <router-link to="/recetas/flan">
            <a class="dropdown-item" href="#">Flan</a>
            </router-link>
            <router-link to="/recetas/islaflotante">
            <a class="dropdown-item" href="#">Isla Flotante</a>
            </router-link>
            <router-link to="/recetas/pastafrola">
            <a class="dropdown-item" href="#">Pastafrola</a>
            </router-link>
            <router-link to="/recetas/tiramisu">
            <a class="dropdown-item" href="#">Tiramisu</a>
            </router-link>
          </div>
        </li>
        <!-- <li class="nav-item active">
            <a class="nav-link" href="/home/uli/Documentos/Front/3er TP/HTML/ecom.html">Market</a>
          </li> -->
        <li v-if="!isLogged">
          <router-link to="/auth" type="button" class="btn btn-outline-success">LOGIN
          <i class="fas fa-sign-in-alt"></i>
          </router-link>
        </li>
        <li v-if="isLogged">
          <a @click="logout" type="button" class="btn btn-outline-danger">LOGOUT
          <i class="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
    <router-link to="/" class="navbar-brand">
      <img src="../assets/IMAGENES/logoppal.jpg" width="50" height="50" alt="" loading="lazy" />
    </router-link>
  </nav>
</template>

<script>
export default {
  computed: {
    isLogged () {
      return this.$store.getters.isLogged
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.replace('/')
    }
  }
}
</script>
