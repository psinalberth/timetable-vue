<template>
 <v-toolbar app dark fixed class="primary" extended prominent>
  <v-toolbar-side-icon @click="showMenu"></v-toolbar-side-icon>
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
       console.log(this.search)
       this.$store.dispatch('pesquisar', { search: this.search, action: this.$route.meta.actions.list })
     },
     showMenu () {
       this.$emit('showMenu', this.search)
     }
   }
 }
</script>