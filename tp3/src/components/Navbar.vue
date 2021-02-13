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
          <a class="nav-link" href="">Tiramisu</a>
        </li>
        <li class="nav-item active">
          <router-link to="/chocotorta" class="nav-link" href="">Chocotorta</router-link>
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
            <a class="dropdown-item" href="">Flan</a>
            <a class="dropdown-item" href="">Isla flotante</a>
            <router-link to="/pastafrola" class="dropdown-item" href="">Pastafrola</router-link>
            <router-link to="/tabla" class="dropdown-item" href="">Tabla de postres</router-link>
          </div>
        </li>
        <!-- <li class="nav-item active">
            <a class="nav-link" href="/home/uli/Documentos/Front/3er TP/HTML/ecom.html">Market</a>
          </li> -->
      </ul>
    </div>
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logoppal.jpg" width="50" height="50" alt="" loading="lazy" />
    </router-link>
  </nav>
</template>
<style lang="css">
  #nav {
    height: 55px;
    padding: 5px;
  }
</style>
