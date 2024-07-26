import Button from '../Button'

import { Card, FoodDescription, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} title={title} />
    <Title>{title}</Title>
    <FoodDescription>{description}</FoodDescription>
    <Button
      type="button"
      title="Clique aqui para adicionar o pedido ao carrinho"
    >
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default Product
