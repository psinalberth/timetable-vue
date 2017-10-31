import {findAll, remove} from '@/services/disciplina-service'
import {set} from 'vue'
import DeleteModal from '@/components/shared/DeleteModal'

export default {
    data () {
      return {
        modalDelete: false,
        textoPesquisa: '',
        title: 'Disciplinas',
        disciplinas: [],
        id: ''
      }
    },
    components: {
      'modal': DeleteModal
    },
    mounted () {
      findAll().then(response => response.data).then(disciplinas => {this.disciplinas = disciplinas})
    },
    computed: {
      filter () {
        
        var self = this
        
        if (this.textoPesquisa == null || this.textoPesquisa === '')
          return this.disciplinas

        return this.disciplinas.filter(function(disciplina) {
          return disciplina.descricao.toUpperCase().indexOf(self.textoPesquisa.toUpperCase()) > -1
        })
      }
    },
    methods: {

      novo () {
        this.$router.push({name: 'disciplina-detalhe', params: {id: 'nova'}})
      },
      editar (disciplina) {
        this.$router.push({name: 'disciplina-detalhe', params: {id: disciplina.id}})
      },
      deletar (id) {
        this.id = id
        this.modalDelete = !this.modalDelete
        console.log(this.id)
      },
      showModal () {
        console.log(!this.modalDelete)
        this.modalDelete = !this.modalDelete
      },
      foo () {
        remove(this.id)
        findAll().then(response => response.data).then(disciplinas => {this.disciplinas = disciplinas})
        this.modalDelete = !this.modalDelete
      },
      remover () {
        remove(this.id)
        console.log('Remover!')
        this.modalDelete = !this.modalDelete
      }
    }
  }