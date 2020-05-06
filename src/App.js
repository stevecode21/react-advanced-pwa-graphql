import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
// Importro mi context para acceder al Consumer
import Context from './Context'

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
      {/* Context.Consumer tiene la misma render prop que tenia el componente que estabamos utilizando antes (UserLogged) asi que no tenemos que hacer ningun cambio */}
      <Context.Consumer>
        {
          // A la render prop le llegan todos los values que habiamos puesto en el provider que era si está autenticado o no
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
                {/* eslint-disable-next-line react/jsx-closing-tag-location */}
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
                {/* eslint-disable-next-line react/jsx-closing-tag-location */}
              </Router>

        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
