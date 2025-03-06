import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 32px;
  list-style: none;
  gap: 50px;
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

export const Area = styled.img`
  height: auto;
  width: 350px;
  border-radius: 8px;
`
export const Descricao = styled.p`
  padding: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 2px;
`

export const InfraContainer = styled.div`
  margin-right: 8px;
  text-align: center;
  background-color: #fff;
  padding-top: 32px;
  padding-bottom: 32px;
`
