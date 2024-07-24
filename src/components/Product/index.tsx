import Button from '../Button'

import { Card, FoodDescription, Title } from './styles'
import productImage from '../../assets/images/pizza.png'

const Product = () => (
  <Card>
    <img src={productImage} alt="Nome do Prato" />
    <Title>Nome do Prato</Title>
    <FoodDescription>
      A clássica Marguerita: molho do tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade.
    </FoodDescription>
    <Button
      type="button"
      title="Clique aqui para adicionar o pedido ao carrinho"
    >
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default Product
