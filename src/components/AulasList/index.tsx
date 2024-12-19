import Aula from '../Aula'
import { Lista, TituloSecao } from './styles'

import fitDance from '../../assets/images/fitdance-cover.webp'
import bodyCombat from '../../assets/images/body-combat-cover.webp'

const AulasList = () => (
  <div>
    <TituloSecao>
      Aulas e treinos <span>exclusivos</span>{' '}
    </TituloSecao>
    <Lista className="container">
      <Aula
        image={fitDance}
        title="Fitdance"
        description="
      Pra você manjar de todos os passinhos, as aulas de dança da Smart Fit são ministradas por professores licenciados pela FitDance.
    "
      />
      <Aula
        image={fitDance}
        title="Smart Cross"
        description=" Emagrecimento com ganho de condicionamento físico em apenas 30 minutos? Esse é o Smart Cross, nosso treino de funcional coletivo de alta intensidade."
      />
      <Aula
        image={bodyCombat}
        title="Body Combat"
        description="Karatê, Jiu-jitsu, Capoeira, Kung Fu e Taekwondo são algumas das inspirações para a aula de BodyCombat. Esse treino ainda trabalha todo o corpo."
      />
    </Lista>
  </div>
)

export default AulasList
