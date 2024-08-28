import { useDispatch } from 'react-redux'
import Button from '../Button'
import { ConfirmationContainer, Text } from './styles'
import { clearCart, close } from '../../reducers/cartSlice'

type ConfirmationProps = {
  orderId: number
}

const Confirmation = ({ orderId }: ConfirmationProps) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(close())
    dispatch(clearCart())
  }

  return (
    <ConfirmationContainer>
      <h3>Pedido realizado - {orderId}</h3>
      <Text>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
        <br />
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
        <br />
        <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br />
        <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </Text>
      <Button
        type="button"
        title="Clique aqui para concluir"
        onClick={handleClose}
      >
        Concluir
      </Button>
    </ConfirmationContainer>
  )
}

export default Confirmation
