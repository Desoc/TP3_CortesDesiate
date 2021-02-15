<template>
  <div id="container">
    <table>
      <thead>
        <th v-for="a in header" :key="a">
            {{ a }}
        </th>
      </thead>
      <tr v-for="i in this.desserts" :key="i.id">
        <td v-for="j in i" :key="j">
          {{ j }}
        </td>
      </tr>
    </table>
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="customSwitch1">
      <label for="customSwitch1" class="custom-control-label">Mostrar/Ocultar filtro</label>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: mapState(['desserts', 'header']),
  mounted () {
    this.getDesserts()
  },
  methods: mapActions(['getDesserts'])
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
