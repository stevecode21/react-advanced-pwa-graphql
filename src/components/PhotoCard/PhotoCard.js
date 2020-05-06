import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
// Importo mi componente Link de Reach Router
import { Link } from '@reach/router'
// Puesto que ya no usaremos local storage para almacenar los likes, este hook no nos servirá
// import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton/FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

// Recibiremos el liked por las props ya que la petición nos devolverá esta información desde el servidor
export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  // Puesto que ya no usaremos local storage para almacenar los likes, este hook no nos servirá

  // const key = `like-${id}`
  // const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    // !liked && -> ya no usaremos está parte ya que ya no queremos validar si no nos está gustando el like
                    toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                    // Puesto que ya no usaremos local storage para almacenar los likes, este hook con el envio de actualización de estado no lo usaremos más
                    // setLiked(!liked)
                  }
                  // El liked que se le envia al fav button se recibirá desde las props
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }

            </ToggleLikeMutation>
          </>
      }

    </Article>
  )
}
