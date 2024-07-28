import styled from 'styled-components'
import { colors } from '../../styles'

export const HomeHeaderContainer = styled.header`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  img {
    max-width: 200px;
    margin-bottom: 40px;
  }
`

export const HeaderTitle = styled.p`
  color: ${colors.salmon};
  font-weight: bold;
  font-size: 36px;
  margin-top: 138px;
  margin-bottom: 40px;
`
