import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 850px;
  margin: 0 auto;
  padding-bottom: 32px;
  justify-content: center;
`
export const TituloSecao = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-top: 50px;
  padding-bottom: 50px;
  span {
    color: ${cores.yellow};
  }
`
