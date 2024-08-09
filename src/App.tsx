import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Footer from './components/Footer'
import Home from './pages/Home'
import RestaurantDetails from './pages/RestaurantDetails'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurant',
    element: <RestaurantDetails />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={routes} />
      <Footer />
    </>
  )
}

export default App
