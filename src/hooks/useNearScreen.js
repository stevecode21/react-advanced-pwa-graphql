// Importaré los hooks useEfecct, useRef y useState para poder usar correctamente mi custom hook
import { useEffect, useState, useRef } from 'react'

// Exporaré una función que no recibirá ningún parametro para crear mi custom hook
export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  // Este hook tiene que devolver, primero si el elemento se tiene que mostrar y como segundo parametro teniendo en cuenta que tenemos que recuperar la referencia del elemento, devolveremos el element
  return [show, element]
}
