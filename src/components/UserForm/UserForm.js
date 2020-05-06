import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, ContainerForm, Error } from './styles'
// En lugar de importar el botón de los estilos lo que haremos es importar el componente submitbutton para su uso de manera reutilizable
import { SubmitButton } from '../SubmitButton/SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <ContainerForm>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        {/* Modifico aqui el componente de mi button */}
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </ContainerForm>
  )
}
