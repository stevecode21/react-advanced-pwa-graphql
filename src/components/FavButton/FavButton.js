import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
// Importo la dependencia de las proptypes
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon size='32px' />{likes} likes!
    </Button>
  )
}
// Tenemos el componente FavButton y ahora usaremos las proptypes, le famos a asignal un objeto, el cual va a especificar cuales son las props que le llegan
FavButton.propTypes = {
  // El valor es el tipo, para eso usamos PropTypes para indicar cual es el tipo de cada prop, en este caso (boolean, number y function)
  // Le añado otrao propiedad llamada isRequired para decirle a mi proptypes que esta prop es NECESARIA para que mi componente funcione correctamente
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
