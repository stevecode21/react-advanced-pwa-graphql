import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

// Creamos una constante para tener la query y la llamaremos como buena practica a lo que se refiere, en este caso a obtener las fotos
const GET_PHOTOS = gql`
query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
// Y lo que tendremos en GraphQL será el query de get photos
export const withPhotos = graphql(GET_PHOTOS)
