import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 850px;
  margin: 0 auto;
  padding-bottom: 32px;
`
export const TituloSecao = styled.h2`
  text-align: center;
  font-size: 40px;
  margin-top: 100px;
  padding-bottom: 100px;
  span {
    color: ${cores.yellow};
  }
`
