import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

// Crearé mi mutación de Login la cual es muy similar a la de registro, ya que esta mutación también necesita del email y el password para validar la autenticación y asi retornar un token para un inicio de sesión efectivo, si el password es incorrecto, nos devolverá un error de password incorrecto
const LOGIN = gql`
  mutation login($input: UserCredentials!){
    login(input: $input)
  }
`
// Al igual que el mutation de mi Registro, exportamos la mutación la cual recibirá los children ya que esta mutación la vamos a querer utilizar en cualquier punto de nuestra aplicación
export const LoginMutation = ({ children }) => {
  return (
    <Mutation mutation={LOGIN}>
      {children}
    </Mutation>
  )
}
