import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import logoF from '../../assets/images/logo-white.svg'
import { Descricao, FooterContainer } from './styles'

const Footer = () => (
  <FooterContainer>
    <div>
      <img src={logoF} alt="" />
    </div>
    <Descricao>
      <h4>Siga a Smart Fit</h4>
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
    </Descricao>
  </FooterContainer>
)

export default Footer
