import { HeaderBar, Links, LinkItem, LinkCart, LogoContainer } from './styles'

import logo from '../../assets/images/logo.png'
import backgroundHeaderImg from '../../assets/images/fundo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${backgroundHeaderImg})` }}>
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Restaurantes</a>
        </LinkItem>
      </Links>
    </nav>
    <LogoContainer>
      <img src={logo} alt="efood" />
    </LogoContainer>
    <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
  </HeaderBar>
)

export default Header
