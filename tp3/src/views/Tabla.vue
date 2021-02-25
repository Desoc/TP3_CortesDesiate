<template>
  <div id="container">
    <Loader v-if="show === false" />
    <div v-else class="table-responsive text-nowrap">
      <table
        class="table table-striped table-bordered table-sm"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <th v-for="a in header" :key="a">
            {{ a }}
          </th>
        </thead>
        <tr v-for="i in desserts" :key="i.id">
          <td>
            {{ i.postre }}
          </td>
          <td>
            {{ i.tiempoDePreparado }}
          </td>
          <td>
            {{ i.cantidadDeIngredientes }}
          </td>
          <ModalEdit :idModal="i.id" />
          <ModalBye />
          <button
            id="edibtn"
            class="btn btn-outline-success btn-light btn-sm"
            data-toggle="modal"
            data-target="#modalEdit"
            @click="consultarPostre(i.id)"
          >
            Editar
          </button>
          <button
            id="borrbtn"
            type="button"
            class="btn btn-danger btn-sm"
            data-toggle="modal"
            data-target="#modalDelete"
            @click="consultarPostre(i.id)"
          >
            Eliminar
          </button>
        </tr>
      </table>
    </div>
    <Modal />
    <div id="sele">
      <div>
        <button
          id="agbtn"
          class="btn btn-outline-primary btn-light"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i class="fas fa-plus"></i>
          Agregar
        </button>
      </div>
      <div class="custom-control custom-switch" v-if="show === true">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customSwitch1"
        />
        <label for="customSwitch1" class="custom-control-label" @click="mostrar"
          >Mostrar/Ocultar filtro</label
        >
      </div>
      <select v-model="selected" @click="filtro" v-if="appear === true">
        <option>Sin filtro</option>
        <option>Menos de 5 ingredientes</option>
        <option>Mas de 70 minutos de preparacion</option>
      </select>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import ModalEdit from '../components/ModalEdit'
import ModalBye from '../components/ModalBye'
export default {
  data () {
    return {
      selected: '',
      appear: false,
      pa: false
    }
  },
  components: {
    Loader,
    Modal,
    ModalEdit,
    ModalBye
  },
  computed: {
    ...mapState(['desserts', 'dessertsQ', 'dessertsT', 'header', 'show'])
  },
  mounted () {
    this.getDesserts()
  },
  methods: {
    ...mapActions(['getDesserts', 'dessertWithId']),
    mostrar () {
      this.appear = !this.appear
    },
    filtro () {
      if (this.selected === 'Menos de 5 ingredientes') {
        this.meDcinco()
      } else if (this.selected === 'Mas de 70 minutos de preparacion') {
        this.maDsetenta()
      } else if (this.selected === 'Sin filtro') {
        this.sinFiltro()
      }
    },
    meDcinco () {
      this.$store.state.desserts = this.$store.state.dessertsQ
    },
    maDsetenta () {
      this.$store.state.desserts = this.$store.state.dessertsT
    },
    sinFiltro () {
      this.$store.state.desserts = this.$store.state.dessertsSf
    },
    cambio () {
      this.pa = !this.pa
    },
    consultarPostre (id) {
      this.$store.state.dessertId = id
      this.dessertWithId(id)
    }
  }
}
</script>
<style lang="css">
    td, th{
        border-style: solid;
        border-color: black;
        text-align: center;
        background-color: ivory;
    }
    table {
        margin: 10% auto;
        border-radius: 15px;
        text-align: center;
    }
    #sele {
      margin-left: 35%;
    }
    #container {
      padding-bottom: 103px;
    }
    #edibtn {
      margin: 1px;
      padding: 3px;
    }
    #agbtn {
      /* margin-left: 10%; */
      margin: 0% 0% 2% 10%;
    }
    #uli {
      z-index: -1;
      background: rgb(0, 0, 1);
    }
    @media (max-width: 767px) {
    table {
        margin: auto;
        margin-top: 15px;
        margin-bottom: 20px;
        /* background-color: ivory; */
        border-radius: 15px;
    }
    #sele {
      margin: auto;
    }
    }
</style>
