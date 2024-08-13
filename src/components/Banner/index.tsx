import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRestaurants, RestaurantData } from '../../services/api'
import { Image, Description, Title } from './styles'

const Banner = () => {
  const [restaurant, setRestaurant] = useState<RestaurantData | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        const data = await fetchRestaurants()
        const restaurantData = data.find((r) => r.id.toString() === id)

        if (restaurantData) {
          setRestaurant(restaurantData)
        } else {
          setRestaurant(null)
        }
      } catch (error) {
        console.error('Error fetching restaurants:', error)
      }
    }

    if (id) {
      loadRestaurant()
    }
  }, [id])

  if (!restaurant) {
    return <p>Loading...</p>
  }

  const { capa, tipo, titulo } = restaurant
  if (!capa || !tipo || !titulo) {
    return <p>Data missing...</p>
  }

  return (
    <Image style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <Description>{tipo}</Description>
        <Title>{titulo}</Title>
      </div>
    </Image>
  )
}

export default Banner
