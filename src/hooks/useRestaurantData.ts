import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRestaurants, RestaurantData } from '../services/api'

const useRestaurantData = () => {
  const [restaurant, setRestaurant] = useState<RestaurantData | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        const data = await fetchRestaurants()
        const restaurantData = data.find((r) => r.id.toString() === id)
        setRestaurant(restaurantData || null)
      } catch (error) {
        console.error('Erro ao buscar restaurante:', error)
        setRestaurant(null)
      }
    }

    if (id) {
      loadRestaurant()
    }
  }, [id])

  return { restaurant }
}

export default useRestaurantData
