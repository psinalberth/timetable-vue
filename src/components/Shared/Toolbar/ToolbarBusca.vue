<template>
 <v-toolbar app dark fixed class="primary" extended prominent>
  <v-toolbar-side-icon></v-toolbar-side-icon>
  <v-toolbar-title v-text="$route.meta.name"></v-toolbar-title>
  <v-text-field solo placeholder="Pesquisar" prepend-icon="search" slot="extension"></v-text-field>
 </v-toolbar>
</template>
<script>
 export default {
   props: ['lista', 'textoPesquisa']
 }
</script>