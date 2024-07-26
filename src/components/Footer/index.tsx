import {
  FooterContainer,
  LogoContainer,
  SocialMedia,
  SocialIcon,
  FooterText
} from './styles'

import backgroundFooterImg from '../../assets/images/fundo2.png'
import logo from '../../assets/images/logo.png'
import instagramIcon from '../../assets/images/instagram.png'
import facebookIcon from '../../assets/images/facebook.png'
import twitterIcon from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer style={{ backgroundImage: `url(${backgroundFooterImg})` }}>
    <LogoContainer>
      <img src={logo} alt="efood" />
    </LogoContainer>
    <SocialMedia>
      <SocialIcon src={instagramIcon} alt="Instagram" />
      <SocialIcon src={facebookIcon} alt="Facebook" />
      <SocialIcon src={twitterIcon} alt="Twitter" />
    </SocialMedia>
    <FooterText>
      A eFood é uma plataforma para divulgação de estabelecimentos. A
      responsabilidade pela entrega e qualidade
      <span>dos produtos é toda do estabelecimento contratado.</span>
    </FooterText>
  </FooterContainer>
)

export default Footer
