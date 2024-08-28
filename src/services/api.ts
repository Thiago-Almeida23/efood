import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
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

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    purchase: builder.mutation<unknown, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { usePurchaseMutation } = api
