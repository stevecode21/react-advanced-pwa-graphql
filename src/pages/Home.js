import React from 'react'
import { ContainerOfPhotoCards } from '../container/ContainerOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories'
import { Layout } from '../components/Layout/Layout'

// Le quitamos el export y cambiamos el nombre a HomePage
const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos ¡muy hermosos!'>
      <ListOfCategories />
      <ContainerOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

// Lo que renderizaremos será Home lo cual es el resultado de ejecutar React Memo utilizando el HomePage, podemos pasarle como segundo parámetro a React.memo() una función la cual recibe las props anteriores y las actuales, esto nos permitirá hacer una comparación de forma que sepamos si el categoryId cambió o no y dependiendo de ello vovler a renderizar el componente
export const Home = React.memo(HomePage, (prevProps, props) => {
// Tendrá que volver a renderizarlo, en el caso de que el id no sea igual a las props actuales o dicho de otra forma va a tener que recordarlo si la prop anterior y la actual es la misma, asi evitaremos el re-renderizado
  return prevProps.categoryId === props.categoryId
})
