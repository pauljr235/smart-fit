import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 20px 60px 10px;
  align-items: center;
  box-shadow: 4px 10px rgba(0, 0, 0, 0.2);
`

export const Logo = styled.div`
  img {
    height: 70px;
  }
`

export const LinksD = styled.ul`
  display: flex;
  list-style: none;
`
export const LinkD = styled.a`
  margin-right: 16px;
  text-decoration: none;
  font-weight: bold;
  color: ${cores.black};
`
