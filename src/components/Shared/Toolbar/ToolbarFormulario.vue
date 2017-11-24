<template>
 <div>
 <v-toolbar app dark fixed class="primary">
  <v-tooltip bottom>
   <v-btn icon flat @click="goBack" slot="activator" class="ml-0">
    <v-icon>arrow_back</v-icon>
   </v-btn>
   <span>Voltar</span>
  </v-tooltip>
  <v-toolbar-title v-text="this.$route.meta.name"></v-toolbar-title>
  <v-spacer></v-spacer>
   <v-btn icon flat>
   	<v-icon>check</v-icon>
   </v-btn>
   <v-btn icon flat @click="modalDelete = !modalDelete">
   	<v-icon>delete</v-icon>
   </v-btn>
 </v-toolbar>
 <v-modal :visible="modalDelete">
  <v-card-actions align-center justify-center slot="actions">
   <v-btn flat slot="actions" color="green lighten-1" @click="remover">Remover</v-btn>
   <v-btn flat slot="actions" color="red lighten-1" @click="modalDelete = !modalDelete">Cancelar</v-btn>  
  </v-card-actions>
 </v-modal>
 </div>
</template>
<script>
 export default {
   props: ['title'],
   data () {
     return {
       modalDelete: false
     }
   },
   methods: {
     goBack () {
       this.$store.dispatch('setTextoPesquisa', '')
       this.$router.go(-1)
     },
     remover () {
       this.$store.dispatch('remover', { action: this.$route.meta.actions.delete, id: this.$route.params.id })
       this.$router.go(-1)
     }
   }
 }
</script>