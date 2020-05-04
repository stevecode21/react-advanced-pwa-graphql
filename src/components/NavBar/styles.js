import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
// Importamos la animación de FadeIn
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom:0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  font-size: 30px;
  /* Estilamos el aria current con un selector, de esta forma le decimos que el selector padre que seria el propio link va a tener un atributo aria-current*/
  &[aria-current]{
    /* Le añadimos un color negro */
    color: #000;
    /* Añadiremos un pseudoelemento after, el cual se refiere a un pseudoelemento que está justo despues del elemento */
    &:after{
      /* Añadiremos el efecto fadeIn aquí, para que solo ocurra en el punto */
      ${fadeIn({ time: '0.5s' })}
      /*El content será un punto, asi le indicaremos al usuario en donde está*/
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 44px;
      /* Le añadimos un line-height para que quede con bastante margen*/
      line-height: 20px;
    }
  }
`
