// Importamos el método css de styled components
import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Loading = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const List = styled.ul`
display: flex;
overflow: scroll;
width: 100%;
&::-webkit-scrollbar {
    display: none;
}
/* En lugar de utilizar el classname lo que vamos a hacer es utilizar la prop fixed, por lo tanto usaremos un arrow function que va a recobir las props y podremos evaluar si tenemos una prop llamada fixed, por lo tanto si esto así, vamos a ejecutar el método CSS (lo importamos) retornando el estilado para ese fixed, que solo se mostrará cuando tengamos la prop fixed */
${props => props.fixed && css`
  ${fadeIn('0.01s', 'ease-in')}
  background: #fff;
  border-radius: 60px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  left: 0;
  margin: 0 auto;
  max-width: 400px;
  position: fixed;
  right: 0;
  top: -20px;
  transform: scale(.5);
  z-index: 1;
`}
`
export const Item = styled.li`
  padding: 0 8px;
`
