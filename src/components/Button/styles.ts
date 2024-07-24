import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.lightSalmon};
  color: ${colors.salmon};
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0; // Remover o padding lateral
  border: none;
  white-space: nowrap; // Evitar quebra de linha
  text-align: center;
  width: 100%;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.lightSalmon};
  color: ${colors.salmon};
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
  width: 100%;
`
