<template>
 <v-layout>
  <v-flex xs12>
   <v-list two-line style="background: transparent">
    <template v-for="departamento in departamentos">
	   <v-list-tile @click="editarDepartamento(departamento)">
	    <v-list-tile-content>
	     <v-list-tile-title v-text="departamento.nome"></v-list-tile-title>
	     <v-list-tile-sub-title v-text="departamento.codigo"></v-list-tile-sub-title>
	    </v-list-tile-content>
	   </v-list-tile>
	   <v-divider></v-divider>
	  </template>
   </v-list>
  </v-flex>
  <v-btn fab dark color="red lighten-2" fixed bottom right @click="novoDepartamento">
   <v-icon>edit</v-icon>
  </v-btn>
 </v-layout>
</template>
<script>
 export default {
   mounted () {
     this.$store.dispatch('listarDepartamentos')
   },
   methods: {
     novoDepartamento () {
       this.$router.push({name: 'editar-departamento', params: {id: 'novo-departamento'}})
       this.$store.commit('setDepartamento', {})
     },
     editarDepartamento (departamento) {
       this.$router.push({ name: 'editar-departamento', params: { id: departamento.id, selecionado: departamento } })
       this.$store.commit('setDepartamento', departamento)
     }
   },
   computed: {
     departamentos () {
       return this.$store.getters.departamentos
     }
   }
 }
</script>