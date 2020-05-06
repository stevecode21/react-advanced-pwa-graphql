// Importo use state para usar el custom hook
import { useState } from 'react'
// Vamos a crear un custom Hook para simplificar el state de los input
export const useInputValue = initialValue => {
  // Crearemos un estado local con un value y una forma de actualizar el value y el useState con el valor inicial que le viene por parametro (initialValue)
  const [value, setValue] = useState(initialValue)
  // Esto ofrece una forma de poder actualizar el estado local, ya que el onChange recupera el evento y del evento hace un setvalue de acuerdo al valor cambiante de ese momento
  const onChange = e => setValue(e.target.value)

  // Esto devolverá un objeto con el valor y con el onChange
  return { value, onChange }
}
