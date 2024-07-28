import Button from '../Button'

import { Card, FoodDescription, Title, ButtonContainer } from './styles'

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
    <ButtonContainer>
      <Button
        type="button"
        title="Clique aqui para adicionar o pedido ao carrinho"
      >
        Adicionar ao carrinho
      </Button>
    </ButtonContainer>
  </Card>
)

export default Product
