import { cores } from '../../styles'
import Plano from '../Plano'
import { ListContainer, Title, TitleDescription } from './styles'

const PlanosList = () => (
  <>
    <Title>
      Venha treinar na{' '}
      <span style={{ color: cores.orange }}>
        maior rede de academias da América Latina
      </span>{' '}
    </Title>
    <TitleDescription>
      Os melhores equipamentos e infraestrutura com mensalidades acessíveis.
    </TitleDescription>
    <ListContainer className="container">
      <Plano
        ativo={true}
        destaque={true}
        title="Plano Black"
        description="Treine em qualquer academia da Smart Fit, seja no Brasil ou na América Latina. São +1.700 unidades em 15 países!"
        price="R$ 0,00*"
        conditions="no 1º mês, depois R$ 149,90/mês"
        prazo="12 meses de fidelidade"
        planos={[
          'Acesso Ilimitado a +1700 academias',
          'Leve 5 amigos por mês para treinar com você',
          'Cadeira de massagem',
          'Smart Fit GO (treinos online) no app',
          'Área de musculação e aeróbicos',
          'Smart Fit App'
        ]}
      />
      <Plano
        ativo={false}
        title="Plano Fit"
        description="Treine na sua unidade favorita da Smart Fit e aproveite uma infraestrutura completa."
        price="R$ 99,90/mês"
        conditions="sem taxa de adesão"
        prazo="Plano mensal, sem fidelidade"
        planos={[
          'Smart Fit GO (treinos online) no app',
          'Área de musculação e aeróbicos',
          'Smart Fit App'
        ]}
      />
      <Plano
        ativo={false}
        title="Plano Básico"
        description="Acesso a equipamentos modernos e acompanhamento profissional na academia."
        price="R$ 79,90/mês"
        conditions="taxa única de adesão: R$ 99,00"
        prazo="Plano anual"
        planos={[
          'Smart Fit GO (treinos online) no app',
          'Área de musculação e aeróbicos',
          'Smart Fit App'
        ]}
      />
    </ListContainer>
  </>
)

export default PlanosList
