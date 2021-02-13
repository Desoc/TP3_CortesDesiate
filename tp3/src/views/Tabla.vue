<template>
  <div id="container">
    <table>
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
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/Footer'
export default {
  data () {
    return {
      desserts: [],
      header: ['Postre', 'Tiempo de preparado', 'Cantidad de ingredientes']
    }
  },
  components: {
    Footer
  },
  mounted () {
    this.getDesserts()
  },
  methods: {
    getDesserts () {
      fetch('https://5fcba09751f70e00161f1c5b.mockapi.io/postres')
        .then((res) => res.json())
        .then((elementos) => {
          this.desserts = elementos
          for (this.i in elementos) {
            delete elementos[this.i].id
          }
        })
        .catch((error) => console.log(error))
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
        margin: 10% 15% 15% 30%;
        background-color: ivory;
    }
    #container {
      padding-bottom: 103px;
    }
</style>
