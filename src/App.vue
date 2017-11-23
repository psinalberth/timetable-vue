<template>
  <v-app>
    <navegacao :menuItems="menuItems" :drawer="drawer"></navegacao>
    <transition name="slide-y-transition">
     <toolbar-home 
      v-if="$route.meta.home" 
      :menuItems="menuItems" 
      @toggleSidebar="drawer = !drawer">
     </toolbar-home>
     <toolbar-busca v-if="$route.meta.list" @showMenu="drawer = !drawer"></toolbar-busca>
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
        {icon: 'supervisor_account', title: 'Professores', toolbar: true, link: 'editar-professor'},
        {icon: 'library_books', title: 'Disciplinas', toolbar: true, link: 'listar-disciplinas'},
        {icon: 'face', title: 'Sign Up', toolbar: true, link: 'navegacao'},
        {icon: 'person', title: 'Meu Perfil', toolbar: true, link: 'editar-disciplina'},
        {icon: 'person', title: 'Matrizes Curriculares', toolbar: false, link: 'editar-disciplina'},
        {icon: 'favorite', title: 'Cursos', toolbar: false, link: 'editar-curso'},
        {icon: 'delete', title: 'Departamentos', toolbar: true, link: 'listar-departamentos'}
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