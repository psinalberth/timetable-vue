<template>
  <v-app>
    <navegacao :menuItems="menuItems" :drawer="drawer"></navegacao>
    <transition name="slide-y-transition">
     <toolbar-home 
      v-if="$route.meta.home" 
      :menuItems="menuItems" 
      @toggleSidebar="drawer = !drawer">
     </toolbar-home>
     <toolbar-busca v-if="$route.meta.list"></toolbar-busca>
     <toolbar-formulario title="Hello" v-if="$route.meta.form"></toolbar-formulario>
    </transition>
    <main>
      <v-content>
       <transition name="slide-y-transition" mode="out-in">
        <router-view></router-view>
       </transition>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import Navegacao from '@/components/Shared/Navegacao'
  import ToolbarHome from '@/components/Shared/Toolbar/ToolbarHome'
  import ToolbarBusca from '@/components/Shared/Toolbar/ToolbarBusca'
  import ToolbarFormulario from '@/components/Shared/Toolbar/ToolbarFormulario'

  export default {

    data: () => ({
      drawer: false,
      title: 'Timetable',
      search: '',
      menuItems: [
        {icon: 'supervisor_accounts', title: 'Professores', toolbar: true, link: 'listar-professores'},
        {icon: 'import_contacts', title: 'Disciplinas', toolbar: true, link: 'listar-disciplinas'},
        {icon: 'library_books', title: 'Matrizes Curriculares', toolbar: false, link: 'listar-matrizes'},
        {icon: 'school', title: 'Cursos', toolbar: false, link: 'listar-cursos'},
        {icon: 'business', title: 'Departamentos', toolbar: true, link: 'listar-departamentos'},
        {icon: 'event', title: 'Grades de Horário', toolbar: true, link: '/'},
        {icon: 'schedule', title: 'Horários', toolbar: true, link: 'listar-horarios'}
      ]
    }),
    props: {
      source: String
    },
    methods: {
      goTo: function (route) {
        this.$router.push({name: route})
      },
      goBack () {
        console.log('Hello')
      },
      hi () {
        console.log('Hello Moto')
      },
      show () {
        if (this.drawer) {
          this.drawer = false
        } else {
          this.drawer = true
        }
      }
    },
    components: {
      Navegacao,
      ToolbarHome,
      ToolbarBusca,
      ToolbarFormulario
    }
  }
</script>
<style>
  @require './stylus/main'
</style>