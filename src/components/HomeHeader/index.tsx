import { HomeHeaderContainer, HeaderTitle } from './styles'

import logo from '../../assets/images/logo.png'
import backgroundHeaderImg from '../../assets/images/fundo.png'

const HomeHeader = () => (
  <HomeHeaderContainer
    style={{ backgroundImage: `url(${backgroundHeaderImg})` }}
  >
    <div className="container">
      <img src={logo} alt="efood" />
      <HeaderTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderTitle>
    </div>
  </HomeHeaderContainer>
)

export default HomeHeader
