import React from 'react'
// Importo my styled component Nav y el Link
import { Nav, Link } from './styles'
// Importaré iconos para darle una mejor vista a mi nav bar
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
export const NavBar = () => {
  return (
    // Uso mi styled componente Nav en lugar de la etiqueta nav el cual ya está estilado
    <Nav>
      {/* Uso mis Links ya estilados asignandole el destino de redirección correcto a cada uno */}
      <Link to='/'><MdHome /></Link>
      <Link to='/favs'><MdFavoriteBorder /></Link>
      <Link to='/user'><MdPersonOutline /></Link>
    </Nav>
  )
}
