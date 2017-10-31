<template>
  <v-dialog persistent v-model="visible" max-width="400px">
    <v-card>
      <v-card-title dark class="title blue-grey lighten-2 white--text">Remover Registro?</v-card-title>
      <v-card-text align-center justify-center>
        <v-layout row justify-center align-center>
          <img src="../../assets/logo.png">
        </v-layout>
        <b>Atenção!</b> Esta ação não poderá ser desfeita. Confirmar? 
      </v-card-text>
      <v-card-actions align-center justify-center>
        <v-btn flat color="green lighten-1" @click="remove">Remover</v-btn>
        <v-btn flat color="red lighten-1" @click="showModal">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
 export default {
   props: {
     visible: {
       type: Boolean,
       required: true
     }
   },
   data () {
     return {
       modalDelete: false
     }
   },
   methods: {
     showModal () {
       this.$emit('onCancel')
     },
     remove () {
       this.$emit('onConfirm')
     }
   }
 }
</script>