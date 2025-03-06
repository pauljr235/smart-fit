import {
  Container,
  Card,
  Badge,
  Title,
  Description,
  Price,
  Button,
  BenefitsList,
  BenefitItem
} from './styles'

export type Props = {
  ativo?: boolean
  destaque?: boolean
  plans?: boolean
  title: string
  description: string
  price: string
  conditions: string
  prazo: string
  planos: string[]
}

const Plano = ({
  ativo = false,
  destaque = false,
  title,
  description,
  price,
  conditions,
  prazo,
  planos
}: Props) => {
  return (
    <Container>
      <Card
        ativo={ativo}
        title={title}
        description={description}
        price={price}
        conditions={conditions}
        prazo={prazo}
        planos={planos}
      >
        {destaque && (
          <Badge>
            O mais <b>vantajoso</b>
          </Badge>
        )}
        <Title>{title}</Title>
        <Description>{description}</Description>

        <Price>
          <span>A PARTIR DE</span>
          <h3>{price}</h3>
          <p>{conditions}</p>
          <p>{prazo}</p>
        </Price>
        <Button>Contratar agora</Button>
        <BenefitsList>
          {planos.map((item, index) => (
            <BenefitItem key={index}>
              <i className="bi bi-check2-circle"></i>
              {item}
            </BenefitItem>
          ))}
        </BenefitsList>
      </Card>
    </Container>
  )
}

export default Plano
