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
                data-dismiss="modal1"
                aria-label="Close"
                >
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div id="flexi">
                    <input type="text">
                    <label for="">Postre</label>
                    <input type="text">
                    <label for="">Tiempo de preparado</label>
                    <input type="text">
                    <label for="">Cantidad de ingredientes</label>
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
                <button type="button" class="btn btn-primary">Editar postre</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style></style>
