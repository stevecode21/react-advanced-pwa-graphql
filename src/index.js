import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// Importamos el contexto
import Context from './Context'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-stevecode.now.sh/graphql',
  // Añadiremos una nueva propuedad llamada request, esta propiedad será la que se va a ejecutar justo antes de cualquier petición al servidor, como parámetro tendrá la operación que está realizando
  request: operation => {
    // Recuperamos el token de session storage y te esta forma podremos pasarsela a todas las peticiones que hagamos
    const token = window.sessionStorage.getItem('token')
    // Creamoosun string con la autortización, con la ternaria vamos a validar que si el token existe, vamos a crear el token añadiendole el bearer diciendole que queremos utilizar el token. Si no existe un token, tendrá un String vacío
    const authorization = token ? `Bearer ${token}` : ''
    // En la operación que hagamos le vamos a añadir un contexto,
    operation.setContext({
      // Al contexto le pasamos un objeto que va a tener los headers
      headers: {
        // En los headers enviamos la autorización de un user autenticado para que pueda dar like
        authorization
      }

    })
  },
  // Como el token puede expirar, vamos a añadir una nueva propiedad llamada onError, el cual recibe un error que se ha producido
  onError: error => {
    // Aquí podemos recuperar un error que sea de la network
    const { networkError } = error
    // Si tenemos un error de la network y(&&) este error nos dice que en su resultado el código es que el token no es válido
    if (networkError && networkError.result.code === 'invalid_token') {
      // Entonces lo que vamos a hacer es primero ir al session storage y vamos a quitar el token ya que no es valido y el usuario no puede segir utilizandolo
      window.sessionStorage.removeItem('token')
      // Luego haremos que el usuario vuelva a la pantalla de inicio y así el usuario tenga que volver a inicializar la sesión
      window.location.href = '/'
    }
  }
})
ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
