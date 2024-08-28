import { useSelector } from 'react-redux'
import { CardInputRow, FormGroup, InputRow } from './styles'
import Button from '../Button'
import { RootState } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import Confirmation from '../Confirmation'
import { useState, useEffect } from 'react'

type PaymentProps = {
  onBackToCheckout: () => void
  deliveryInfo: {
    receiver: string
    address: string
    city: string
    zipCode: string
    addressNumber: string
    complement: string
  }
}

const Payment = ({ onBackToCheckout, deliveryInfo }: PaymentProps) => {
  const items = useSelector((state: RootState) => state.cart.items)

  const totalValue = items
    .reduce((acc, item) => acc + item.preco, 0)
    .toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })

  const [purchase, { isSuccess }] = usePurchaseMutation()
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleFinalizePayment = () => {
    const products = items.map((item) => ({
      id: item.id,
      price: item.preco
    }))

    const paymentData = {
      card: {
        name: 'Nome no Cartão',
        number: 'Número do Cartão',
        code: 123,
        expires: {
          month: 12,
          year: 2025
        }
      }
    }

    const purchasePayload = {
      products,
      delivery: {
        receiver: deliveryInfo.receiver,
        address: {
          description: deliveryInfo.address,
          city: deliveryInfo.city,
          zipCode: deliveryInfo.zipCode,
          number: Number(deliveryInfo.addressNumber),
          complement: deliveryInfo.complement
        }
      },
      payment: paymentData
    }

    purchase(purchasePayload)
  }

  useEffect(() => {
    if (isSuccess) {
      setShowConfirmation(true)
    }
  }, [isSuccess])

  return (
    <>
      {showConfirmation ? (
        <Confirmation orderId={12345} />
      ) : (
        <form>
          <h3>Pagamento - Valor a pagar {totalValue}</h3>
          <FormGroup>
            <label htmlFor="name">Nome no cartão</label>
            <input id="name" type="text" />
          </FormGroup>
          <CardInputRow>
            <FormGroup>
              <label htmlFor="number">Número do cartão</label>
              <input id="number" type="text" className="card-number" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="code">CVV</label>
              <input id="code" type="text" className="card-cvv" />
            </FormGroup>
          </CardInputRow>
          <InputRow>
            <FormGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input id="expiresMonth" type="text" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input id="expiresYear" type="text" />
            </FormGroup>
          </InputRow>
          <Button
            type="button"
            title="Clique aqui para avançar com a operação"
            onClick={handleFinalizePayment}
          >
            Finalizar pagamento
          </Button>
          <Button
            type="button"
            title="Clique aqui para retornar ao Checkout"
            onClick={onBackToCheckout}
          >
            Voltar para a edição de endereço
          </Button>
        </form>
      )}
    </>
  )
}

export default Payment
