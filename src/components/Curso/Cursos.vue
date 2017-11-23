<template>
 <v-layout>
  <v-flex>
   <v-list three-line style="background: transparent">
    <template v-for="curso in cursos">
     <v-list-tile @click.stop="editar(curso)">
      <v-list-tile-content>
       <v-list-tile-title v-text="curso.nome"></v-list-tile-title>
       <v-list-tile-sub-title v-text="curso.departamento.nome"></v-list-tile-sub-title>
       <v-list-tile-sub-title v-text="curso.codigo"></v-list-tile-sub-title>	
      </v-list-tile-content>
     </v-list-tile>
     <v-divider></v-divider>
    </template>
   </v-list>
  </v-flex>
  <v-btn fab dark color="red lighten-2" fixed bottom right @click="novoCurso">
   <v-icon>edit</v-icon>
  </v-btn>
 </v-layout>
</template>
<script>
 export default {
   mounted () {
     this.$store.dispatch('listarCursos')
   },
   methods: {
     novoCurso () {
       this.$store.commit('setCurso', {})
       this.$router.push({name: 'editar-curso', params: { id: 'novo-curso' }})
     },
     editar (curso) {
       this.$store.commit('setCurso', curso)
       this.$router.push({name: 'editar-curso', params: { id: curso.id, selecionado: curso }})
     }
   },
   computed: {
     cursos () {
       return this.$store.getters.cursos
     }
   }
 }
</script>