import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
// Importo mis pages
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
// Crearemos una constante la cual va a recibir el children (mi render props), este simplemente va a hacer lo que tenga que renderizar como una función
const UserLogged = ({ children }) => {
  // A children le pasaremos como parametro si está autenticado el usuario o no, por defecto false
  return children({ isAuth: false })
}
export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      {/* UserLogged lo usaremos como un componente dentro de la app de forma que  */}
      <UserLogged>
        {/* User logged necesita un children que es la función, la función recibe un parametro para saber si está autenticado o no */}
        {
          // Recuperaremos el objeto que tiene la propiedad isAuth
          ({ isAuth }) =>
          // Este objeto tiene que renderizar si está autenticado un router con el acceso a los 2 componentes de fav y user
            isAuth
              ? <Router>
                {/* Añadimos las rutas protegidas */}
                <Favs path='/favs' />
                <User path='/user' />
                {/* eslint-disable-next-line react/jsx-closing-tag-location */}
              </Router>
            // Si no está autenticado lo que va a renderizar va a ser un router donde va a tener acceso a estas rutas donde no está autenficado
              : <Router>
                {/* NotRegisteredUser debería estar tanto en favs como en user */}
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
                {/* eslint-disable-next-line react/jsx-closing-tag-location */}
              </Router>

        }
      </UserLogged>
      <NavBar />
    </div>
  )
}
