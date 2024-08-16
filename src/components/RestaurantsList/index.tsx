import { useEffect, useState } from 'react'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'
import { fetchRestaurants, RestaurantData } from '../../services/api'

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState<RestaurantData[]>([])

  useEffect(() => {
    fetchRestaurants()
      .then((data) => setRestaurants(data))
      .catch((error) => {
        console.error('Erro ao buscar dados dos restaurantes:', error)
      })
  }, [])

  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              image={restaurant.capa}
              title={restaurant.titulo}
              description={restaurant.descricao}
              cuisine={restaurant.tipo}
              isFeatured={restaurant.destacado}
              rating={restaurant.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
