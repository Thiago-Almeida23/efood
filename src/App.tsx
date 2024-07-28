import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomeHeader from './components/HomeHeader'
import Header from './components/Header'
import { GlobalCss } from './styles'
import RestaurantsList from './components/RestaurantsList'
import ProductsList from './components/ProductsList'
import Footer from './components/Footer'
import Banner from './components/Banner'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HomeHeader />
        <RestaurantsList />
      </>
    )
  },
  {
    path: '/restaurant',
    element: (
      <>
        <Header />
        <Banner />
        <ProductsList />
      </>
    )
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
