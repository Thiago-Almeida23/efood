import { useEffect, useState } from 'react'
import Restaurant from '../Restaurant'
import { Container, List } from './styles' // Certifique-se de manter esses imports

type RestaurantData = {
  id: string
  titulo: string
  capa: string
  descricao: string
  tipo: string
  destacado: boolean
  avaliacao: number
}

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState<RestaurantData[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
  }, [])

  return (
    <Container>
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            image={restaurant.capa}
            title={restaurant.titulo}
            description={restaurant.descricao}
            cuisine={restaurant.tipo}
            isFeatured={restaurant.destacado}
            rating={restaurant.avaliacao}
          />
        ))}
      </List>
    </Container>
  )
}

export default RestaurantsList
