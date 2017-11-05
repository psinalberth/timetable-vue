<template>
 <v-layout>
  <v-flex xs12>
   <v-list two-line style="background: transparent">
    <template v-for="professor in professores">
      <v-list-tile @click.stop="">
       <v-list-tile-content>
        <v-list-tile-title v-text="professor.nome"></v-list-tile-title>
        <v-list-tile-sub-title v-text="professor.departamento.nome"></v-list-tile-sub-title>
       </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>	
    </template>
   </v-list>
  </v-flex>
  <v-btn fab dark color="red lighten-2" fixed bottom right @click="novo">
   <v-icon>edit</v-icon>
  </v-btn>
 </v-layout>
</template>
<script>
 import { findAll } from '@/services/professor-service'

 export default {
   data () {
     return {
       professores: []
     }
   },
   mounted () {
     findAll().then(response => response.data).then(professores => { this.professores = professores })
   }
 }
</script>