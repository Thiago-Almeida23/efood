import Product from '../Product'

import { Container, List } from './styles'

const ProductsList = () => (
  <Container>
    <div className="container">
      <List>
        <Product
          image={require('../../assets/images/pizza.png')}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
          image={require('../../assets/images/pizza.png')}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
          image={require('../../assets/images/pizza.png')}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
          image={require('../../assets/images/pizza.png')}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
          image={require('../../assets/images/pizza.png')}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
          image={require('../../assets/images/pizza.png')}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
