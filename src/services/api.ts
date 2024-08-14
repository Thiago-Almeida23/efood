export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface RestaurantData {
  id: number
  titulo: string
  capa: string
  descricao: string
  tipo: string
  destacado: boolean
  avaliacao: number
  cardapio: MenuItem[]
}

export const fetchRestaurants = async (): Promise<RestaurantData[]> => {
  const response = await fetch(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  )
  const data = await response.json()

  if (Array.isArray(data)) {
    return data as RestaurantData[]
  }

  throw new Error('Dados da API não estão no formato esperado')
}
