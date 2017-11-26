<template>
 <v-toolbar 
  dark 
  app 
  fixed 
  class="primary" 
  extended 
  prominent>
  <v-toolbar-side-icon @click.stop="showMenu"></v-toolbar-side-icon>
  <v-toolbar-title v-text="$route.meta.name"></v-toolbar-title>
  <v-text-field 
   solo 
   @input="pesquisar" 
   placeholder="Pesquisar" 
   v-model="search" 
   prepend-icon="search" 
   slot="extension" 
   clearable>
  </v-text-field>
 </v-toolbar>
</template>
<script>
 export default {
   data () {
     return {
       search: ''
     }
   },
   methods: {
     pesquisar () {
       this.$store.dispatch(this.$route.meta.actions.list, this.search)
     },
     showMenu () {
       this.$store.commit('setSidebar', !this.$store.getters.sidebar)
     }
   }
 }
</script>