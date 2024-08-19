import styled from 'styled-components'
import { colors } from '../../styles'
import remove from '../../assets/images/lixeira.png'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const TotalValue = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-top: 40px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  position: relative;
  background-color: ${colors.lightSalmon};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-left: 8px;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    color: ${colors.salmon};
    margin-top: 8px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${colors.salmon};
    font-size: 14px;
  }

  button {
    background-image: url(${remove});
    background-color: transparent;
    position: absolute;
    top: 76px;
    right: 0;
    margin-botton: 8px;
    margin-right: 8px;
    width: 16px;
    height: 16px;
    border: none;
  }
`
