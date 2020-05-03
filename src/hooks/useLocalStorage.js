// Importo mi use state para usar mi custom hook
import { useState } from 'react'

// Crearé mi custom Hook exportado para el local Storage, este recibirá dos parámetros, el key y el valor inicial que debería tener
export function useLocalStorage (key, initialValue) {
  // Usaremos mi custom hook de manera que le pasamos la key y valor inicial false ya que habiamos dicho que no ibamos a tener por defecto ninguna foto que nos gustase
  // Como es un custom hook reutilizable será totalmente agnostico al vlaor con el que estemos trabajando el cual antes era like, ahora podrá ser cualquier otro
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      // Retornaremos dependendiendo de si el item existe o no, por lo tanto si el item es diferente a null lo que haremos será parsear lo que tengamos en el local storage, ya que recordemos que el local storage siempre lo que guarda es un String entonces si queremos recuperar el valor que hemos guardado anteriormente, tenemos que parsearlo como JSON. Si no tenemos nada vamos a devolver el valor inicial
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      // Si tenemos algún tipo de error, vamos a devolver initial value
      return initialValue
    }
  })
  //
  const setLocalStorage = value => {
    try {
      // Vamos a asegurarnos que el valor que estamos guardando es un string, para eso utilizamos el stringify del JSON
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.log(error)
    }
  }
  // Vamos a devolver un array que va a tener 2 posiciones primero el valor que teniamos guardado y como segundo una forma de actualizar el local storage
  return [storedValue, setLocalStorage]
}
