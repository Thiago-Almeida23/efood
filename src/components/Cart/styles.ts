import styled from 'styled-components'
import { colors } from '../../styles'
import remove from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 1;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 2;
  padding: 32px 8px 0 8px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`

export const TotalValue = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-left: auto;
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  position: relative;
  background-color: ${colors.lightSalmon};
  margin-bottom: 8px;

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
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
  }
`
