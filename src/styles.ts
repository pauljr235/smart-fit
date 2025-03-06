import { createGlobalStyle } from 'styled-components'

export const cores = {
  black: '#000',
  yellow: '#ffb612',
  grey: 'rgb(59, 59, 64)',
  orange: 'rgb(255, 182, 18)',
  green: '#25a769;'
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
