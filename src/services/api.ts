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

export interface Address {
  description: string
  city: string
  zipCode: string
  number: number
  complement: string
}

export interface DeliveryData {
  receiver: string
  address: Address
}

export interface PaymentData {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

export interface CheckoutData {
  products: { id: number; price: number }[]
  delivery: DeliveryData
  payment: PaymentData // Adiciona as informações de pagamento
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

export const fetchCheckout = async (): Promise<CheckoutData> => {
  const response = await fetch(
    'https://fake-api-tau.vercel.app/api/efood/checkout'
  )
  const data = await response.json()

  return data as CheckoutData
}
