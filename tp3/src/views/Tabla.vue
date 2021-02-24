<template>
  <div id="container">
    <Loader v-if="show === false"/>
    <div v-else class="table-responsive text-nowrap">
      <table class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
        <thead>
          <th v-for="a in header" :key="a">
              {{ a }}
          </th>
        </thead>
        <tr v-for="i in desserts" :key="i.id">
          <td v-for="a in i" :key="a">
            {{ a }}
<<<<<<< HEAD
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
        <ModalEdit
          :idModal="i.id"
        />
        <ModalBye/>
        <button id="edibtn" class="btn btn-outline-success btn-light btn-sm" data-toggle="modal" data-target="#modalEdit" @click="consultarPostre(i.id)">Editar</button>
        <button id="borrbtn" type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalDelete" @click="consultarPostre(i.id)">Eliminar</button>
      </tr>
    </table>
=======
          </td>
          <ModalEdit
            :idModal="i.id"
          />
          <ModalRemove :idModal="i.id" />
          <button id="edibtn" class="btn btn-outline-success btn-light btn-sm" data-toggle="modal" data-target="#modalEdit" @click="consultarPostre(i.id)">
            <i class="fas fa-edit"></i>
            Editar
          </button>
          <button id="edibtn" class="btn btn-outline-danger btn-light btn-sm" data-toggle="modal" data-target="#modalRemove" @click="consultarPostre(i.id)">
            <i class="fas fa-trash-alt"></i>
            borrar
          </button>
        </tr>
      </table>
    </div>
>>>>>>> 0664c491fda601fc316f4781ee91e93aafd18c5c
    <Modal/>
    <div id="sele">
      <div>
        <button id="agbtn" class="btn btn-outline-primary btn-light" data-toggle="modal" data-target="#exampleModal">
          <i class="fas fa-plus"></i>
          Agregar
        </button>
      </div>
      <div class="custom-control custom-switch" v-if="show === true">
        <input type="checkbox" class="custom-control-input" id="customSwitch1">
        <label for="customSwitch1" class="custom-control-label" @click="mostrar">Mostrar/Ocultar filtro</label>
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
<<<<<<< HEAD
import ModalBye from '../components/ModalBye'
=======
import ModalRemove from '../components/ModalRemove'
>>>>>>> 0664c491fda601fc316f4781ee91e93aafd18c5c
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
<<<<<<< HEAD
    ModalBye
=======
    ModalRemove
>>>>>>> 0664c491fda601fc316f4781ee91e93aafd18c5c
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
        border-color: rgb(255, 203, 92);
        background-color: ivory;
    }
    table {
<<<<<<< HEAD
        margin: 10% 15% 2% 30%;
=======
        margin: 10% auto;
>>>>>>> 0664c491fda601fc316f4781ee91e93aafd18c5c
        border-radius: 15px;
        text-align: center;
    }
    #sele {
      margin-left: 35%;
    }
    #container {
      padding-bottom: 103px;
    }
    #edibtn, #borrbtn {
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
