import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 10px;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  img {
    height: 90px;
  }
`

export const LinksD = styled.ul`
  display: flex;
  list-style: none;
`
export const LinkD = styled.a`
  margin-right: 32px;
  text-decoration: none;
  font-weight: bold;
  color: ${cores.black};
  padding: 8px 16px;
`
