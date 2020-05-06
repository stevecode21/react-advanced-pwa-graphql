// Importo el Hook que nos va a permitir usar el Context
import React, { useContext } from 'react'
// Importo el contexto para usar la desautenticación de mi usuario
import { Context } from '../Context'
// Importo el componente SubmitButton que ya viene estilado
import { SubmitButton } from '../components/SubmitButton/SubmitButton'
export const User = () => {
  // Recuperamos el método para desautenticar al usuario utilizando el useContext y le decimos el Contexto que queremos utilizar
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      {/* Creamos un botón para la acction de cerrar sesión el cual tendrá un evento que cuando se haga click llamará al método removeAuth */}
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>

  )
}
