// Importamos la librería de styled-componentes para usar el estilado
import styled from 'styled-components'

// Creamos el estilado del Anchor (<a>) en donde le diremos a la constante Anchor que se estile agregando los estilos CSS al a (styled.a)
// Exportamos dichos styled components
export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
// Ahora crearemos los estilos para la imagen, es importante siempre especificar el elemento que va a renderizar finalmente la semantica del html, en este caso img (styled.img)
// Exportamos dichos styled components
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  overflow: hidden;
  /*Este nos permitirá que la imagen siempre se quede en lo que ocupa en nuestro componente y se refleje bien, no se estire demasdiado*/
  object-fit: cover;
  width: 75px;
  height:75px;
`
