import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchCheckout, PaymentData } from '../../services/api'
import { CardInputRow, FormGroup, InputRow } from './styles'
import Button from '../Button'
import { RootState } from '../../store'

type PaymentProps = {
  onBackToCheckout: () => void
}

const Payment = ({ onBackToCheckout }: PaymentProps) => {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null)
  const items = useSelector((state: RootState) => state.cart.items)

  const totalValue = items
    .reduce((acc, item) => acc + item.preco, 0)
    .toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })

  useEffect(() => {
    const loadPaymentData = async () => {
      try {
        const data = await fetchCheckout()
        setPaymentData(data.payment)
      } catch (error) {
        console.error('Erro ao carregar dados de pagamento:', error)
      }
    }

    loadPaymentData()
  }, [])

  return (
    <form>
      <h3>Pagamento - Valor a pagar {totalValue}</h3>
      <FormGroup>
        <label htmlFor="name">Nome no cartão</label>
        <input
          id="name"
          type="text"
          value={paymentData?.card.name || ''}
          onChange={(e) => {
            if (paymentData) {
              setPaymentData({
                ...paymentData,
                card: {
                  ...paymentData.card,
                  name: e.target.value
                }
              })
            }
          }}
        />
      </FormGroup>
      <CardInputRow>
        <FormGroup>
          <label htmlFor="number">Número do cartão</label>
          <input
            id="number"
            type="text"
            className="card-number"
            value={paymentData?.card.number || ''}
            onChange={(e) => {
              if (paymentData) {
                setPaymentData({
                  ...paymentData,
                  card: {
                    ...paymentData.card,
                    number: e.target.value
                  }
                })
              }
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="code">CVV</label>
          <input
            id="code"
            type="text"
            className="card-cvv"
            value={paymentData?.card.code || ''}
            onChange={(e) => {
              if (paymentData) {
                setPaymentData({
                  ...paymentData,
                  card: {
                    ...paymentData.card,
                    code: Number(e.target.value)
                  }
                })
              }
            }}
          />
        </FormGroup>
      </CardInputRow>
      <InputRow>
        <FormGroup>
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <input
            id="expiresMonth"
            type="text"
            value={paymentData?.card.expires.month || ''}
            onChange={(e) => {
              if (paymentData) {
                setPaymentData({
                  ...paymentData,
                  card: {
                    ...paymentData.card,
                    expires: {
                      ...paymentData.card.expires,
                      month: Number(e.target.value)
                    }
                  }
                })
              }
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <input
            id="expiresYear"
            type="text"
            value={paymentData?.card.expires.year || ''}
            onChange={(e) => {
              if (paymentData) {
                setPaymentData({
                  ...paymentData,
                  card: {
                    ...paymentData.card,
                    expires: {
                      ...paymentData.card.expires,
                      year: Number(e.target.value)
                    }
                  }
                })
              }
            }}
          />
        </FormGroup>
      </InputRow>
      <Button
        type="button"
        title="Clique aqui para avançar com a operação"
        onClick={onBackToCheckout}
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
  )
}

export default Payment
