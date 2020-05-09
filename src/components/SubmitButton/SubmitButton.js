import React from 'react'
import { Button } from './styles'
// Importamos las prop types
import PropTypes from 'prop-types'
export const SubmitButton = ({ children, disabled, onClick }) => {
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}

SubmitButton.propTypes = {
  // Añadimos las propiedades de disables onclick y children
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  // node significa que es cualquier cosa que react pueda renderizar (string, numero, array de elementos, etc)
  children: PropTypes.node.isRequired
}
