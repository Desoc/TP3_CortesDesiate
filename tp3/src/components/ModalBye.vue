<template>
    <div>
    <div
      class="modal fade"
      id="modalDelete"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Borrar postre</h5>
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
            <div id="modalE">
              <h4>Esta seguro de que quiere borrar este postre?</h4>
            </div>
            <button id="btneditar" type="button" class="btn btn-primary" data-dismiss="modal" @click="deleteD">Si</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['deleteDessert']),
    deleteD () {
      this.deleteDessert()
    }
  }
}
</script>
<style></style>
