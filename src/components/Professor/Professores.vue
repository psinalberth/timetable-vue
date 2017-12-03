<template>
 <v-layout>
  <v-flex xs12>
   <v-list two-line style="background: transparent">
    <template v-for="professor in professores">
      <v-list-tile @click.stop="editarProfessor(professor)">
       <v-list-tile-content>
        <v-list-tile-title v-text="professor.nome"></v-list-tile-title>
        <v-list-tile-sub-title v-text="professor.departamento.nome"></v-list-tile-sub-title>
       </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>	
    </template>
   </v-list>
  </v-flex>
  <v-btn fab dark color="red lighten-2" fixed bottom right @click="novoProfessor">
   <v-icon>edit</v-icon>
  </v-btn>
 </v-layout>
</template>
<script>
 export default {
   mounted () {
     this.$store.dispatch('listarProfessores')
   },
   methods: {
     novoProfessor () {
       this.$router.push({ name: 'editar-professor', params: { id: 'novo-professor' } })
     },
     editarProfessor (professor) {
       this.$store.commit('setProfessor', professor)
       this.$router.push({ name: 'editar-professor', params: { id: professor.id } })
     }
   },
   computed: {
     professores () {
       return this.$store.getters.professores
     }
   }
 }
</script>