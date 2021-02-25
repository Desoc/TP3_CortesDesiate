<template>
  <div>
    <div
      class="modal fade"
      id="modalRemove"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Eleminar un postre</h5>
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
            <p>Se va a eliminar un postre, desea continuar?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deletes">Borrar postre</button>
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
    ...mapActions(['deletePostre']),
    deletes () {
      this.deletePostre({
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
    margin: auto;
  }
</style>
