<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-card v-for="matriz in matrizes" :key="matriz.id">
     <v-card-text>
      <v-layout row wrap>
       <v-flex xs12 sm8>
        <v-layout row>
         <span class="title" v-text="matriz.curso.nome"></span>
        </v-layout>
        <v-layout row class="mt-2">
         <span class="grey--text" v-text="matriz.curso.departamento.nome"></span>
        </v-layout>
        <v-layout row>
         <span class="grey--text" v-text="matriz.turno.nome"></span>
        </v-layout>
        <v-layout row>
         <span class="grey--text" v-text="matriz.ano"></span>
        </v-layout>
       </v-flex>
       <v-flex xs12 sm4>
        <v-layout row>
         <v-spacer class="hidden-xs-only"></v-spacer>
         <span class="display-2" v-text="matriz.semestres"></span>
        </v-layout>
        <v-layout row>
         <v-spacer class="hidden-xs-only"></v-spacer>
         <span class="grey--text">períodos</span>
        </v-layout>
       </v-flex>
      </v-layout>
     </v-card-text>
     <v-divider></v-divider>
     <v-card-actions>
      <v-btn class="primary" @click="editar(matriz)">Ver mais</v-btn>
     </v-card-actions>
    </v-card>
   </v-flex>
  </v-layout>
  <v-btn fab fixed bottom right dark color="red lighten-2">
   <v-icon>edit</v-icon>
  </v-btn>
 </v-container>
</template>
<script>
 export default {
   mounted () {
     this.$store.dispatch('listarMatrizesCurriculares')
   },
   methods: {
     editar (matriz) {
       this.$router.push({name: 'editar-matriz', params: { id: matriz.id, selecionado: matriz }})
     }
   },
   computed: {
     matrizes () {
       return this.$store.getters.matrizes
     }
   }
 }
</script>