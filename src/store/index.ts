// store/index.ts

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cartSlice'
import { api } from '../services/api' // Certifique-se de que o caminho está correto

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer // Adiciona o reducer do RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // Adiciona o middleware do RTK Query
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
