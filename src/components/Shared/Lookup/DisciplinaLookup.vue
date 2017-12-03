<template>
 <v-dialog fullscreen v-model="dialog" transition="dialog-bottom-transition" scrollable>
   <v-card>
    <v-toolbar class="primary" dark prominent extended>
     <v-btn icon @click.native="close">
      <v-icon>close</v-icon>
     </v-btn>
     <v-toolbar-title>Disciplinas</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-text-field solo slot="extension" placeholder="Pesquisar" prepend-icon="search"></v-text-field>
     <v-spacer></v-spacer>
     <v-btn icon @click.native="dialog = false">
      <v-icon>check</v-icon>
     </v-btn>
    </v-toolbar>
    <v-container fluid style="overflow: auto">
      <v-list two-line>
       <template v-for="disciplina in disciplinas">
         <v-list-tile>
          <v-list-tile-action>
           <v-checkbox v-model="selecao"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
           <v-list-tile-title v-text="disciplina.descricao"></v-list-tile-title>
           <v-list-tile-sub-title v-text="disciplina.sigla"></v-list-tile-sub-title>
          </v-list-tile-content>
         </v-list-tile>
        <v-divider></v-divider>
       </template>
      </v-list>
    </v-container>
   </v-card>
  </v-dialog>
</template>
<script>
 export default {
   props: ['dialog', 'id', 'selecao'],
   mounted () {
     this.$store.dispatch('carregarDisciplinas')
     this.$store.dispatch('listarDisciplinasProfessor', this.id)
   },
   methods: {
     close () {
       this.$emit('onClose')
     }
   },
   computed: {
     disciplinas () {
       return this.$store.getters.disciplinas
     },
     disciplinasLecionaveis: {
       get () {
         return this.$store.getters.disciplinasLecionaveis
       },
       set (disciplinasLecionaveis) {
         this.$store.commit('setDisciplinasLecionaveis', disciplinasLecionaveis)
       }
     }
   }
 }
</script>