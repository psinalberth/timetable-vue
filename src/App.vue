<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
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
    <v-toolbar app fixed dark class="primary">
      <v-toolbar-side-icon 
        @click.native.stop="drawer = !drawer"
        class="hidden-sm-and-up">  
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Timetable</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-if="item.toolbar" 
          v-for="item in menuItems" 
          :key="item.title"
          :to="{name: item.link}">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
       <transition name="slide-x-transition" mode="out-in">
        <router-view></router-view>
       </transition>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {

    data: () => ({
      drawer: false,
      title: 'Timetable',
      menuItems: [
        {icon: 'supervisor_account', title: 'Professores', toolbar: true, link: 'novo-professor'},
        {icon: 'library_books', title: 'Disciplinas', toolbar: true, link: 'disciplina-list'},
        {icon: 'event', title: 'Grades de Horário', toolbar: true, link: 'nova-disciplina'},
        {icon: 'face', title: 'Sign Up', toolbar: true, link: 'navegacao'},
        {icon: 'person', title: 'Meu Perfil', toolbar: true, link: 'nova-disciplina'},
        {icon: 'person', title: 'Matrizes Curriculares', toolbar: false, link: 'nova-disciplina'},
        {icon: 'heart', tiltle: 'Cursos', toolbar: false, link: 'novo-curso'}
      ]
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
  @require './stylus/main'
</style>