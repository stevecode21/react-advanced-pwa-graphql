import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    // Vamos a crear un método para des autenticar al usuario
    removeAuth: () => {
      // Actualizaremos el estado local a false para decir que ya no está autenticado
      setIsAuth(false)
      // Y eliminamos el token de session storage
      window.sessionStorage.removeItem('token')
    }
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>)
}
export default {
  Provider,
  Consumer: Context.Consumer
}
