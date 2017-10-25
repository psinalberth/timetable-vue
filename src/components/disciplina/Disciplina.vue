<template>
  <v-container fluid fill-height v-if="items.length == 0">
    <v-container>
      <v-layout justify-center align-center>
        <img center src="../../assets/logo.png">
      </v-layout>
      <v-layout justify-center>
      <p class="headline grey--text">Ainda não foram cadastradas disciplinas. Clique <router-link to="path: nova-disciplina">aqui</router-link> para começar!</p>
      </v-layout>
    </v-container>
  </v-container>
  <v-layout v-else>
    <v-layout wrap>
      <v-flex xs12 lg12 md12> 
        <v-card flat class="blue-grey lighten-2">
          <v-card-text>
            <v-text-field dark single-line label="Pesquisar" prepend-icon="search"></v-text-field>  
          </v-card-text>
        </v-card>
        <v-list two-line style="background: transparent">
          <template v-for="item in items">
            <v-list-tile @click.stop="editar(item)">
              <v-list-tile-content>
                <v-list-tile-title>{{item.descricao}}</v-list-tile-title>
                <v-list-tile-sub-title>{{item.sigla}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-tooltip bottom>
                <v-btn flat icon color="red lighten-2" slot="activator" @click.stop="showModal">
                  <v-icon>delete</v-icon>
                </v-btn>
                <span>Remover</span>
                </v-tooltip>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
   <v-dialog persistent v-model="modalDelete" max-width="400px">
    <v-card>
      <v-card-title dark class="title blue-grey lighten-2 white--text">Remover Registro?</v-card-title>
      <v-card-text align-center justify-center>
        <v-layout row justify-center align-center>
          <img src="../../assets/logo.png">
        </v-layout>
        <b>Atenção!</b> Esta ação não poderá ser desfeita. Confirmar? 
      </v-card-text>
      <v-card-actions align-center justify-center>
        <v-btn flat color="green lighten-1" @click="showModal">Remover</v-btn>
        <v-btn flat color="red lighten-1" @click="showModal">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
    <v-btn fab dark color="red lighten-2" fixed bottom right @click="novo">
      <v-icon>edit</v-icon>
    </v-btn>
  </v-layout>
</template>
<script src="./disciplina.js"></script>