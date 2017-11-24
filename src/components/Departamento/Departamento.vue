<template>
 <v-container fluid>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <h4 class="grey--text">Criar novo departamento</h4>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Código" 
     v-model="departamento.codigo" 
     :error-messages="errosCodigo"
     required>   
    </v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Nome" 
     v-model="departamento.nome"
     :error-messages="errosNome" 
     required>
    </v-text-field>
   </v-flex>
  </v-layout>
  <v-layout row>
   <v-flex xs12 sm6 offset-sm3>
    <v-text-field 
     label="Descrição" 
     multi-line 
     rows="3" 
     v-model="departamento.descricao"
     :error-messages="errosDescricao" 
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
    <v-btn class="primary" @click="salvarDepartamento">Salvar</v-btn>
   </v-flex>
  </v-layout>
 </v-container>
</template>
<script>
 import { validationMixin } from 'vuelidate'
 import { required, maxLength, minLength } from 'vuelidate/lib/validators'
 export default {
   mixins: [validationMixin],
   validations: {
     departamento: {
       codigo: { required, minLength: minLength(3), maxLength: maxLength(10) },
       nome: { required },
       descricao: { required }
     }
   },
   mounted () {},
   methods: {
     salvarDepartamento () {
       this.$v.$touch()
       if (!this.$v.$invalid) {
         this.$store.dispatch('salvarDepartamento', this.departamento)
         this.$router.push({ name: 'listar-departamentos' })
       }
     }
   },
   computed: {
     departamento () {
       return this.$store.getters.departamento
     },
     errosCodigo () {
       const erros = []
       if (!this.$v.departamento.codigo.$dirty) return erros
       !this.$v.departamento.codigo.required && erros.push('Código é obrigatório.')
       !this.$v.departamento.codigo.minLength && erros.push('Código deve ter no mínimo 3 caracteres.')
       !this.$v.departamento.codigo.maxLength && erros.push('Código deve ter no máximo 10 caracteres.')
       return erros
     },
     errosNome () {
       const erros = []
       if (!this.$v.departamento.nome.$dirty) return erros
       !this.$v.departamento.nome.required && erros.push('Nome é obrigatório.')
       return erros
     },
     errosDescricao () {
       const erros = []
       if (!this.$v.departamento.descricao.$dirty) return erros
       !this.$v.departamento.descricao.required && erros.push('Descrição é obrigatório.')
       return erros
     }
   }
 }
</script>