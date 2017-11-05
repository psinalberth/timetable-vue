<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <h4 class="grey--text">Crie uma nova matriz curricular</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select label="Curso" required></v-select>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select label="Turno" required></v-select>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Ano de Vigência" v-model="matriz.ano" required></v-text-field>
   </v-flex>
  </v-layout>
 </v-container>	
</template>
<script>
 export default {
   data () {
     return {
       matriz: ''
     }
   },
   mounted () {
     if (this.$route.params.selecionado) {
       this.matriz = this.$route.params.selecionado
     }
   }
 }
</script>