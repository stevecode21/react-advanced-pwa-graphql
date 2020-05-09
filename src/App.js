// Importo Suspense, desde React, el cual nos va a permitir renderizar algo mientras un componente está en modo de suspensión, es decir que todavía no está cargado por lo tanto no está listo para renderizarse
import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'
import { Context } from './Context'

// Aqui vamos a importar Favs de una forma distinta usando React.lazy, el cual necesita una funcion que devuelva un import dinámico para funcionar, esto evitará cargar la página hasta que no la necesitemos
const Favs = React.lazy(() =>
// Uso mi import dinámico para llamar mi componente Fav.js
  import('./pages/Favs')
)

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    // Usamos Suspense aqui en lugar del div, Suspense necesita una prop la cual es fallback -> Esto es lo que renderizará mientras está cargando el componente, en este caso un div
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
