<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-card v-for="detalhe in detalhes" :key="detalhe.id" class="mb-4">
     <v-card-text>
      <v-layout row wrap>
       <v-flex xs12 sm8>
        <v-layout row>
         <span class="title" v-text="detalhe.disciplina.descricao"></span>
        </v-layout>
        <v-layout row class="mt-2">
         <span class="grey--text" v-text="detalhe.disciplina.sigla"></span>
        </v-layout>
        <v-layout row>
         <span class="grey--text" v-text="detalhe.obrigatoria ? 'Obrigatória' : 'Eletiva'"></span>
        </v-layout>
       </v-flex>
       <v-flex xs12 sm4>
        <v-layout row>
         <v-spacer class="hidden-xs-only"></v-spacer>
         <span class="display-2" v-text="detalhe.cargaHoraria"></span>
        </v-layout>
        <v-layout row>
         <v-spacer class="hidden-xs-only"></v-spacer>
         <span class="grey--text">horas</span>
        </v-layout>
       </v-flex>
      </v-layout>
     </v-card-text>
     <v-divider></v-divider>
     <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="primary">
       <v-icon left>edit</v-icon>
       Editar
      </v-btn>	
     </v-card-actions>
    </v-card>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<script>
 import Http from '@/services/shared/Http'

 export default {
   data () {
     return {
       detalhes: []
     }
   },
   mounted () {
     if (this.$route.params.matriz && this.$route.params.periodo) {
       Http.get('matrizes/' + this.$route.params.matriz + '/periodos/' + this.$route.params.periodo + '/detalhes').then(response => response.data).then(detalhes => { this.detalhes = detalhes })
     }
   }
 }
</script>