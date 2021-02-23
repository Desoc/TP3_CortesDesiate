<template>
  <div>
    <div
      class="modal fade"
      id="modalEdit"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar un postre</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="modalE" method="editDessert">
              <input type="text" v-model="postreAEditar.postre"/>
              <label for="">Postre</label>
              <input type="text" v-model="postreAEditar.tiempoDePreparado"/>
              <label for="">Tiempo de preparado</label>
              <input type="text" v-model="postreAEditar.cantidadDeIngredientes"/>
              <label for="">Cantidad de ingredientes</label>
              <button type="button" class="btn btn-primary" data-dismiss="modal" @click="edith">Editar postre</button>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['postreAEditar'])
  },
  methods: {
    ...mapActions(['editDessert']),
    edith () {
      this.editDessert({
        postre: this.postreAEditar.postre,
        tiempoDePreparado: this.postreAEditar.tiempoDePreparado,
        cantidadDeIngredientes: this.postreAEditar.cantidadDeIngredientes
      })
    }
  }
}
</script>
<style>
  #modalE {
    display: flex;
    flex-direction: column;
    margin: auto auto auto 100px;
  }
</style>
