import React, { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal' // Certifique-se de que o caminho está correto
import { Card, FoodDescription, Title, ButtonContainer } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <Card onClick={handleOpenModal}>
        <img src={image} title={title} />
        <Title>{title}</Title>
        <FoodDescription>{description}</FoodDescription>
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
