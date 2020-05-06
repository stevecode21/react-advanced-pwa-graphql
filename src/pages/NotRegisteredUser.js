// Importaremos el hook useContext desde react y así podremos simplificar la legibilidad del componente
import React, { useContext } from 'react'
// Como el import de context es nombrado, son necesarias las llaves
import { Context } from '../Context'
import { UserForm } from '../components/UserForm/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  // Desde context el método que quiero utilizar es el método activateAuth, utilizando useContext el cual lo lee desde el contexto que estoy importando
  const { activateAuth } = useContext(Context)
  // Retornamos la mutación de registro y de login
  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              // Extraemos data en la promesa
              register({ variables }).then(({ data }) => {
                // Estremos la propiedad signup de data, la cual tiene un JWT de registro
                const { signup } = data
                // Le pasamos por parámetro al método el token
                activateAuth(signup)
              }).catch((error) => { console.log(error.graphQLErrors[0].message) })
            }

            const errorMsg = error && 'El usuario ya existe'
            return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
          }

        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              // Extraemos data en la promesa
              login({ variables }).then(({ data }) => {
                // vamos a recuperar login de la propiedad data, login es un JWT unico que nos devuelve GraphQL para cada usuario
                const { login } = data
                // Le paso a mi método activateAuth el login
                activateAuth(login)
              })
            }

            const errorMsg = error && 'El usuario o la contraseña es incorrecta 😥'
            return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesión' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </>
  )
}
