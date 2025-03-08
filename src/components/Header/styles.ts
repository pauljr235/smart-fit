import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 10px;
  align-items: center;
  justify-content: space-between;

  // Responsividade para tablets e dispositivos móveis
  @media (max-width: 768px) {
    padding: 15px 5px;
    flex-direction: column;
    align-items: flex-start;
  }

  // Responsividade para dispositivos móveis (iPhone)
  @media (max-width: 480px) {
    padding: 10px 5px;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Logo = styled.div`
  img {
    height: 90px;

    // Responsividade para dispositivos móveis
    @media (max-width: 768px) {
      height: 70px;
    }

    @media (max-width: 480px) {
      height: 50px;
    }
  }
`

export const LinksD = styled.ul`
  display: flex;
  list-style: none;

  // Responsividade para tablets e dispositivos móveis
  @media (max-width: 768px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  // Responsividade para dispositivos móveis (iPhone)
  @media (max-width: 480px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`

export const LinkD = styled.a`
  margin-right: 32px;
  text-decoration: none;
  font-weight: bold;
  color: ${cores.black};
  padding: 8px 16px;

  // Responsividade para tablets e dispositivos móveis
  @media (max-width: 768px) {
    margin-right: 0;
    font-size: 16px;
  }

  // Responsividade para dispositivos móveis (iPhone)
  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 8px;
    padding: 5px 10px;
  }
`
