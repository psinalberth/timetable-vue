<template>
 <v-layout>
   <v-flex>
   	<v-container fluid class="elevation-0">
        <v-layout wrap>
           <v-text-field solo v-model="textoPesquisa" single-line prepend-icon="search" placeholder="Pesquisar" cancel></v-text-field>
        </v-layout>
      </v-container>
    <v-list three-line style="background: transparent">
      <template v-for="curso in cursos">
       <v-list-tile @click.stop="editar(curso)">
        <v-list-tile-content>
         <v-list-tile-title v-text="curso.nome"></v-list-tile-title>
         <v-list-tile-sub-title v-text="curso.departamento.nome"></v-list-tile-sub-title>
         <v-list-tile-sub-title v-text="curso.codigo"></v-list-tile-sub-title>	
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
 import { findAll } from '@/services/curso-service'

 export default {
   data () {
     return {
       cursos: []
     }
   },
   mounted () {
     findAll().then(response => response.data).then(cursos => { this.cursos = cursos })
   },
   methods: {
     editar (curso) {
       this.$router.push({name: 'editar-curso', params: { id: curso.id, selecionado: curso }})
     }
   }
 }
</script>