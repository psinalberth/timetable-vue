<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6- offset-sm3>
    <h4 class="grey--text">Crie uma nova disciplina</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Código" 
     v-model="disciplina.codigo"
     :error-messages="codigoErrors" 
     required>   
    </v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Sigla" 
     v-model="disciplina.sigla"
     :error-messages="siglaErrors"
     required></v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Descrição" 
     v-model="disciplina.descricao"
     :error-messages="descricaoErrors"
     required>
    </v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row class="mt-0">
   <v-flex xs12 sm6 offset-sm3>
    <span class="red--text mr-1">*</span>Campos obrigatórios
   </v-flex>
  </v-layout>
  <v-layout row class="mt-3">
   <v-flex xs12 sm6 offset-sm3>
    <v-btn class="primary" @click="submit">Salvar</v-btn>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<script>
 import {validationMixin} from 'vuelidate'
 import {findById} from '@/services/disciplina-service'
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
   props: ['id'],
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
     if (this.id) {
       findById(this.id).then(response => response.data).then(disciplina => { this.disciplina = disciplina })
     }
   },
   methods: {
     submit () {
       this.$v.$touch()

       if (!this.$v.$invalid) {
         this.$store.dispatch('salvarDisciplina', this.disciplina)
         this.$router.push({ name: 'listar-disciplinas' })
       }
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
       !this.$v.disciplina.sigla.maxLength && erros.push('Sigla dever ter no máximo 10 caracteres.')
       return erros
     }
   }
 }
</script>