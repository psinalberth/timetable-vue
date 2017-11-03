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
      <slot name="actions">
      </slot>
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