import Button from '../Button'
import { Overlay, CartContainer, Sidebar, TotalValue, CartItem } from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img />
          <div>
            <h3>Nome do prato</h3>
            <span>R$ 200,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <TotalValue>Valor total R$ 200,00</TotalValue>
      <Button type="button" title="Clique aqui para continuar com a compra">
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
