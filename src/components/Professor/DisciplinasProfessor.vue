<template>
 <v-layout>
  <v-flex xs12>
   <v-list two-line style="background: transparent">
    <template v-for="disciplina in professor.disciplinasLecionaveis">
      <v-list-tile @click.stop="">
        <v-list-tile-content>
          <v-list-tile-title v-text="disciplina.descricao"></v-list-tile-title>
          <v-list-tile-sub-title v-text="disciplina.sigla"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
    </template>
   </v-list>
  </v-flex>
  <v-btn fab dark color="red lighten-2" fixed bottom right @click="dialog = !dialog">
   <v-icon>add</v-icon>
  </v-btn>
  <disciplina-lookup 
   :id="id" 
   :dialog="dialog"
   :selecao="professor.disciplinasLecionaveis"
   @onClose="dialog = !dialog"
   :disciplinasLecionaveis="professor.disciplinasLecionaveis">
  </disciplina-lookup>
 </v-layout>
</template>
<script>
 import DisciplinaLookup from '@/components/Shared/Lookup/DisciplinaLookup'
 export default {
   props: ['id'],
   data () {
     return {
       dialog: false
     }
   },
   mounted () {
     this.$store.dispatch('listarDisciplinasProfessor', this.id)
   },
   computed: {
     professor () {
       return this.$store.getters.professor
     }
   },
   components: {
     DisciplinaLookup
   }
 }
</script>