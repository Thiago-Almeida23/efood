import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { open } from '../../reducers/cartSlice'
import { HeaderBar, Links, LinkItem, LinkCart, LogoContainer } from './styles'
import logo from '../../assets/images/logo.png'
import backgroundHeaderImg from '../../assets/images/fundo.png'

const Header = () => {
  const totalItems = useSelector((state: RootState) => state.cart.items.length)
  const dispatch = useDispatch()

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(open())
  }

  return (
    <HeaderBar style={{ backgroundImage: `url(${backgroundHeaderImg})` }}>
      <div className="container">
        <nav>
          <Links>
            <LinkItem>
              <Link to="/">Restaurantes</Link>
            </LinkItem>
          </Links>
        </nav>
        <LogoContainer>
          <img src={logo} alt="efood" />
        </LogoContainer>
        <LinkCart href="#" onClick={handleCartClick}>
          {totalItems} produto(s) no carrinho
        </LinkCart>
      </div>
    </HeaderBar>
  )
}

export default Header
