import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import {
  Overlay,
  CheckoutContainer,
  Sidebar,
  Form,
  FormGroup,
  InputRow
} from './styles'
import { close } from '../../reducers/cartSlice'
import { RootState } from '../../store'
import Payment from '../Payment'

type CheckoutProps = {
  onBackToCart: () => void
}

const Checkout = ({ onBackToCart }: CheckoutProps) => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)

  const [isPayment, setIsPayment] = useState(false)

  // State to hold delivery information
  const [deliveryInfo, setDeliveryInfo] = useState({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    addressNumber: '',
    complement: ''
  })

  const closeCheckout = () => {
    dispatch(close())
  }

  const handleProceedToPayment = () => {
    setIsPayment(true)
  }

  const handleBackToCheckout = () => {
    setIsPayment(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value
    }))
  }

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckout} />
      <Sidebar>
        {isPayment ? (
          <Payment
            onBackToCheckout={handleBackToCheckout}
            deliveryInfo={deliveryInfo}
          />
        ) : (
          <>
            <h3>Entrega</h3>
            <Form>
              <FormGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  id="receiver"
                  type="text"
                  value={deliveryInfo.receiver}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  value={deliveryInfo.address}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  value={deliveryInfo.city}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <InputRow>
                <FormGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    id="zipCode"
                    type="text"
                    value={deliveryInfo.zipCode}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="addressNumber">Número</label>
                  <input
                    id="addressNumber"
                    type="number"
                    value={deliveryInfo.addressNumber}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </InputRow>
              <FormGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  value={deliveryInfo.complement}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Form>
            <Button
              type="button"
              title="Clique aqui para continuar com o pagamento"
              onClick={handleProceedToPayment}
            >
              Continuar com o pagamento
            </Button>
            <Button
              type="button"
              title="Clique aqui para retornar ao carrinho"
              onClick={onBackToCart}
            >
              Voltar para o carrinho
            </Button>
          </>
        )}
      </Sidebar>
    </CheckoutContainer>
  )
}

export default Checkout
