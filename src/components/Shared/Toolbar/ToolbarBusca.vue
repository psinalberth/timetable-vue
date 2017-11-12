<template>
 <v-toolbar app dark fixed class="primary" extended prominent>
  <v-toolbar-side-icon @click="showMenu"></v-toolbar-side-icon>
  <v-toolbar-title v-text="$route.meta.name"></v-toolbar-title>
  <v-text-field solo @input="find" placeholder="Pesquisar" v-model="search" prepend-icon="search" slot="extension"></v-text-field>
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
     find () {
       this.$store.dispatch('SET_TEXTO_PESQUISA', { search: this.search, action: this.$route.meta.action })
     },
     showMenu () {
       this.$emit('showMenu', this.search)
     }
   }
 }
</script>