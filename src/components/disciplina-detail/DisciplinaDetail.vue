<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6- offset-sm3>
    <h4 class="grey--text">Crie uma nova disciplina</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Código" v-model="disciplina.codigo" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Sigla" v-model="disciplina.sigla" required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field label="Descrição" v-model="disciplina.descricao" required></v-text-field>
   </v-flex>
  </v-layout>
   <v-layout row class="mt-0">
   <v-flex xs12 sm6 offset-sm3>
    <span>* Campos obrigatórios</span>
   </v-flex>
  </v-layout>
  <v-layout row class="mt-3">
   <v-flex xs12 sm6 offset-sm3>
    <v-btn class="primary">Salvar</v-btn>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<!-- <template>
 <v-layout wrap>
  <v-flex xs12 md6 offset-md3>
    <v-card flat>
      <v-card-title class="blue accent-1 subheading white--text">
        <v-layout wrap>
          <v-flex xs12 md6 align-center justify-center>
            <v-btn flat icon color="white" slot="activator" @click="$router.go(-1)">
             <v-icon>arrow_back</v-icon>
            </v-btn>
            <span class="title white--text">Disciplina</span>
            <v-btn flat icon color="white">
              <v-icon>check</v-icon>
            </v-btn>
             <v-btn flat icon color="white">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text class="grey lighten-5">
        <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm6 md6>
            <v-text-field label="Código" v-model="disciplina.codigo" :error-messages="codigoErrors" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field label="Sigla" v-model="disciplina.sigla" :error-messages="siglaErrors" required></v-text-field>
          </v-flex>
        </v-layout>
        <v-flex xs12 md12>
          <v-text-field label="Descrição" v-model="disciplina.descricao" :error-messages="descricaoErrors" required></v-text-field>
        </v-flex>
        </v-container>
      </v-card-text>
      <v-card-actions class="grey lighten-5">
            <v-btn flat color="green lighten-2" @click="submit">Salvar</v-btn>
            <v-btn flat color="red lighten-2" @click="reset">Limpar</v-btn> 
      </v-card-actions>
    </v-card>
  </v-flex>
 </v-layout>
</template> -->
<!-- <template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title class="primary">
        <h6 class="white--text">Nova Disciplina</h6>
        <v-spacer></v-spacer>
        <v-btn flat icon class="white--text">
          <v-icon>check</v-icon>
        </v-btn>
        <v-btn flat icon class="white--text">
          <v-icon>delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
         <v-layout wrap>
          <v-flex xs12 sm6 md6>
            <v-text-field label="Código" v-model="disciplina.codigo" :error-messages="codigoErrors" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field label="Sigla" v-model="disciplina.sigla" :error-messages="siglaErrors" required></v-text-field>
          </v-flex>
        </v-layout>
        <v-flex xs12 md12>
          <v-text-field label="Descrição" v-model="disciplina.descricao" :error-messages="descricaoErrors" required></v-text-field>
        </v-flex>
       </v-container>
      </v-card-text>
      <v-card-actions class="grey lighten-2">
        <v-spacer></v-spacer>
        <v-btn class="primary">Salvar</v-btn>
      </v-card-actions>
    </v-card>
   </v-flex>
  </v-layout>
 </v-container>
</template> -->
<script>
 import {validationMixin} from 'vuelidate'
 import {findById, save} from '@/services/disciplina-service'
 import {required, maxLength} from 'vuelidate/lib/validators'
 export default {
   mixins: [validationMixin],
   validations: {
     disciplina: {
       codigo: {required},
       descricao: {required},
       sigla: {required, maxLength: maxLength(10)}
     }
   },
   data () {
     return {
       disciplina: {
         codigo: '',
         sigla: '',
         descricao: ''
       }
     }
   },
   mounted () {
     if (this.$route.params.id) {
       findById(this.$route.params.id).then(response => response.data).then(disciplina => { this.disciplina = disciplina })
     }
   },
   methods: {
     submit () {
       this.$v.$touch()
       save(this.disciplina)
     },
     reset () {
       this.disciplina = {}
       this.$v.$reset()
     }
   },
   computed: {
     descricaoErrors () {
       const erros = []
       if (!this.$v.disciplina.descricao.$dirty) return erros
       !this.$v.disciplina.descricao.required && erros.push('Descrição é obrigatório.')
       return erros
     },
     codigoErrors () {
       const erros = []
       if (!this.$v.disciplina.codigo.$dirty) return erros
       !this.$v.disciplina.codigo.required && erros.push('Código é obrigatório.')
       return erros
     },
     siglaErrors () {
       const erros = []
       if (!this.$v.disciplina.sigla.$dirty) return erros
       !this.$v.disciplina.sigla.required && erros.push('Sigla é obrigatório.')
       return erros
     }
   }
 }
</script>