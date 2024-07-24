import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmon};
  padding: 10px;
  margin-bottom: 32px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${colors.lightSalmon};
`

export const FoodDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${colors.lightSalmon};
`
