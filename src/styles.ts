import { createGlobalStyle } from 'styled-components'

export const cores = {
  black: '#000',
  yellow: '#ffb612'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

}

    .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
