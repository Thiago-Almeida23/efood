import { useEffect, useState } from 'react'
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
import { fetchCheckout, DeliveryData } from '../../services/api'
import Payment from '../Payment'

type CheckoutProps = {
  onBackToCart: () => void
}

const Checkout = ({ onBackToCart }: CheckoutProps) => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)

  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null)
  const [isPayment, setIsPayment] = useState(false)

  useEffect(() => {
    const loadCheckoutData = async () => {
      try {
        const data = await fetchCheckout()
        setDeliveryData(data.delivery)
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error)
      }
    }

    loadCheckoutData()
  }, [])

  const closeCheckout = () => {
    dispatch(close())
  }

  const handleProceedToPayment = () => {
    setIsPayment(true)
  }

  const handleBackToCheckout = () => {
    setIsPayment(false)
  }

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckout} />
      <Sidebar>
        {isPayment ? (
          <Payment onBackToCheckout={handleBackToCheckout} />
        ) : (
          <>
            <h3>Entrega</h3>
            <Form>
              <FormGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  id="fullName"
                  type="text"
                  value={deliveryData?.receiver || ''}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      receiver: e.target.value
                    } as DeliveryData)
                  }
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  value={deliveryData?.address.description || ''}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      address: {
                        ...deliveryData?.address,
                        description: e.target.value
                      }
                    } as DeliveryData)
                  }
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  value={deliveryData?.address.city || ''}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      address: {
                        ...deliveryData?.address,
                        city: e.target.value
                      }
                    } as DeliveryData)
                  }
                />
              </FormGroup>
              <InputRow>
                <FormGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    id="zipCode"
                    type="text"
                    value={deliveryData?.address.zipCode || ''}
                    onChange={(e) =>
                      setDeliveryData({
                        ...deliveryData,
                        address: {
                          ...deliveryData?.address,
                          zipCode: e.target.value
                        }
                      } as DeliveryData)
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="addressNumber">Número</label>
                  <input
                    id="addressNumber"
                    type="number"
                    value={deliveryData?.address.number || ''}
                    onChange={(e) =>
                      setDeliveryData({
                        ...deliveryData,
                        address: {
                          ...deliveryData?.address,
                          number: Number(e.target.value)
                        }
                      } as DeliveryData)
                    }
                  />
                </FormGroup>
              </InputRow>
              <FormGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  value={deliveryData?.address.complement || ''}
                  onChange={(e) =>
                    setDeliveryData({
                      ...deliveryData,
                      address: {
                        ...deliveryData?.address,
                        complement: e.target.value
                      }
                    } as DeliveryData)
                  }
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
