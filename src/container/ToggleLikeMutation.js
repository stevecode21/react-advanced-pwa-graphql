import React from 'react'
// Importaré gql para ussar las querys o mutaciones
import { gql } from 'apollo-boost'
// Extraeré el componente Mutation directamente de react apollo
import { Mutation } from 'react-apollo'

// Haremos una constante para almacenar mi mutación
// Esta mutación es anonima porque todavía el usuario no está logueada, entonces dejaremos que cualquier usuario pueda dar like
/* A esta mutación le estamos pasando un input llamado LikePhoto, es un dato que hemos determinado que será un objeto con el id de la foto que se le da like: {"input": {"id": "11"}}
*/
const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input){
    id,
    liked,
    likes
  }
}
`
// Crearemos el componente exportado, el cual recibirá como prop un children
export const ToggleLikeMutation = ({ children }) => {
  // Este componente devuelve el componente Mutation que va a recibir la mutación LIKE_PHOTO
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {/* Este componente lo que tiene que envolver será el children, esto nos va a permitir que la mutación se pueda reutilizar en cualquier componente indipendientemente de lo que va a renderizar */}
      {children}
    </Mutation>)
}
