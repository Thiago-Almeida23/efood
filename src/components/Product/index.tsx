import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, open } from '../../reducers/cartSlice'
import Button from '../Button'
import Modal from '../Modal'
import { Card, FoodDescription, Title, ButtonContainer, Image } from './styles'
import { MenuItem } from '../../services/api'
import { RootState } from '../../store'

type Props = {
  image: string
  title: string
  description: string
  price: string
  portion: string
  id: number
}

const getDescription = (description: string) => {
  if (description.length > 130) {
    return description.slice(0, 127) + '...'
  }
  return description
}

const formatPrice = (price: string) => {
  const parsedPrice = parseFloat(price)
  return parsedPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  })
}

const Product = ({ image, title, description, price, portion, id }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()

    const itemExists = cartItems.some((item) => item.id === id)

    if (itemExists) {
      alert('Este item já está no carrinho.')
      return
    }

    dispatch(
      add({
        id,
        foto: image,
        nome: title,
        descricao: description,
        preco: parseFloat(price),
        porcao: portion
      } as MenuItem)
    )
    dispatch(open())
  }

  return (
    <>
      <Card onClick={handleOpenModal}>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <FoodDescription>{getDescription(description)}</FoodDescription>
        <ButtonContainer>
          <Button
            type="button"
            title="Clique aqui para adicionar o pedido ao carrinho"
            onClick={handleAddToCart}
          >
            Adicionar ao carrinho
          </Button>
        </ButtonContainer>
      </Card>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={{
          image,
          name: title,
          description,
          price: formatPrice(price),
          portion,
          id
        }}
        onAddToCart={() => {
          const itemExists = cartItems.some((item) => item.id === id)
          if (!itemExists) {
            dispatch(
              add({
                id,
                foto: image,
                nome: title,
                descricao: description,
                preco: parseFloat(price),
                porcao: portion
              } as MenuItem)
            )
            dispatch(open())
          }
          handleCloseModal()
        }}
      />
    </>
  )
}

export default Product
