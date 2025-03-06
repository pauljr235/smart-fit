import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 0;
`

export const TituloSecao = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-top: 50px;
  padding-bottom: 10px;
  color: #000;
`

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    margin: 8px 0;
  }

  strong {
    display: block;
    font-size: 16px;
    margin-top: 8px;
  }

  small {
    color: #777;
    display: block;
    margin-bottom: 12px;
  }

  button {
    margin-top: auto; /* Mantém o botão sempre alinhado no fim do card */
  }
`

export const Button = styled.button`
  background-color: ${cores.yellow};
  color: #000;
  border: none;
  padding: 10px 16px;
  border-radius: 200px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  font-weight: bold;

  &:hover {
    background-color: ${cores.orange};
  }
`
