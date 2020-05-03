// Importaremos keyframes para darle animaciones
// La utilidad css me va a permitir crear una función para reutilizar mis animaciones
import { css, keyframes } from 'styled-components'

// Exta constante nos va a permitir crear los keyframes de nuestra animación
const fadeInKeyFrames = keyframes`
from{
  filter: blur(5px);
  opacity: 0;
}
to {
    filter: blur(0);
    opacity: 1;
}
`
// Crearemos un método para la reutilización de mi animación, este va a recibir el tiempo de la animación que por defecto será de 1 segundo, como este método lo queremos usar en diferentes styled-components lo exportaremos de forma nombrada
// Es posible que no le pasemos ningun parámetro y queremos asegurarnos de que funcione vamos a poner que el valor por defecto de todos los parámetros es un objeto vacio
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
// Mi arrow function lo que va a devolver es css el cual es el que es la animación que me permitirá usar mi keyframe
  css`
    /* Aqui vamos añadir la animación que estoy creando en el keyframe pasandole y usaremos el tiempo que le estoy pasando como paránetro, asi como el tipo para que la animación fadeIn la usemos donde queramos */
    animation: ${time} ${fadeInKeyFrames} ${type};
  `
