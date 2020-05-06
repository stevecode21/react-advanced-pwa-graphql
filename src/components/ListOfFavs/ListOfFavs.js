import React from 'react'
import { Grid, Image, Link } from './styles'
// Exportamos el componente nombrado, lo unico que va a recibir va a ser los favs que tiene que renderizar, estos favs serán un array vacío por defecto para evitar problemas
export const ListOfFavs = ({ favs = [] }) => {
  return (
    // Envolveré la vista en un componente Grid estilado
    <Grid>
      {
        // Todos los favoritos estarán envueltos en un Link, la cual tendrá la key y al presionar tendrán que ir a la ruta detail de cada uno de los id del fav
        // Vamos a hacer un map de toda esta información, y por cada favorito que tengamos vamos a enseñar una imagen con una key unica, obteniendo así también el source en donde está la imagen del favorito
        favs.map(fav =>
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            {/* Utilizo mi elemento Image */}
            <Image src={fav.src} />
          </Link>
        )
      }
    </Grid>
  )
}
