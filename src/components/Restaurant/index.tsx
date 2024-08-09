import Button from '../Button'
import Tag from '../Tag'
import star from '../../assets/images/estrela.png'

import {
  Card,
  Content,
  FoodImage,
  TagsContainer,
  TitleRatingContainer,
  Title,
  Rating,
  StarImage,
  FoodDescription,
  ButtonContainer
} from './styles'

type Props = {
  image: string
  title: string
  description: string
  cuisine: string
  isFeatured: boolean
  rating: number
}

const Restaurant = ({
  image,
  title,
  description,
  cuisine,
  isFeatured,
  rating
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 250) {
      return description.slice(0, 247) + '...'
    }
    return description
  }

  return (
    <Card>
      <div style={{ position: 'relative' }}>
        <FoodImage src={image} alt={title} />
        <TagsContainer>
          {isFeatured && <Tag>Destaque da semana</Tag>}
          <Tag>{cuisine}</Tag>
        </TagsContainer>
      </div>
      <Content>
        <TitleRatingContainer>
          <Title>{title}</Title>
          <Rating>
            {rating} <StarImage src={star} alt="star" />{' '}
          </Rating>
        </TitleRatingContainer>
        <FoodDescription>{getDescription(description)}</FoodDescription>
        <ButtonContainer>
          <Button
            type="link"
            title="Clique aqui para ver mais detalhes"
            to="/restaurant"
          >
            Saiba mais
          </Button>
        </ButtonContainer>
      </Content>
    </Card>
  )
}

export default Restaurant
