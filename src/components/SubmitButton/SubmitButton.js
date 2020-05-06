import React from 'react'
import { Button } from './styles'

// Creamos una constante que va a recibir como prop el children (lo que va a envolver este componente), un onClick y la propiedad disabled para deshabilitar durante el loading
export const SubmitButton = ({ children, disabled, onClick }) => {
  // Lo que tiene que renderizar será el children utilizando la prop onClick
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}
