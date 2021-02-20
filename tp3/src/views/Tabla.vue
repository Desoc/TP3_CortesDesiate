<template>
  <div id="container">
    <Loader v-if="show === false"/>
    <table v-else>
      <thead>
        <th v-for="a in header" :key="a">
            {{ a }}
        </th>
      </thead>
      <tr v-for="i in desserts" :key="i.id">
        <td v-for="j in i" :key="j">
          {{ j }}
        </td>
      </tr>
    </table>
    <div id="sele">
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
export default {
  data () {
    return {
      selected: '',
      appear: false
    }
  },
  components: {
    Loader
  },
  computed: {
    ...mapState(['desserts', 'dessertsQ', 'dessertsT', 'header', 'show'])
  },
  mounted () {
    this.getDesserts()
  },
  methods: {
    ...mapActions(['getDesserts']),
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
    }
  }
}
</script>
<style lang="css">
    td, th{
        border-style: solid;
        border-color: black;
        text-align: center;
    }
    table {
        margin: 10% 15% 2% 30%;
        background-color: ivory;
    }
    #sele {
      margin-left: 35%;
    }
    #container {
      padding-bottom: 103px;
    }
</style>
