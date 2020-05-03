import React from 'react'
import { Article, ImgWrapper, Img } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
// Importaré mi componente FavButton para usarlo
import { FavButton } from '../FavButton/FavButton'
// Importaremos mi componente ToggleLikeMutation
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`

  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            {/* ToggleLikeMutation lo vamos a utilizar envolviendo este botón, entonces FavButton será nuestro children */}
            <ToggleLikeMutation>
              {/* Este componente ToggleLikeMutation necesita una renderProp la cual tiene que ser una función que le diga lo que tiene que renderizar, en este caso el FavButton */}
              {
                // Como parametro a la función le va a llegar la mutación que queremos realizar, este toggleLike es lo que podemos utilizar a la hora de actualizar no solo el estado sino la base de datos
                /* Básicamente el componente Mutation le pasa a children como primer parámetro la función que usará para actualizar o hacer la mutación */
                (toggleLike) => {
                  // Al evento on click le crearemos una función para organizarlo de una mejor manera
                  /* esto lo que hará es cambiar el estado local y también llamaremos al toggleLike para poder cambiar en la base de datos el like de esta foto */
                  const handleFavClick = () => {
                    // Solo vamos a cambiar el like en la base de datos si no nos está gustando la foto para evitar que haya una incongruencia en lo que se ve y en lo que estamos haciendo
                    /* A toggleLike le tenemos que decir cual es el id de la foto a la que queremos likear ya que la mutation necesita el id en el input */
                    // Le vamos a pasar un objeto que va a llamarse variables como una propuedad
                    !liked && toggleLike({
                      variables: {
                        // Esta propiedad variables va a ser a su vez otro objeto que va a ser el input que va a tener nuestra mutación el que debería llegar es el id de la card que queriamos que tuviera el like
                        input: { id }
                      }
                    })
                    // Aqui cambiamos el estado local
                    setLiked(!liked)
                  }
                  // A FavButton le pasaremos las props liked, liked, y la prop onClick
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }

            </ToggleLikeMutation>
          </>
      }

    </Article>
  )
}
