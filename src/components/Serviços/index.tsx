import { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  BotaoFrente,
  BotaoVolta,
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
import cross from '../../assets/images/smart-cross-cover.webp'

const servicos = [
  {
    image: front,
    title: 'Acompanhamento Personalizado de Treino',
    subtitle: 'Treino on-line personalizado criado por um treinador.',
    price: 'R$ 39,90/mês'
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
    image: cross,
    title: 'Suplementos para acelerar seus resultados',
    subtitle:
      'Confira nossa linha de suplementos completa com até 20% de desconto para alunos',
    price: 'R$ 19,90/mês'
  }
]

const slideSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3, // Exibe 3 cards por vez em telas maiores
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  arrows: false, // Removemos as setas padrão para usar as customizadas
  centerMode: true, // Centraliza os cards no carrossel
  centerPadding: '0', // Remove o padding central

  // Responsividade para dispositivos móveis
  responsive: [
    {
      breakpoint: 768, // Tela abaixo de 768px
      settings: {
        slidesToShow: 2, // Exibe 2 cards por vez em tablets
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0'
      }
    },
    {
      breakpoint: 480, // Tela abaixo de 480px (dispositivos móveis)
      settings: {
        slidesToShow: 1, // Exibe 1 card por vez em dispositivos móveis
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0'
      }
    }
  ]
}

const Serviços = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [cardAtual, setCardAtual] = useState(0)

  const proximoCard = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
      setCardAtual((prev) => (prev + 1) % servicos.length)
    }
  }

  const cardAnterior = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
      setCardAtual((prev) => (prev - 1 + servicos.length) % servicos.length)
    }
  }

  return (
    <div className="container">
      <TituloSecao>
        Conheça nossos produtos e serviços adicionais para você
      </TituloSecao>
      <SubtituloSecao style={{ textAlign: 'center' }}>
        Só na Smart há serviços e produtos para potencializar seus resultados
      </SubtituloSecao>
      <Lista>
        <Slider ref={sliderRef} {...slideSettings}>
          {servicos.map((servico, index) => (
            <div key={index}>
              <Card>
                <CardImage src={servico.image} alt="" />
                <CardContent>
                  <h3>{servico.title}</h3>
                  <p>{servico.subtitle}</p>
                  <strong>{servico.price}</strong>
                  <Button type="button">Saiba mais</Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
        <BotaoVolta onClick={cardAnterior} type="button">
          <i className="bi bi-caret-left-fill"></i>
        </BotaoVolta>
        <BotaoFrente onClick={proximoCard} type="button">
          <i className="bi bi-caret-right-fill"></i>
        </BotaoFrente>
      </Lista>
    </div>
  )
}

export default Serviços
