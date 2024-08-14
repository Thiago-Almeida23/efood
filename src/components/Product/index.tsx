import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import { Card, FoodDescription, Title, ButtonContainer, Image } from './styles'

type Props = {
  image: string
  title: string
  description: string
  price: string
  portion: string // Incluindo portion aqui
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

const Product = ({ image, title, description, price, portion }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

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
          portion
        }}
      />
    </>
  )
}

export default Product
