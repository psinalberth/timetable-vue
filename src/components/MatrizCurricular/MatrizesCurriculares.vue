<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-card v-for="matriz in matrizes">
     <v-card-text>
      <v-layout row wrap>
       <v-flex xs12 sm8>
        <v-layout row>
         <span class="title" v-text="matriz.curso.nome"></span>
        </v-layout>
        <v-layout row class="mt-2">
         <span v-text="matriz.curso.departamento.nome"></span>
        </v-layout>
        <v-layout row>
         <span>Vigente desde</span><span class="ml-1" v-text="matriz.ano"></span>
        </v-layout>
       </v-flex>
       <v-flex xs12 sm4>
        <v-layout row>
         <v-spacer class="hidden-xs-only"></v-spacer>
         <span class="display-2">8</span>
        </v-layout>
        <v-layout row>
         <v-spacer class="hidden-xs-only"></v-spacer>
         <span>períodos</span>
        </v-layout>
       </v-flex>
      </v-layout>
     </v-card-text>
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
 import {findAll} from '@/services/matriz-curricular-service'

 export default {
   data () {
     return {
       matrizes: []
     }
   },
   mounted () {
     findAll().then(response => response.data).then(matrizes => { this.matrizes = matrizes })
   },
   methods: {
     editar (matriz) {
       this.$router.push({name: 'editar-matriz', params: { id: matriz.id, selecionado: matriz }})
     }
   }
 }
</script>