import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { Overlay, CartContainer, Sidebar, TotalValue, CartItem } from './styles'
import { close, removeItem } from '../../reducers/cartSlice'
import { RootState } from '../../store'
import { MenuItem } from '../../services/api'

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)

  const closeCart = () => {
    dispatch(close())
  }

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id))
  }

  const totalValue = items
    .reduce((acc, item) => acc + item.preco, 0)
    .toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item: MenuItem) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>
                  {item.preco.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveItem(item.id)}
              ></button>
            </CartItem>
          ))}
        </ul>
        <TotalValue>
          Valor total <span>{totalValue}</span>
        </TotalValue>
        <Button type="button" title="Clique aqui para continuar com a compra">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
