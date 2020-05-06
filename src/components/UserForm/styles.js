import styled from 'styled-components'

export const ContainerForm = styled.div`
margin: 0 2rem 0 2rem;
`
export const Form = styled.form`
/*Esto será un padding vertical */
  padding: 16px 0;
  margin: 0 2rem 0 2rem;
`

export const Input = styled.input` 
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
  padding: 10px 4px;

  display: block;
  width: 100%;
    /**Creamos un selector para que cuando los Input tena la propiedad disabled activa su opacidad sea mucho más pequeña*/
    &[disabled] {
    opacity: .3
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
color: red;
font-size: 14px;
`
