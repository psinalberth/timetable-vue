<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-card v-for="periodo in periodos" :key="periodo.id" class="mb-4">
     <v-card-text>
       <v-layout row wrap>
        <v-flex xs12 sm8>
         <v-layout row>
          <span class="title">{{ periodo.codigo }}º Período</span>
         </v-layout>
         <v-layout row class="mt-2">
          <span class="grey--text" v-text="matriz.curso.nome"></span>
         </v-layout>
         <v-layout row>
          <span class="grey--text">{{ matriz.curso.codigo }} - {{ matriz.ano }}</span>
         </v-layout>
        </v-flex>
        <v-flex xs12 sm4>
         <v-layout row>
          <v-spacer class="hidden-xs-only"></v-spacer>
          <span class="display-2" v-text="periodo.tamanho"></span>
         </v-layout>
         <v-layout row>
          <v-spacer class="hidden-xs-only"></v-spacer>
          <span class="grey--text">disciplinas</span>
         </v-layout>
        </v-flex>
       </v-layout>	
     </v-card-text>
     <v-divider></v-divider>
     <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="primary">Ver mais</v-btn>
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
 import Http from '@/services/shared/Http'

 export default {
   data () {
     return {
       matriz: Object,
       periodos: []
     }
   },
   mounted () {
     if (this.$route.params.selecionado) {
       this.matriz = this.$route.params.selecionado
       Http.get('/matrizes/' + this.matriz.id + '/periodos').then(response => response.data).then(periodos => { this.periodos = periodos })
     }
   }
 }
</script>