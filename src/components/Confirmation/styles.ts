import styled from 'styled-components'
import { colors } from '../../styles'

export const ConfirmationContainer = styled.div`
  padding: 8px;
  background-color: ${colors.salmon};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhamento da coluna à esquerda */
  z-index: 2;
  /* Adicionando alguma margem à esquerda para o conteúdo */
  padding-left: 16px;
`

export const Text = styled.p`
  font-size: 14px;
  color: ${colors.lightSalmon};
  margin-bottom: 24px;
  text-align: left; /* Alinhamento do texto à esquerda */
  /* Remover a propriedade align-items pois não é aplicável a <p> */
`
