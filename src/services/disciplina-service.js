import Http from '@/services/shared/Http'

let uri = 'disciplinas/'

export const findAll = () => {
  return Http.get(uri)
}

export const findById = (id) => {
  return Http.get(uri + id)
}

export const save = (disciplina) => {
  Http.post(uri, disciplina)
}

export const remove = (id) => {
  Http.delete(uri + id)
}
