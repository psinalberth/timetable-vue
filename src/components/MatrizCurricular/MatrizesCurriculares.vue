<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-card v-for="matriz in matrizes">
      <v-card-title>{{matriz.curso.nome}}</v-card-title>
      <v-card-text>
      	<h4>{{matriz.ano}}</h4>
      </v-card-text>
    </v-card>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<script>
 import {findAll} from '@/services/matriz-curricular-service'

 export default {
   data () {
     return {
       matrizes: []
     }
   },
   mounted () {
     findAll().then(response => response.data).then(matrizes => { this.matrizes = matrizes })
   }
 }
</script>