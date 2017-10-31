<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense>
        <v-list-tile @click="goTo('/')">
          <v-list-tile-action>
            <v-icon color="blue darken-2">home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goTo('disciplina-list')">
          <v-list-tile-action>
            <v-icon>favorite</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Disciplinas</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goTo('timetable')">
          <v-list-tile-action>
            <v-icon color="teal darken-2">schedule</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Timetable</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <main>
      <v-content>
        <v-toolbar class="elevation-0" color="blue-grey" dark fixed app>
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <!-- <v-container fluid> -->
          <transition name="slide-x-transition" mode="out-in">
            <router-view></router-view>
          </transition>
        <!-- </v-container> -->
      </v-content>
    </main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {

    data: () => ({
      drawer: true,
      title: 'Timetable'
    }),
    props: {
      source: String
    },
    methods: {
      goTo: function (route) {
        this.$router.push({name: route})
      }
    }
  }
</script>

<style>
</style>