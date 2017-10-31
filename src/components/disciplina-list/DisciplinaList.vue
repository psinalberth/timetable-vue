<template>
  
  <v-container fluid fill-height v-if="disciplinas.length == 0">
    <v-container>
      <v-layout justify-center align-center>
        <img center src="../../assets/logo.png">
      </v-layout>
      <v-layout justify-center>
      <p class="headline grey--text">Ainda não foram cadastradas disciplinas. Clique <router-link :to="{name: 'nova-disciplina'}">aqui</router-link> para começar!</p>
      </v-layout>
    </v-container>
  </v-container>
  <v-layout v-else>
    <v-layout row>
      <v-flex xs12>
        <v-container fluid class="blue accent-1 elevation-0">
          <v-layout wrap>
            <v-text-field v-model="textoPesquisa" dark single-line prepend-icon="search" label="Pesquisar"></v-text-field>
          </v-layout>
        </v-container>
        <v-list two-line style="background: transparent">
          <template v-for="disciplina in filter">
            <v-list-tile @click.stop="editar(disciplina)">
              <v-list-tile-content>
                <v-list-tile-title>{{disciplina.descricao}}</v-list-tile-title>
                <v-list-tile-sub-title>{{disciplina.sigla}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-tooltip bottom>
                <v-btn flat icon color="red lighten-2" slot="activator" @click.stop="deletar(disciplina.id)">
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
   <v-modal :modalDelete="modalDelete" :visible="modalDelete" @onCancel="foo" @onConfirm="remover"></v-modal>
    <v-btn fab dark color="red lighten-2" fixed bottom right @click="novo">
      <v-icon>edit</v-icon>
    </v-btn>
  </v-layout>
</template>
<script src="./disciplina-list.js"></script>