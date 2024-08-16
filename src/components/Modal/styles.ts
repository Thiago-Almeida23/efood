import styled from 'styled-components'
import { colors } from '../../styles'
import closeImg from '../../assets/images/close.png'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
  background-color: ${colors.salmon};
  padding: 32px;
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1024px;
`

export const CloseButton = styled.button`
  background: url(${closeImg}) no-repeat center;
  background-size: 16px 16px;
  border: none;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  margin-right: 24px;
  object-fit: fit;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Name = styled.h2`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Description = styled.p`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
  white-space: pre-line; /* Mantém quebras de linha */
`

export const Portion = styled.p`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
`

export const Button = styled.button`
  background-color: ${colors.lightSalmon};
  color: ${colors.salmon};
  font-size: 16px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  width: auto;
`
