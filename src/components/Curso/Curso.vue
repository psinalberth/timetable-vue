<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <h4 class="grey--text">Crie um novo curso</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Código" v-model="curso.codigo" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Nome" v-model="curso.nome" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Descrição" v-model="curso.descricao" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select 
     label="Departamento" 
     v-model="curso.departamento"
     :items="departamentos"
     item-text="nome"
     item-value="nome" 
     return-object 
     required>
    </v-select>
   </v-flex>
  </v-layout>
   <v-layout row class="mt-0">
   <v-flex xs12 sm6 offset-sm3>
    <span class="red--text mr-1">*</span>Campos obrigatórios
   </v-flex>
  </v-layout>
  <v-layout row class="mt-3">
   <v-flex xs12 sm6 offset-sm3>
    <v-btn class="primary" @click.native="submit">Salvar</v-btn>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<script>
 import { findAll } from '@/services/departamento-service'
 import { save } from '@/services/curso-service'
 
 export default {
   data () {
     return {
       departamentos: [],
       curso: {
         codigo: '',
         nome: '',
         descricao: '',
         departamento: ''
       }
     }
   },
   mounted () {
     findAll().then(response => response.data).then(departamentos => { this.departamentos = departamentos })

     if (this.$route.params.selecionado) {
       this.curso = this.$route.params.selecionado
     }
   },
   methods: {
     submit () {
       save(this.curso)
     }
   }
 }
</script>