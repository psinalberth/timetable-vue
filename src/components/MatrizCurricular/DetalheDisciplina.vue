<template>
 <v-container>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <h4 class="grey--text">Criar novo detalhe</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select 
     label="Disciplina"
     v-model="detalhe.disciplina"
     :items="disciplinas"
     item-text="descricao"
     item-value="descricao"
     return-object
     autocomplete
     required>
    </v-select>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Período"
     v-model="detalhe.periodo">   
    </v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Carga Horária"></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select 
     label="Pré-Requisitos"
     v-model="detalhe.preRequisitos"
     autocomplete
     multiple
     chips
     :items="disciplinas"
     item-text="descricao"
     item-value="descricao"
     return-object
     ></v-select>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-checkbox class="primary--text" label="Disciplina Obrigatória" v-model="detalhe.obrigatorio"></v-checkbox>
   </v-flex>
  </v-layout>
  <v-layout row class="mt-0">
   <v-flex xs12 sm6 offset-sm3>
    <span class="red--text mr-1">*</span>Campos obrigatórios
   </v-flex>
  </v-layout>
  <v-layout row class="mt-3">
   <v-flex xs12 sm6 offset-sm3>
    <v-btn class="primary" @click="salvarDetalhe">Salvar</v-btn>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<script>
 export default {
   props: ['id', 'selecionado'],
   mounted () {
     this.$store.dispatch('carregarDisciplinas')
   },
   data () {
     return {
       detalhe: {
         disciplina: Object,
         periodo: Object,
         cargaHoraria: '',
         preRequisitos: [],
         obrigatorio: true
       }
     }
   },
   methods: {
     salvarDetalhe () {
       console.log(this.detalhe)
     }
   },
   computed: {
     disciplinas () {
       return this.$store.getters.disciplinas
     }
   }
 }
</script>