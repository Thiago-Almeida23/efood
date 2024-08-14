import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import useRestaurantData from '../../hooks/useRestaurantData'

const RestaurantDetails = () => {
  const { restaurant } = useRestaurantData()

  if (!restaurant) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Header />
      <Banner />
      <ProductsList menuItems={restaurant.cardapio} />
    </>
  )
}

export default RestaurantDetails
