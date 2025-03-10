import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 32px;
  padding-right: 170px;
  list-style: none;
  gap: 50px;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  // Responsividade para telas menores que 768px (tablets)
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding-right: 50px;
    padding-left: 50px;
    img {
      width: 300px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-right: 50px;
    padding-left: 50px;
    img {
      width: 200px;
      text-align: center;
    }
  }

  // Responsividade para telas menores que 480px (dispositivos móveis)
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding-right: 50px;
    gap: 20px;
    text-align: center;
  }
`

export const TituloSecao = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-top: 50px;
  padding-bottom: 50px;

  span {
    color: ${cores.yellow};
  }

  // Responsividade para telas menores que 768px (tablets)
  @media (max-width: 768px) {
    font-size: 28px;
  }

  // Responsividade para telas menores que 480px (dispositivos móveis)
  @media (max-width: 480px) {
    font-size: 24px;
    padding-bottom: 30px;
  }
`

export const Area = styled.img`
  height: auto;
  width: 350px;
  border-radius: 8px;

  // Responsividade para telas menores que 768px (tablets)
  @media (max-width: 768px) {
    width: 250px;
  }

  // Responsividade para telas menores que 480px (dispositivos móveis)
  @media (max-width: 480px) {
    width: 200px;
  }
`

export const Descricao = styled.p`
  padding: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 2px;
  text-align: center; /* Centraliza o texto */

  // Responsividade para telas menores que 768px (tablets)
  @media (max-width: 768px) {
    font-size: 18px;
  }

  // Responsividade para telas menores que 480px (dispositivos móveis)
  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const InfraContainer = styled.div`
  text-align: center;
  background-color: #fff;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  // Responsividade para telas menores que 768px (tablets)
  @media (max-width: 768px) {
    padding-top: 32px;
    padding-bottom: 24px;
  }

  // Responsividade para telas menores que 480px (dispositivos móveis)
  @media (max-width: 480px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`
