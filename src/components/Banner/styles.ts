import styled from 'styled-components'

export const HeroImg = styled.div`
  text-align: center;

  img {
    max-width: 95%;
    height: 100vh;
    border-radius: 16px;

    // Responsividade para telas menores que 768px (tablets)
    @media (max-width: 768px) {
      max-width: 100%;
      height: 70vh;
      padding: 16px;
      border-radius: 8px;
    }

    // Responsividade para telas menores que 480px (dispositivos móveis)
    @media (max-width: 480px) {
      max-width: 100%;
      height: 60vh;
    }
  }
`
