// Importaremos la función de styled-component que me permite usar estilos globales
import { createGlobalStyle } from 'styled-components'

// Exportamos el estilo nombrado llamando al método para crear los estilos globales y le pasamos como template string el css que queremos que sea global y aplicamos los estilos
export const GlobalStyle = createGlobalStyle`
  html {
    /* Utilizará el padding para calcular el ancho de los elementos*/
    box-sizing: border-box;
    /* Tendra un font family que va a usar la fuente por defecto de Sistema operativo */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

/* Nos aseguramos que todos los elementos utilicen el border box*/
  *, *:before, *:after {
    box-sizing: inherit;
  }

/*Reiniciamos todos los elementos para evitar estilado, margen o defults */
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe;
    height: 100vh;
    /*Centramos el body utilizando esta técnica*/
    margin: 0 auto;
    /*Nos centramos en el diseño en mobile */
    max-width: 500px;
    /* Esto evitará que la aplicación haga rebotes cuando se haga scroll*/
    overscroll-behavior: none;
    width: 100%; 
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }

`
