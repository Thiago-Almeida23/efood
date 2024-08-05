import React, { useEffect } from 'react'
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  Image,
  Name,
  Description,
  Button,
  Content
} from './styles'
import pizzaImg from '../../assets/images/pizza.png'

type ItemProps = {
  image: string
  name: string
  description: string
  price: string
}

type Props = {
  isOpen: boolean
  onClose: () => void
  item: ItemProps
}

const ProductModal: React.FC<Props> = ({ isOpen, onClose, item }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose} />
        <Image src={pizzaImg} alt={item.name} />
        <Content>
          <Name>{item.name}</Name>
          <Description>{item.description}</Description>
          <Button>Adicionar ao carrinho - {item.price}</Button>
        </Content>
      </ModalContent>
    </ModalContainer>
  )
}

export default ProductModal
