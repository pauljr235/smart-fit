import Aula from '../Aula'
import {
  Button,
  Card,
  CardContent,
  CardImage,
  Lista,
  TituloSecao
} from './styles'

import front from '../../assets/images/front.jpg'
import front2 from '../../assets/images/front2.jpeg'
import bice from '../../assets/images/bicicletas.jpeg'

const servicos = [
  {
    image: front,
    title: 'Acompanhamento Personalizado de Treino',
    subtitle: 'Treino on-line personalizado criado por um treinador.',
    price: 'R$ 39,90/mês',
    condition: '12 meses de permanência'
  },
  {
    image: front2,
    title: 'Bebidas esportivas e energéticas em sabores',
    subtitle:
      'Bebidas esportivas para te ajudar antes, durante e depois do treino!',
    price: 'R$ 19,90/mês'
  },
  {
    image: bice,
    title: 'Veja sua evolução corporal com nossa Bioimpedância',
    subtitle:
      'Acompanhe a evolução do seu corpo com os exames de bioimpedância',
    price: 'R$ 19,90/mês'
  },
  {
    image: front,
    title: 'Suplementos para acelerar seus resultados',
    subtitle:
      'Confira nossa linha de suplementos completa com até 20% de desconto para alunos',
    price: 'R$ 19,90/mês'
  }
]

const Serviços = () => (
  <div>
    <TituloSecao>
      Conheça nossos produtos e serviços adicionais para você
    </TituloSecao>
    <p style={{ textAlign: 'center' }}>
      Só na Smart há serviços e produtos para potencializar seus resultados
    </p>
    <Lista className="container">
      {servicos.map((servico, index) => (
        <Card key={index}>
          <CardImage src={servico.image} alt="" />
          <CardContent>
            <h3>{servico.title}</h3>
            <p>{servico.subtitle}</p>
            <strong>{servico.price}</strong>
            <small>{servico.condition}</small>
            <Button type="button">Saiba mais</Button>
          </CardContent>
        </Card>
      ))}
    </Lista>
  </div>
)

export default Serviços
