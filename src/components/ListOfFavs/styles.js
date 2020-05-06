import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

// Estilamos el link
export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  /*Con este truco el utilizará el margen para que vaya quedando bien cuadrado en el grid */
  width: 31.33%;
  /*Usamos el selector para asegurarnos que todos tienen la misma relación de aspecto*/
  &:after{
    /* */
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
// Necesitaremos un Grid
export const Grid = styled.div`
  padding-top: 32px;
`
export const Image = styled.img`
/* Tendrá esto para que cuadre bien y no se estire la imagen */
  object-fit:cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
