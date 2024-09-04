import styled from 'styled-components'
import { colors } from '../../styles'

export const ConfirmationContainer = styled.div`
  padding: 8px;
  background-color: ${colors.salmon};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  padding-left: 16px;
`

export const Text = styled.p`
  font-size: 14px;
  color: ${colors.lightSalmon};
  margin-bottom: 24px;
  text-align: left;
`
