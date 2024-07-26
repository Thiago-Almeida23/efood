import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 24px;
`

export const LogoContainer = styled.div`
  margin-bottom: 33px;

  img {
    max-width: 100px;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  padding-left: 10px;
`

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`

export const FooterText = styled.p`
  font-size: 10px;
  color: ${colors.salmon};
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;

  & > span {
    display: block;
    margin: 0 auto;
    max-width: fit-content;
  }
`
