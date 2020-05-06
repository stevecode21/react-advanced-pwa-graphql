import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  /**Creamos un selector para que cuando el Button tena la propiedad disabled activa su opacidad sea mucho más pequeña*/
  &[disabled] {
    opacity: .3
  }
`
