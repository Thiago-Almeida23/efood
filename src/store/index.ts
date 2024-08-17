import { configureStore } from '@reduxjs/toolkit'
// Importar os reducers aqui, conforme necessário
// Exemplo: import cartReducer from '../reducers/cart'

export const store = configureStore({
  reducer: {
    // Adicionar os reducers aqui
    // Exemplo: cart: cartReducer,
  }
})

// Tipagem do Redux store e da aplicação
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
