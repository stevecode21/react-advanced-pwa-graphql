import React from 'react'
// Importaré gql para ussar las querys o mutaciones
import { gql } from 'apollo-boost'
// Extraeré el componente Mutation directamente de react apollo
import { Mutation } from 'react-apollo'

// Haremos una constante para almacenar mi mutación
// Esta mutación ahora será con un usuario registrado, ya que ahora podemos tener el token de dicho usuario para la petición
/* A esta mutación le estamos pasando un input llamado LikePhoto, es un dato que hemos determinado que será un objeto con el id de la foto que se le da like: {"input": {"id": "11"}}
*/
const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input){
    id,
    liked,
    likes
  }
}
`
export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>)
}
