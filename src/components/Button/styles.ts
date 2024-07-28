import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.lightSalmon};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 84px;
  border: none;
  width: 100%;
  white-space: nowrap;
  text-align: center;
  display: block;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.salmon};
  color: ${colors.lightSalmon};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
  display: inline-block;
  width: auto;
`
