import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  Button,
  Card,
  CardContent,
  CardImage,
  Lista,
  SubtituloSecao,
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

const slideSettings = {
  dots: true, // Adiciona os indicadores de página
  infinite: true, //Faz o carrossel ser infinito
  speed: 400, // Velocidade da transição
  slidesToShow: 3, // Quantos slides aparecem no mobile
  slidesToScroll: 1,
  autoplay: true, // Carrossel automático
  autoplaySpeed: 3000, // Tempo entre as transições
  arrows: true // Cria Botões de navegação
}

const Serviços = () => (
  <div className="container">
    <TituloSecao>
      Conheça nossos produtos e serviços adicionais para você
    </TituloSecao>
    <SubtituloSecao style={{ textAlign: 'center' }}>
      Só na Smart há serviços e produtos para potencializar seus resultados
    </SubtituloSecao>
    <Lista>
      <Slider {...slideSettings}>
        {servicos.map((servico, index) => (
          <div key={index}>
            {' '}
            {/* Espaçamento lateral */}
            <Card style={{ width: '80%' }}>
              {' '}
              {/* Centraliza e ajusta largura */}
              <CardImage src={servico.image} alt="" />
              <CardContent>
                <h3>{servico.title}</h3>
                <p>{servico.subtitle}</p>
                <strong>{servico.price}</strong>
                {servico.condition && <small>{servico.condition}</small>}
                <Button type="button">Saiba mais</Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Lista>
  </div>
)

export default Serviços
