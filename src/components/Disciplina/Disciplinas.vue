<template>
  <v-container fluid fill-height v-if="this.disciplinas.length == 0">
    <v-container>
      <v-layout justify-center align-center>
        <img center src="../../assets/logo.png">
      </v-layout>
      <v-layout justify-center>
      <p class="headline grey--text">Ainda não foram cadastradas disciplinas. Clique <router-link :to="{name: 'nova-disciplina'}">aqui</router-link> para começar!</p>
      </v-layout>
    </v-container>
  </v-container>
  <v-layout v-else>
    <v-flex xs12>
      <v-list two-line style="background: transparent">
        <template v-for="disciplina in disciplinas">
          <v-list-tile @click.stop="editar(disciplina)">
            <v-list-tile-content>
              <v-list-tile-title v-text="disciplina.descricao"></v-list-tile-title>
              <v-list-tile-sub-title v-text="disciplina.sigla"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
      </v-list>
    </v-flex>
    <v-btn fab dark color="red darken-2" fixed bottom right @click="novo">
      <v-icon>edit</v-icon>
    </v-btn>
  </v-layout>

</template>
<script>
 export default {
   mounted () {
     // https://material.io/color/#!/?view.left=1&view.right=0&primary.color=0277BD&secondary.color=D50000
     this.$store.dispatch('carregarDisciplinas')
   },
   computed: {
     disciplinas () {
       return this.$store.getters.disciplinas
     }
   },
   methods: {
     novo () {
       this.$router.push({name: 'editar-disciplina', params: {id: 'nova-disciplina'}})
       this.$store.commit('setDisciplina', {})
     },
     editar (disciplina) {
       this.$router.push({name: 'editar-disciplina', params: {id: disciplina.id}})
       this.$store.commit('setDisciplina', disciplina)
     }
   }
}
</script>