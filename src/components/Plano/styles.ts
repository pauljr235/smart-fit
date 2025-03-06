import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px 0;
`

export const Card = styled.div<Props>`
  background-color: ${(props) => (props.ativo ? cores.grey : '#fff')};
  color: ${(props) => (props.ativo ? '#fff' : '#000')};
  padding: 24px;
  border-radius: 16px;
  max-width: 350px;
  height: 652px;
  text-align: left;
  line-height: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`

export const Badge = styled.div`
  background-color: ${cores.orange};
  color: black;
  font-size: 16px;
  padding: 0 12px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 12px;
  position: absolute;
  width: 171px;
  top: -10px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding: 16px 0;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`

export const Price = styled.div`
  margin: 16px 0;

  span {
    font-size: 14px;
    color:#fff
    padding: 8px 0;
  }
  h3 {
    font-size: 28px;
    font-weight: bold;
    padding: 8px 0;
  }
`

export const Button = styled.button`
  width: 100%;
  background-color: ${cores.orange};
  color: black;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 200px;
  cursor: pointer;
  margin-top: 12px;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background-color: #e6b800;
  }
`
export const BenefitsList = styled.ul`
  margin-top: 16px;
  list-style: none;
  padding-top: 16px;
`

export const BenefitItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  text-align: left;
  i {
    padding-right: 4px;
    color: ${cores.green};
    font-weight: bold;
  }
`
