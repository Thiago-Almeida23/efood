import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 472px;
`

export const FoodImage = styled.img`
  width: 472px;
  height: 217px;
  max-width: 100%;
  object-fit: cover;
  display: block;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const TitleRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const Title = styled.h2`
  color: ${colors.salmon};
  font-size: 24px;
  font-weight: bold;
  flex: 1;
  margin-top: 8px;
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.salmon};
  font-weight: bold;
  margin-right: 8px;
`

export const StarImage = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 4px;
`

export const FoodDescription = styled.p`
  color: ${colors.salmon};
  margin-top: 16px;
  flex-grow: 1;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;

  a {
    padding: 4px 6px;
    margin-bottom: 8px;
    background-color: ${colors.salmon};
    color: ${colors.lightSalmon};
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    border: none;
    display: inline-block;
    width: auto;
  }
`
