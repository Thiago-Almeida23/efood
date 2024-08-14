import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import { Card, FoodDescription, Title, ButtonContainer, Image } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const getDescription = (description: string) => {
  if (description.length > 130) {
    return description.slice(0, 127) + '...'
  }
  return description
}

const Product = ({ image, title, description }: Props) => {
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
          price: 'R$ 60,90'
        }}
      />
    </>
  )
}

export default Product
