<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <h4 class="grey--text">Criar um novo professor</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Nome" v-model="professor.nome" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select label="Categoria" v-model="professor.categoria" required></v-select>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-select label="Departamento" v-model="professor.departamento" required></v-select>
   </v-flex>
  </v-layout>
  <v-layout row class="mt-4">
   <v-flex xs12 sm6 offset-sm3>
    <v-layout row>
     <v-spacer></v-spacer>
     <v-btn class="primary" @click="editarDisciplinas(professor)">Ver Mais</v-btn>
    </v-layout>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<!-- <template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6- offset-sm3>
    <h4 class="grey--text">Crie um novo professor</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
     <v-stepper v-model="el">
      <v-stepper-header>
       <v-stepper-step step="1" :complete="el > 1">Informações Gerais</v-stepper-step>
       <v-divider></v-divider>
       <v-stepper-step step="2" :complete="el > 2">Disciplinas</v-stepper-step>
       <v-divider></v-divider>
       <v-stepper-step step="3">
         Horários Indisponíveis
         <small>Opcional</small>
       </v-stepper-step>
      </v-stepper-header>
      <v-stepper-content step="1">
       <v-card flat>
        <v-layout row>
         <v-text-field label="Nome" required></v-text-field>
        </v-layout>
        <v-layout row>
         <v-select label="Categoria" required></v-select>
        </v-layout>
        <v-layout row>
         <v-select label="Departamento" required></v-select>
        </v-layout>
        <v-layout row>
         <span class="red--text mr-2">*</span> Campos obrigatórios
        </v-layout>
        <v-layout row class="mt-3">
         <v-spacer></v-spacer>
          <v-btn class="primary text-xs-right text-sm-right" @click.native="el = 2">Próximo</v-btn>
        </v-layout>
       </v-card>
      </v-stepper-content>
      <v-stepper-content step="2">
       <v-card flat height="260px">
        <v-layout row>
          <span>Neste passo, você deverá selecionar as disciplinas as quais possui afinidade ou disponibilidade para lecionar.</span>
        </v-layout>
        <v-layout row>
         <v-spacer></v-spacer>
         <v-btn large class="primary" @click="dialog = true">
          <v-icon left>search</v-icon>
          Pesquisar  
         </v-btn>
         <v-spacer></v-spacer>
        </v-layout>
       </v-card>
      <v-layout row>
       <v-btn class="flat text-xs-right text-sm-right" @click.native="el = 1">Anterior</v-btn>
       <v-spacer></v-spacer>
       <v-btn class="primary text-xs-right text-sm-right" @click.native="el = 3">Próximo</v-btn>
      </v-layout>
      </v-stepper-content>
      <v-stepper-content step="3">
       <v-card flat height="260px">
        <v-layout row>
          <span>Escolha os horários nos quais <strong>não</strong> possui disponibilidade para lecionar.</span>
        </v-layout>
        <v-layout row class="mt-4">
         <v-spacer></v-spacer>
         <v-btn large class="primary" @click.native="dialog2 = true">
          <v-icon left>search</v-icon>
          Pesquisar  
         </v-btn>
         <v-spacer></v-spacer>
        </v-layout>
       </v-card>
       <v-layout row>
         <v-btn class="flat text-xs-right text-sm-right" @click.native="el = 2">Anterior</v-btn>
         <v-spacer></v-spacer>
         <v-btn class="primary text-xs-right text-sm-right" @click.native="el = 3">Concluir</v-btn>
        </v-layout>
      </v-stepper-content>
     </v-stepper>
   </v-flex>
  </v-layout>
  <v-dialog fullscreen v-model="dialog" transition="dialog-bottom-transition" scrollable>
   <v-card>
    <v-toolbar class="primary" dark prominent extended>
     <v-btn icon @click.native="dialog = false">
      <v-icon>close</v-icon>
     </v-btn>
     <v-toolbar-title>Disciplinas</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-text-field solo slot="extension" placeholder="Pesquisar" prepend-icon="search"></v-text-field>
     <v-spacer></v-spacer>
     <v-btn icon @click.native="dialog = false">
      <v-icon>check</v-icon>
     </v-btn>
     
    </v-toolbar>
    <v-container fluid style="overflow: auto">
      <v-list two-line>
       <template v-for="disciplina in disciplinas">
         <v-list-tile>
          <v-list-tile-action>
           <v-checkbox></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
           <v-list-tile-title v-text="disciplina.descricao"></v-list-tile-title>
           <v-list-tile-sub-title v-text="disciplina.sigla"></v-list-tile-sub-title>
          </v-list-tile-content>
         </v-list-tile>
        <v-divider></v-divider>
       </template>
      </v-list>
    </v-container>
   </v-card>
  </v-dialog>
  <v-dialog fullscreen v-model="dialog2" transition="dialog-bottom-transition" scrollable>
   <v-card>
    <v-toolbar class="primary" dark prominent extended>
     <v-btn icon @click.native="dialog2 = false">
      <v-icon>close</v-icon>
     </v-btn>
     <v-toolbar-title>Horários</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-btn icon @click.native="dialog2 = false">
      <v-icon>check</v-icon>
     </v-btn>
     <v-container fluid grid-list-md slot="extension">
     <v-layout row wrap>
      <v-flex xs12 sm4>
       <v-select solo placeholder="Dia da Semana" prepend-icon="event"></v-select>
      </v-flex>
      <v-flex xs12 sm4>
       <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu2"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          solo
          slot="activator"
          placeholder="Hora de Início"
          v-model="time"
          prepend-icon="access_time"
          readonly
        ></v-text-field>
        <v-time-picker v-model="time" autosave></v-time-picker>
      </v-menu>
      </v-flex>
      <v-flex xs12 sm4>
       <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu2"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          solo
          slot="activator"
          placeholder="Hora de Término"
          v-model="time"
          prepend-icon="access_time"
          readonly
        ></v-text-field>
        <v-time-picker v-model="time" autosave></v-time-picker>
      </v-menu>
      </v-flex>
     </v-layout>
     </v-container>
    </v-toolbar>
    <v-container fluid style="overflow: auto">
     <v-container grid-list-md>
     <v-layout row wrap>
      <v-flex xs12 sm4>
       <v-select solo placeholder="Dia da Semana" prepend-icon="event"></v-select>
      </v-flex>
      <v-flex xs12 sm4>
       <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu2"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          solo
          slot="activator"
          placeholder="Hora de Início"
          v-model="time"
          prepend-icon="access_time"
          readonly
        ></v-text-field>
        <v-time-picker v-model="time" autosave></v-time-picker>
      </v-menu>
      </v-flex>
      <v-flex xs12 sm4>
       <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu2"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          solo
          slot="activator"
          placeholder="Hora de Término"
          v-model="time"
          prepend-icon="access_time"
          readonly
        ></v-text-field>
        <v-time-picker v-model="time" autosave></v-time-picker>
      </v-menu>
      </v-flex>
     </v-layout>
     <v-layout row wrap class="mt-5">
       <v-flex class="xs12 sm2">
         <v-card dark class="primary text-xs-center">
           <v-card-text>Horário</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card dark class="primary text-xs-center">
           <v-card-text>Segunda</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card dark class="primary text-xs-center">
           <v-card-text>Terça</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card dark class="primary text-xs-center">
           <v-card-text>Quarta</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card dark class="primary text-xs-center">
           <v-card-text>Quinta</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card dark class="primary text-xs-center">
           <v-card-text>Sexta</v-card-text>
         </v-card>
       </v-flex>
     </v-layout>
     <v-layout row>
       <v-flex class="xs12 sm2">
         <v-card class="text-xs-center">
           <v-card-text>Horário</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card class="text-xs-center">
           <v-card-text>Segunda</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card class="text-xs-center">
           <v-card-text>Terça</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card class="text-xs-center">
           <v-card-text>Quarta</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card class="text-xs-center">
           <v-card-text>Quinta</v-card-text>
         </v-card>
       </v-flex>
       <v-flex class="xs12 sm2">
         <v-card class="text-xs-center">
           <v-card-text>Sexta</v-card-text>
         </v-card>
       </v-flex>
     </v-layout>
     </v-container>
    </v-container>
   </v-card>
  </v-dialog>
 </v-container>
</template> -->
<script>
 import {findAll} from '@/services/disciplina-service'
 export default {
   data () {
     return {
       professor: {
         nome: '',
         categoria: '',
         departamento: ''
       },
       el: 1,
       dialog: false,
       dialog2: false,
       disciplinas: [],
       time: '',
       menu2: false
     }
   },
   mounted () {
     findAll().then(response => response.data).then(disciplinas => { this.disciplinas = disciplinas })
   },
   methods: {
     editarDisciplinas (professor) {
       console.log(professor)
     }
   }
 }
</script>