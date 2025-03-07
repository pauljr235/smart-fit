import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 🔥 Mantém 3 colunas */
  padding-bottom: 32px;
  padding-right: 170px;
  list-style: none;
  gap: 50px;
  justify-content: center; /* 🔥 Centraliza os itens horizontalmente */
  align-items: center; /* 🔥 Centraliza os itens verticalmente */
  max-width: 1200px; /* 🔥 Define uma largura máxima para o grid */
  margin: 0 auto; /* 🔥 Centraliza o grid no container */
`

export const TituloSecao = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-top: 50px;
  padding-bottom: 50px;
  span {
    color: ${cores.yellow};
  }
`

export const Area = styled.img`
  height: auto;
  width: 350px;
  border-radius: 8px;
`

export const Descricao = styled.p`
  padding: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 2px;
  text-align: center; /* 🔥 Centraliza o texto */
`

export const InfraContainer = styled.div`
  text-align: center;
  background-color: #fff;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 🔥 Centraliza o conteúdo verticalmente */
  justify-content: center; /* 🔥 Centraliza o conteúdo horizontalmente */
  width: 100%; /* 🔥 Garante que o container ocupe toda a largura */
`
