import Product from '../Product'

import { Container, List } from './styles'

const ProductsList = () => (
  <Container>
    <div className="container">
      <List>
        <Product
          image="//placehold.it/304x167"
          title="Nome do prato"
          description="teste"
        />
        <Product
          image="//placehold.it/304x167"
          title="Nome do prato"
          description="teste"
        />
        <Product
          image="//placehold.it/304x167"
          title="Nome do prato"
          description="teste"
        />
        <Product
          image="//placehold.it/304x167"
          title="Nome do prato"
          description="teste"
        />
        <Product
          image="//placehold.it/304x167"
          title="Nome do prato"
          description="teste"
        />
        <Product
          image="//placehold.it/304x167"
          title="Nome do prato"
          description="teste"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
