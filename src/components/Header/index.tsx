import logo from '../../assets/images/smart-logo.svg'
import { HeaderContainer, LinkD, LinksD, Logo } from './styles'

const Header = () => (
  <HeaderContainer>
    <Logo>
      <img src={logo} alt="Logo Smart-fit" />
    </Logo>
    <LinksD>
      <li>
        <LinkD href="#">Atividades</LinkD>
      </li>
      <li>
        <LinkD href="#">Sobre Nós</LinkD>
      </li>
      <li>
        <LinkD href="#">Dúvidas</LinkD>
      </li>
      <li>
        <LinkD href="#">Contatos</LinkD>
      </li>
    </LinksD>
  </HeaderContainer>
)

export default Header
