import styled from 'styled-components'
import { cores } from '../../styles'

export const AppContainer = styled.div`
  display: flex;
  padding: 50px 0;
  background-color: ${cores.pink};
`
export const AppInfo = styled.div`
  h1 {
    padding: 16px 0;
  }

  ul {
    padding-left: 30px;
  }
`
export const AppFoto = styled.div`
  margin-top: 100px;
  width: 100%;
  max-width: 630px;
  height: 300px;
  align-self: end;
  display: flex;
  align-items: end;
  justify-content: center;
  background-color: #ffb612;
  border-radius: 10px;

  img {
    height: 450px;
  }
`
