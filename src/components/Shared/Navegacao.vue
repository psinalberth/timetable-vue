<template>
 <v-navigation-drawer temporary v-model="drawer">
  <v-list>
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
     },
     drawer: {
       type: Boolean,
       default: false
     }
   }
 }
</script>