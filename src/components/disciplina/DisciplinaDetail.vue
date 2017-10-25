<template>
 <v-layout wrap>
  <v-flex xs12 md12 sm12>
    <v-card flat>
      <v-card-title class="blue-grey lighten-2 subheading white--text">
        <v-layout wrap>
          <v-flex xs12 md6 align-center justify-center>
            <v-btn flat icon color="white" slot="activator" @click="$router.go(-1)">
             <v-icon>arrow_back</v-icon>
            </v-btn>
            <span class="subheading white--text">Disciplina</span>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text class="grey lighten-5">
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
      </v-card-text>
      <v-card-actions class="grey lighten-5">
        <v-btn flat color="green lighten-1" @click="submit">Salvar</v-btn>  
        <v-btn flat color="red lighten-1" @click="reset">Limpar</v-btn> 
      </v-card-actions>
    </v-card>
  </v-flex>
 </v-layout>
</template>
<script>
 import {validationMixin} from 'vuelidate'
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
   methods: {
     submit () {
       this.$v.$touch()
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
   },
   beforeCreate () {
     console.log(this.$route.params.id)
   }
 }
</script>