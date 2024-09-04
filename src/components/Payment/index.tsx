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

  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    number: '',
    code: '',
    expiresMonth: '',
    expiresYear: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value
    }))
  }

  const validateFields = () => {
    const { name, number, code, expiresMonth, expiresYear } = paymentInfo

    if (!name || !number || !code || !expiresMonth || !expiresYear) {
      alert('Preencha todos os campos obrigatórios.')
      return false
    }

    if (number.length !== 16) {
      alert('O número do cartão deve ter 16 dígitos.')
      return false
    }

    if (code.length !== 3) {
      alert('O CVV deve ter 3 dígitos.')
      return false
    }

    if (
      expiresMonth.length !== 2 ||
      isNaN(Number(expiresMonth)) ||
      Number(expiresMonth) < 1 ||
      Number(expiresMonth) > 12
    ) {
      alert('O mês de validade deve ter 2 dígitos e estar entre 01 e 12.')
      return false
    }

    if (
      expiresYear.length !== 4 ||
      isNaN(Number(expiresYear)) ||
      Number(expiresYear) < new Date().getFullYear()
    ) {
      alert('O ano de validade deve ter 4 dígitos e não pode ser no passado.')
      return false
    }

    return true
  }

  const handleFinalizePayment = () => {
    if (validateFields()) {
      const products = items.map((item) => ({
        id: item.id,
        price: item.preco
      }))

      const paymentData = {
        card: {
          name: paymentInfo.name,
          number: paymentInfo.number,
          code: parseInt(paymentInfo.code),
          expires: {
            month: parseInt(paymentInfo.expiresMonth),
            year: parseInt(paymentInfo.expiresYear)
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
            <input
              id="name"
              type="text"
              value={paymentInfo.name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <CardInputRow>
            <FormGroup>
              <label htmlFor="number">Número do cartão</label>
              <input
                id="number"
                type="text"
                className="card-number"
                value={paymentInfo.number}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="code">CVV</label>
              <input
                id="code"
                type="text"
                className="card-cvv"
                value={paymentInfo.code}
                onChange={handleInputChange}
              />
            </FormGroup>
          </CardInputRow>
          <InputRow>
            <FormGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input
                id="expiresMonth"
                type="text"
                value={paymentInfo.expiresMonth}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                id="expiresYear"
                type="text"
                value={paymentInfo.expiresYear}
                onChange={handleInputChange}
              />
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
