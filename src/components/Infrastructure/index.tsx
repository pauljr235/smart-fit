import equipamentos from '../../assets/images/equipamentos_alto_padrao.webp'
import salas from '../../assets/images/salas-exclusivas.webp'
import musculacao from '../../assets/images/areas-musculacao.webp'
import { Area, Descricao, InfraContainer, Lista, TituloSecao } from './styles'

const Infrastructure = () => (
  <InfraContainer>
    <TituloSecao>
      Experiência <span>Smart Fit</span>{' '}
    </TituloSecao>
    <Lista>
      <li>
        <Area src={equipamentos} alt="" />
        <Descricao>Equipamentos de alto padrão</Descricao>
      </li>
      <li>
        <Area src={salas} alt="" />
        <Descricao>Salas exclusivas de aulas coletivas</Descricao>
      </li>
      <li>
        <Area src={musculacao} alt="" />
        <Descricao>Áreas de musculação e cárdio</Descricao>
      </li>
    </Lista>
  </InfraContainer>
)

export default Infrastructure
