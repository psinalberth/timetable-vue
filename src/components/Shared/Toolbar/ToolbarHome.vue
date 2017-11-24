<template>
 <v-toolbar 
  app 
  fixed 
  flat 
  dark 
  class="primary">
  <v-toolbar-side-icon 
    @click.stop="toggleSidebar">  
  </v-toolbar-side-icon>
  <v-toolbar-title>
   <router-link 
    to="/" 
    tag="span" 
    style="cursor: pointer">Timetable
   </router-link>
  </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-xs-only">
   <v-btn flat v-if="item.toolbar" 
     v-for="item in menuItems" 
     :key="item.title"
     :to="{name: item.link}">
     <v-icon left>{{ item.icon }}</v-icon>{{ item.title }}
   </v-btn>
  </v-toolbar-items>
 </v-toolbar>
</template>
<script>
 export default {
   props: ['menuItems'],
   methods: {
     toggleSidebar () {
       this.$store.commit('setSidebar', !this.$store.getters.sidebar)
     }
   }
 }
</script>