<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <h4 class="grey--text">Crie uma nova matriz curricular</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select 
     label="Curso"
     :items="cursos"
     item-text="nome"
     item-value="id" 
     v-model="matriz.curso"
     return-object
     required >      
    </v-select>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select 
     label="Turno" 
     v-model="matriz.turno"
     :items="turnos"
     item-text="nome"
     item-value="nome"
     return-object
     required>  
    </v-select>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Ano de Vigência" v-model="matriz.ano" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row class="mt-0">
   <v-flex xs12 sm6 offset-sm3>
    <span class="red--text mr-1">*</span>Campos obrigatórios
   </v-flex>
  </v-layout>
  <v-layout row class="mt-4">
   <v-flex xs12 sm6 offset-sm3>
    <v-layout row>
     <v-spacer></v-spacer>
     <v-btn class="primary" @click="editarPeriodos(matriz)">Avançar</v-btn>
    </v-layout>
   </v-flex>
  </v-layout>
 </v-container>	
</template>
<script>
 
 import Http from '@/services/shared/Http'

 export default {
   props: ['id', 'selecionado'],
   data () {
     return {
       matriz: Object,
       cursos: [],
       turnos: []
     }
   },
   mounted () {
     if (this.selecionado) {
       console.log(this.selecionado)
       this.matriz = this.selecionado
     } else {
       Http.get(`matrizes/${this.id}`).then(response => response.data).then(matriz => { this.matriz = matriz })
     }

     Http.get('cursos/').then(response => response.data).then(cursos => { this.cursos = cursos })
     Http.get('turnos/').then(response => response.data).then(turnos => { this.turnos = turnos })
   },
   methods: {
     editarPeriodos (matriz) {
       this.$router.push({name: 'listar-periodos', params: {selecionado: matriz, id: matriz.id}})
     }
   }
 }
</script>