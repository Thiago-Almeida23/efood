import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'
import ProductsList from './components/ProductsList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
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
      <div className="container"></div>
      <Header />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
