import React from 'react'
// Importamos el componente Query
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
// Importamos el componente en donde estamos manipulando la renderización de nuestros favs
import { ListOfFavs } from '../components/ListOfFavs/ListOfFavs'

// Creo mi query de favs
// Al ejecutar este query recuperaremos los favoritos y los diferentes campos de los favoritos, es necesario usar el token con el authorizacion ya que esos favoritos están relacionados a un user pues si no lo hago me mostrará un mensaje de que "debo estar logueado"
const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
// Creamos la render prop, esta render prop recuperará por parametros los 3 estados que retorna la query (loading, errror y data)
const renderProp = ({ loading, error, data }) => {
  // En esta render prop lo que queremos hacer es primero si loading está en true, regresaremos que está cargando
  if (loading) return <p>Loading...</p>
  // Si tenemos un error, avisaremos al usuario del error
  if (error) return <p>Error!</p>
  // Recuperaremos la propiedad fav (los favoritos) de data
  const { favs } = data

  // A este componente le pasamos por props todos los favoritos
  return (<ListOfFavs favs={favs} />)
}

// Exportamos un componente sin recuperar ninguna prop
export const FavsWithQuery = () => (
  // Renderizamos con el componente Query la query que hemos creado líneas más arriba y además, para evitar el problema de que yo seleccione como favorito una imagen nueva pero en favs no me lo actualiza, lo que haré será pasarle un FetchPolicy lo cual le diremos que siempre esté atento a lo datos de la network para recuperar los datos que estén actualmente
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {/* Dentro renderizamos la render prop */}
    {renderProp}
  </Query>
)
