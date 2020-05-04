import React from 'react'
import { Link, Image } from './styles'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

// Vamos a pasarle por ahora a path que tenga un valor inicial para que al menos tengo algun valor para la prop to
export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  // Ya no usaremos href para el Anchor sino la prop to, pues ahora no lo estamos usando si no usamos el Link de Reach Rputer para nuestra SPA
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
