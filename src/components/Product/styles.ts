import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmon};
  padding: 10px;
  margin-bottom: 32px;
  position: relative;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  color: ${colors.lightSalmon};
  flex: 1;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;

  button {
    width: 100%;
    background-color: ${colors.lightSalmon};
    color: ${colors.salmon};
    font-size: 14px;
    font-weight: bold;
    padding: 4px 6px;
    border: none;
    text-align: center;
  }
`
