import { useEffect } from 'react'
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  Image,
  Name,
  Description,
  Button,
  Content,
  Portion
} from './styles'

type ItemProps = {
  image: string
  name: string
  description: string
  price: string
  portion: string
  id: number
}

type Props = {
  isOpen: boolean
  onClose: () => void
  item: ItemProps
  onAddToCart: () => void
}

const ProductModal: React.FC<Props> = ({
  isOpen,
  onClose,
  item,
  onAddToCart
}) => {
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
        <Image src={item.image} alt={item.name} />
        <Content>
          <Name>{item.name}</Name>
          <Description>
            {item.description}
            <Portion>Serve: {item.portion}</Portion>
          </Description>
          <Button onClick={onAddToCart}>
            Adicionar ao carrinho - {item.price}
          </Button>
        </Content>
      </ModalContent>
    </ModalContainer>
  )
}

export default ProductModal
