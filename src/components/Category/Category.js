import React from 'react'
// Importamos los styled components aqui
import { Anchor, Image } from './styles'
// Usaremos una imagen por defecto que va a ser por ahora la default imagede nuestra categoría
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

// Haremos que nuestros componentes se exporten de forma nombrada, esto quiere decir que no serán export default sino un export nombrado
// Nuestro componente va a recibir diferentes props: El cover que usará el DEFAULT_IMAGE, el path porque será el que le va a indicar hacia donde tiene que dirigirse cada vez que vayamos a una categoría y también definiremos un emoji que nos va a ayudar a identificar cada una de las categorías (perro, gato, etc) a este último le dejaremos un valor por defecto ('?')
export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  // Queremos que renderice un Anchor (a) el cual está estilado con mis styled components y va a tener un href con el path que le estamos pasando por props
  <Anchor href={path}>
    {/* Renderizamos la imagen con el cover default que definimos */}
    <Image src={cover} />
    {/* Y renderizamos el Emoji */}
    {emoji}
  </Anchor>
)
