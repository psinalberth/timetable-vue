<template>
 <v-toolbar app dark fixed class="primary">
  <v-btn icon flat @click="goBack">
   <v-icon>arrow_back</v-icon>
  </v-btn>
  <v-toolbar-title v-text="title"></v-toolbar-title>
  <v-spacer></v-spacer>
  <!-- <v-toolbar-items> -->
   <v-btn icon flat>
   	<v-icon>check</v-icon>
   </v-btn>
   <v-btn icon flat>
   	<v-icon>delete</v-icon>
   </v-btn>
  <!-- </v-toolbar-items> -->
 </v-toolbar>
</template>
<script>
 export default {
   props: ['title'],
   methods: {
     goBack () {
       this.$emit('onGoBack')
       this.$router.go(-1)
     }
   }
 }
</script>