import styled from 'styled-components'
import { cores } from '../../styles'

export const AppContainer = styled.div`
  display: flex;
  padding: 50px 0;
  background-color: ${cores.pink};
  flex-wrap: wrap; /* Permite o conteúdo se ajustar em telas menores */
  justify-content: space-between; /* Espaçamento entre os itens */
  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  // Responsividade para dispositivos móveis
  @media (max-width: 480px) {
    padding: 20px 10px;
    flex-direction: column; /* Coloca os itens na vertical */
    align-items: center;
  }
`
export const AppInfo = styled.div`
  h1 {
    padding: 16px 0;
  }

  ul {
    padding-left: 30px;
  }


  padding-left: 20px;
}
}

// Responsividade para dispositivos móveis
@media (max-width: 480px) {
h1 {
  font-size: 20px;
}



ul {
  padding-left: 15px;
}
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

  @media (max-width: 768px) {
    max-width: 100%;
    height: 250px; /* Ajusta a altura da imagem em tablets */
    margin-top: 200px; /* Reduz o espaçamento */
  }

  // Responsividade para dispositivos móveis
  @media (max-width: 480px) {
    img {
      width: 200px;
      height: 200px;
    }
    max-width: 100%;
    height: 200px; /* Ajusta a altura da imagem em dispositivos móveis */
    margin-top: 30px; /* Reduz o espaçamento */
  }
`
