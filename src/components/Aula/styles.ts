import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  font-size: 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-right: 32px;
  text-align: center;
  border-radius: 16px;
`
export const Img = styled.img`
  border-radius: 8px;
  width: 310px;
`

export const CardTitulo = styled.h3`
  padding: 6px 16px;
  background-color: ${cores.yellow};
  margin-bottom: 16px;
`
export const CardIcones = styled.div`
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 16px;
  margin-top: 16px;
`

export const Icone = styled.img`
  height: 30px;
  width: 30px;
`
export const IconeContainer = styled.div`
  margin-bottom: 16px;
`

export const CardDescricao = styled.p`
  text-align: start;
  padding-top: 16px;
  padding-bottom: 32px;
  padding-left: 16px;
`
export const CardBotao = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px;
  background-color: white;
  font-weight: bold;
  margin-bottom: 8px;
`
