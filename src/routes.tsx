import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantDetails from './pages/RestaurantDetails'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurant/:id',
    element: <RestaurantDetails />
  }
])

export default routes
