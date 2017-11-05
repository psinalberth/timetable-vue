<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <h4 class="grey--text">Crie um novo horário</h4>
   </v-flex>
  </v-layout>
  <v-container fluid grid-list-md class="mt-4">
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
     <v-layout row wrap>
      <v-flex>
       <v-time-picker format="24hr"></v-time-picker>
      </v-flex>
      <v-flex>
       <v-time-picker format="24hr"></v-time-picker>	
      </v-flex>
     </v-layout>
    </v-flex>
   </v-layout>
  </v-container>
 </v-container>
</template>