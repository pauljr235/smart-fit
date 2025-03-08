import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.div`
  padding-bottom: 80px;
  padding-top: 32px;
  position: relative;
  text-align: center;
  line-height: 24px;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 480px) {
    display: block; /* Garante que os cards ficam em uma coluna */
  }
`

export const TituloSecao = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-top: 50px;
  padding-bottom: 10px;
  color: #000;
`

export const SubtituloSecao = styled.p`
  padding-bottom: 16px;
`

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
  max-width: 320px;
  margin: 16px auto;

  @media (max-width: 480px) {
    max-width: 100%; /* Faz com que o card ocupe toda a largura da tela */
    margin-bottom: 16px; /* Adiciona um pouco de espaço entre os cards */
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-height: 150px;
  }
`

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    margin: 8px 0;
    flex-grow: 1;
  }

  strong {
    font-size: 16px;
    margin: 8px 0;
    text-align: center;
  }
`

export const Button = styled.button`
  background-color: ${cores.yellow};
  color: #000;
  border: none;
  padding: 12px;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  font-weight: bold;
  margin-top: auto;
  &:hover {
    background-color: ${cores.orange};
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`

export const BotaoFrente = styled.button`
  position: absolute;
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #ffb612;
  box-shadow: 0px 0px 16px 0px rgba(160, 160, 167, 0.25);
  cursor: pointer;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 45%;
    right: -5px;
    transform: translateY(-50%);
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    color: #ffb612;
    height: 48px;
    background: none;
    box-shadow: none;
    cursor: pointer;

    &:hover {
      transform: translateY(-50%) scale(1.5);
      transition: all 0.2s ease-in-out;
    }
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`

export const BotaoVolta = styled(BotaoFrente)`
  left: -50px;
  right: auto;

  @media (max-width: 768px) {
    position: absolute;
    top: 45%;
    left: -17px;
    transform: translateY(-50%);
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    color: #ffb612;
    height: 48px;
    background: none;
    box-shadow: none;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`
