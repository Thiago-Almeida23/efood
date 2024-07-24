import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  a {
    color: ${colors.salmon};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Links = styled.ul`
  display: flex;
`

export const LinkItem = styled.li`
  padding-left: 40px;
  margin-right: 20px;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-left: 40px;

  img {
    max-width: 100px;
  }
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.salmon};
  font-weight: bold;
  margin-right: 40px;
`
