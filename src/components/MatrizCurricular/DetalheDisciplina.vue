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
     item-value="id"
     return-object
     autocomplete
     hint="Selecione ou digite para pesquisar a disciplina"
     persistent-hint
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
    <v-text-field 
     label="Carga Horária"
     v-model="detalhe.cargaHoraria">
    </v-text-field>
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
     hint="Selecione ou digite para pesquisar os pré-requisitos"
     persistent-hint>
    </v-select>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-checkbox 
     class="primary--text" 
     label="Disciplina Obrigatória" 
     v-model="detalhe.obrigatoria">   
    </v-checkbox>
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
   props: ['id', 'selecionado', 'matriz', 'periodo'],
   mounted () {
     this.$store.dispatch('carregarDisciplinas')
     this.$store.dispatch('listarDetalhe', {
       matriz: this.matriz,
       periodo: this.periodo,
       detalhe: this.id
     })
   },
   methods: {
     salvarDetalhe () {
       console.log(this.detalhe)
     }
   },
   computed: {
     detalhe () {
       return this.$store.getters.detalheDisciplina
     },
     disciplinas () {
       return this.$store.getters.disciplinas
     }
   }
 }
</script>