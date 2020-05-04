import React from 'react'
// Aqui estoy importando mi ContainerOfPhotoCards para renderizar mi componente HOC con el fectching realizado y asimismo el renderizado
import { ContainerOfPhotoCards } from '../container/ContainerOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories'

// Exportaré este componente y recibirá como prop el id que le estamos pasando por el path
export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      {/* A categoryId le pasaremos el id que recibimos por el path */}
      <ContainerOfPhotoCards categoryId={categoryId} />
    </>
  )
}
