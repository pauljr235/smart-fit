import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  font-size: 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 16px;
  display: flex;
  flex-direction: column; /* Alinha os elementos verticalmente */
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  max-width: 320px; /* Limite para telas grandes */
  margin: 16px auto;

  @media (max-width: 768px) {
    max-width: 280px; /* Ajuste para tablets */
    font-size: 12px;
    padding: 12px;
  }

  @media (max-width: 480px) {
  display:
    max-width: 90%; /* Ocupa quase toda a largura no celular */
    font-size: 10px;
    padding: 10px;
  }
`

export const Img = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 200px;
  max-width: 310px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 250px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
    background-image: cover;
    height: 160px; /* Ajustando a altura para dispositivos móveis */
  }
`

export const CardTitulo = styled.h3`
  padding: 8px 16px;
  background-color: ${cores.yellow};
  margin-bottom: 16px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

export const CardIcones = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px; /* Espaçamento entre ícones */
  border-bottom: 1px solid #e2e8f0;
  margin: 16px 0;
  padding-bottom: 8px;

  @media (max-width: 480px) {
    justify-content: space-around; /* Ajusta a distribuição para dispositivos móveis */
  }
`

export const Icone = styled.img`
  height: 30px;
  width: 30px;

  @media (max-width: 768px) {
    height: 25px;
    width: 25px;
  }

  @media (max-width: 480px) {
    height: 20px;
    width: 20px;
  }
`

export const IconeContainer = styled.div`
  margin-bottom: 16px;

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`

export const CardDescricao = styled.p`
  text-align: justify;
  padding: 16px;
  flex-grow: 1; /* Ocupa espaço disponível */

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 8px;
  }
`

export const CardBotao = styled.button`
  border: none;
  cursor: pointer;
  padding: 12px;
  background-color: ${cores.yellow};
  font-weight: bold;
  border-radius: 8px;
  width: 100%;

  transition: 0.3s;
  margin-top: auto; /* Mantém o botão no final */

  &:hover {
    background-color: ${cores.orange};
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`
