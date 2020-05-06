import React from 'react'
// Importamos la mutación desde react apollo
import { Mutation } from 'react-apollo'
// Importamos la utilidad gql de apollo boost
import { gql } from 'apollo-boost'

// Creamos la mutación y la llamamos REGISTER
/* En la mutación signup tiene que pasarle un input que son los user credentials, loca cuales son un objeto, este tiene una propiedad input y a su vez tiene un objetvo donde recibe un email y password
  {
    "input":{
      "email":"curso-´latzi@gmail.com"
      "password"
    }
  }
  El ejecutar la petición la respuesta será un JWT

*/
const REGISTER = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`
// Exportamos la mutación la cual recibirá los children ya que esta mutación la vamos a querer utilziar en cualquier punto de nuestra aplicación
export const RegisterMutation = ({ children }) => {
  // Este componente devolverá el Mutation de react apollo con la mutación que hemos creado anteriormente (registrar el usuario)
  return (
    <Mutation mutation={REGISTER}>
      {/* Lo que queremos que renderice es lo que ya está envolviendo este componente, en este caso NotRegisterUser -> Este es el que está siendo envuelto */}
      {children}
    </Mutation>
  )
}
