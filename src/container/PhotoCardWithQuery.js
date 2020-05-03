import React from 'react'
import { PhotoCard } from '../components/PhotoCard/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
// Importaremos Skeleton para animar mi loading
import Skeleton from 'react-loading-skeleton'

// Le cambiaremos el nombre a query ya que es una buena practica ponerle un nombre más descriptivo
const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
// Otra buena practica es dejar las render props fuera del componente
const renderProp = ({ loading, error, data }) => {
  // Si el está cargando podremos renderizar un mensaje
  if (loading) return <Skeleton height={200} width={600} duration={2} />
  // Si tenemos un error vamos a devolver
  if (error) return <p>Error!</p>
  const { photo = {} } = data

  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      // Llamamos nuestra render prop
      renderProp
    }

  </Query>
)
