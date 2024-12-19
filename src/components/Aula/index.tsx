import relogio from '../../assets/images/relogio.png'
import bateria from '../../assets/images/bateria.png'

import {
  CardDescricao,
  CardTitulo,
  Card,
  Icone,
  CardIcones,
  IconeContainer,
  CardBotao,
  Img
} from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Aula = ({ image, title, description }: Props) => (
  <Card>
    <Img src={image} alt={title} />
    <CardTitulo>{title}</CardTitulo>
    <CardIcones>
      <IconeContainer>
        <Icone src={relogio} alt="Ícone relógio" />
        <h5>Duração</h5>
        <p>45/60</p>
      </IconeContainer>
      <IconeContainer>
        <Icone src={bateria} alt="Ícone bateria" />
        <h5>Intensidade</h5>
        <p>Alta</p>
      </IconeContainer>
    </CardIcones>
    <CardDescricao>{description}</CardDescricao>
    <CardBotao>Saiba Mais</CardBotao>
  </Card>
)

export default Aula
