<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <h4 class="grey--text">Crie um novo departamento</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Código" v-model="departamento.codigo" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Nome" v-model="departamento.nome" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Descrição" multi-line rows="3" v-model="departamento.descricao" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row class="mt-0">
   <v-flex xs12 sm6 offset-sm3>
    <span class="red--text mr-1">*</span>Campos obrigatórios
   </v-flex>
  </v-layout>
  <v-layout row class="mt-3">
   <v-flex xs12 sm6 offset-sm3>
    <v-btn class="primary">Salvar</v-btn>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<script>
 import Http from '@/services/shared/Http'

 export default {
   data () {
     return {
       departamento: {
         id: '',
         codigo: '',
         nome: '',
         descricao: ''
       }
     }
   },
   mounted () {
     if (this.$route.params.selecionado) {
       this.departamento = this.$route.params.selecionado
     } else {
       Http.get('departamentos/' + this.$route.params.id).then(response => { this.departamento = response.data })
     }
   }
 }
</script>