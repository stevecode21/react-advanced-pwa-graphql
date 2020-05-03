import React from 'react'
import ReactDOM from 'react-dom'
// Importaré Apollo Cliente
import ApolloClient from 'apollo-boost'
// Importaré también Apollo Provider el cual va a ser un componente con el que vamos a envolver nuestra aplicación de forma que podamos utilizar apollo en cualquier parte del arbol de elementos
import { ApolloProvider } from 'react-apollo'
import { App } from './App'

// Vamos a inicializar el cliente al cual le tenemos que pasar una configuración que va a ser la url de mi servidor de GraphQL, la url será la que hemos inicializado en anteriores clases
const client = new ApolloClient({
  uri: 'https://petgram-server-stevecode.now.sh/graphql'
})
// Envolveremos la aplicación con el componente Apollo Provider, este necesita una prop, la cual es el cliente que le hemos inicializado anteriromente
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app'))
