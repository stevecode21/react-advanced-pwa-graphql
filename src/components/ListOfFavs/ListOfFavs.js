import React from 'react'
import { Grid, Image, Link } from './styles'
// Importo la dependencia de prop types
import PropTypes from 'prop-types'
export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav =>
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        )
      }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  // Aqui le digo que favs es un prop de tipo array, para arreglar el hecho de que prop types sepa qué tipo de datos se están enviando por el array, usaremos arrayOf, y le decimos cual es la forma que debe tener el array
  favs: PropTypes.arrayOf(
    // En este caso le estamos diciendo que la forma de este array es de un objeto y van a tener una forma
    PropTypes.shape({
      // Forma la cual tendrá una propiedad id de tipo string y requerida
      id: PropTypes.string.isRequired,
      // Src también será de tipo string
      src: PropTypes.string.isRequired
    })
  )
}
