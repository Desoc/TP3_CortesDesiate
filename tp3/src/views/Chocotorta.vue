<template>
  <div>
    <div class="cent container">
      <div class="tarj">
        <img src="../assets/chocotorta2.jpg" class="imag" />
        <div class="ing borde">
          <h2>Ingredientes</h2>
          <ul>
            <li>1kg de galletitas cuadradas de chocolate</li>
            <li>1kg de dulce de leche repostero</li>
            <li>
              1kg de crema de leche (o queso crema para los que les gusta este
              ingrediente)
            </li>
            <li>café soluble (1 taza aprox.)</li>
            <li>1 tableta de chocolate para rallar (opcional)</li>
          </ul>
        </div>
      </div>
      <div class="borde">
        <h2>Preparación</h2>
        <ol>
          <li>
            Mojar las galletitas en el café preparado e ir colocándolas una al
            lado de la otra en una fuente rectangular.
          </li>
          <li>
            Luego colocar una capa de la crema obtenida de la mezcla del dulce
            de leche repostero junto con la crema de leche o queso crema.
          </li>
          <li>
            Seguir los mismos pasos hasta terminar cubriendo el postre con el
            resto de la crema.
          </li>
          <li>Rallar chocolate y/o hacer pequeños rulos para decorar.</li>
          <li>
            Llevar a la heladera durante 1hr aprox., esto para que quede bien
            firme.
          </li>
        </ol>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>
<style>
  .cent {
    padding-bottom: 10px;
  }
</style>
