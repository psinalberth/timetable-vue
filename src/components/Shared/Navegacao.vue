<template>
 <v-navigation-drawer 
  fixed
  temporary 
  app
  v-model="drawer">
  <v-toolbar dark flat class="red darken-2">
    <img width="40" center src="../../assets/logo.png">
    <v-toolbar-title>Vue My Timetable</v-toolbar-title>
  </v-toolbar>
  <v-list subheader>
    <v-subheader>Administrador</v-subheader>
    <v-list-tile
      v-for="item in menuItems" 
      router :to="{name: item.link}"
      :key="item.title">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        {{ item.title }}
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
 </v-navigation-drawer>	
</template>
<script>
 export default {
   props: {
     menuItems: {
       type: Array
     }
   },
   computed: {
     drawer: {
       get () {
         return this.$store.getters.sidebar
       },
       set (val) {
         this.$store.commit('setSidebar', val)
       }
     }
   }
 }
</script>