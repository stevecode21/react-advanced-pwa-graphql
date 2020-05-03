import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard'

// Necesitaremos nuevamente exportar este componente con el fin de usarlo en mi Container component que se encargará de mis fetching
export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (

    <ul>
      {photos.map(
        photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>

  )
}
