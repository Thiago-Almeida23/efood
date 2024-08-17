import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Footer from './components/Footer'
import routes from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={routes} />
      <Footer />
    </Provider>
  )
}

export default App
