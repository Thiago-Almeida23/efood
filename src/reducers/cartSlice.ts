import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../services/api'

type CartState = {
  items: MenuItem[]
  totalItems: number
  totalValue: number
  isOpen: boolean
  isOrderConfirmed: boolean // Novo estado para controle da confirmação
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalValue: 0,
  isOpen: false,
  isOrderConfirmed: false // Inicialmente falso
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
      state.totalItems += 1
      state.totalValue += action.payload.preco
      state.isOrderConfirmed = false // Garantir que a confirmação não apareça ao adicionar um item
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      )
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== action.payload)
        state.totalItems -= 1
        state.totalValue -= itemToRemove.preco
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.totalValue = 0
      state.isOrderConfirmed = true
    }
  }
})

export const { add, open, close, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
