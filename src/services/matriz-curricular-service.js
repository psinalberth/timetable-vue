import Http from '@/services/shared/Http'

let uri = 'matrizes/'

export const findAll = () => {
  return Http.get(uri)
}

export const findById = (id) => {
  return Http.get(uri + id)
}
