import DisciplinaDetail from '@/components/disciplina/DisciplinaDetail'
import DeleteModal from '@/components/shared/DeleteModal'

export default {
    components: {
      'modal-delete': DeleteModal
    },
    data () {
      return {
        modalDelete: false,
        disciplina: {
          id: 0,
          codigo: '',
          descricao: '',
          sigla: ''
        },
        items: [
          {
            id: 1,
            codigo: 4,
            descricao: 'Cálculo Diferencial e Integral I',
            sigla: 'CALCDIFI'
          },
          {
            id: 2,
            codigo: 23,
            descricao: 'Linguagem de Programação I',
            sigla: 'LINGPROI'
          },
          {
            id: 3,
            codigo: 215,
            descricao: 'Algoritmos e Estruturas de Dados I',
            sigla: 'ALGEDADI'
          }
        ]
      }
    },
    methods: {
      salvar () {
        var id = this.disciplina.id
        if (id === undefined || id === 0) {
          this.disciplina.id = this.items.length + 1
          this.items.push(this.disciplina)
        }
        this.showDialog()
        this.alertSuccess = !this.alertSuccess
      },
      novo () {
        this.disciplina = {}
        this.$router.push({name: 'disciplina-detalhe', params: {id: 'nova'}})
      },
      showDialog () {
        this.dialog = !this.dialog
      },
      editar (item) {
        this.disciplina = item
        this.$router.push({name: 'disciplina-detalhe', params: {disciplina: item, id: this.disciplina.id}})
      },
      cancel () {
        this.disciplina = ''
        this.showDialog()
      },
      showModal: function () {
        this.modalDelete = !this.modalDelete
        this.$emit('show-modal', this.modalDelete)
      }
    }
  }