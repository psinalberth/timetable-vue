<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <h4 class="grey--text">Criar novo curso</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Código" 
     v-model="curso.codigo" 
     required>   
    </v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Nome" 
     v-model="curso.nome" 
     required>   
    </v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Descrição" 
     v-model="curso.descricao" 
     required>   
    </v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select 
     label="Departamento" 
     v-model="curso.departamento"
     :items="departamentos"
     item-text="nome"
     item-value="id" 
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
    <v-btn class="primary" @click.native="salvarCurso">Salvar</v-btn>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<script>
 export default {
   mounted () {
     this.$store.dispatch('listarDepartamentos')
   },
   methods: {
     salvarCurso () {
       this.$store.dispatch('salvarCurso', this.curso)
     }
   },
   computed: {
     curso () {
       return this.$store.getters.curso
     },
     departamentos () {
       return this.$store.getters.departamentos
     }
   }
 }
</script>