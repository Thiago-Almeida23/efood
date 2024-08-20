import Product from '../Product'
import { Container, List } from './styles'
import { MenuItem } from '../../services/api'

type Props = {
  menuItems: MenuItem[]
}

const ProductsList = ({ menuItems }: Props) => (
  <Container>
    <div className="container">
      <List>
        {menuItems.map((product) => (
          <Product
            key={product.id}
            image={product.foto}
            title={product.nome}
            description={product.descricao}
            price={product.preco.toString()}
            portion={product.porcao}
            id={product.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
