<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Agregar postre nuevo</h5>
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
            <div id="flexi">
              <input type="text" v-model="newD.postre">
              <label for="">Postre</label>
              <input type="text" v-model="newD.tiempoDePreparado">
              <label for="">Tiempo de preparado</label>
              <input type="text" v-model="newD.cantidadDeIngredientes">
              <label for="">Cantidad de ingredientes</label>
              <slot></slot>
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
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="la">Guardar nuevo postre</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      newD: {
        postre: '',
        tiempoDePreparado: '',
        cantidadDeIngredientes: ''
      }
    }
  },
  methods: {
    ...mapActions(['addDessert']),
    la () {
      this.addDessert(this.newD)
    }
  }
}
</script>
<style>
  #flexi {
    display: flex;
    flex-direction: column;
    text-align: center;
    /* margin: auto auto auto auto; */
    text-align: center;
  }
  #flexi input {
    margin-left: 100px;
  }
  #btnagregar {
    margin: 7px;
    margin-left: 140px
  }
</style>
