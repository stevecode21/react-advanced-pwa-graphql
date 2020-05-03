import React from 'react'
// Llamo mis iconos de React Icons
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
// Aqui Llamaré el estilado de mi Button
import { Button } from './styles'
// Exportaremos el component FavButton, pasandole por props toda la información que necesitamos mostrar que es si nos gusta esta foto (Liked), el numero de likes (likes) y el evento que queremos que haga al hacer un click
// Esta función devolverá
export const FavButton = ({ liked, likes, onClick }) => {
  // Eso lo extraemos del componente PhotoCard decidiendo así que icono queremos mostrar dependendiendo de si el state de liked es true o false
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  // En este caso onClick no le pasaremos el evento si no lo que venga por props
  return (
    <Button onClick={onClick}>
      <Icon size='32px' />{likes} likes!
    </Button>
  )
}
