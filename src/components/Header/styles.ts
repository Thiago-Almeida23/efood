import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  padding-bottom: 83px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-position: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

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
`
