import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
// Aqui estoy importando mi ContainerOfPhotoCards para renderizar mi componente HOC con el fectching realizado y asimismo el renderizado
import { ContainerOfPhotoCards } from './container/ContainerOfPhotoCards'
import { Logo } from './components/Logo/Logo'
// Importaremos mi container componente PhotoCardWithQuery
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  // Haremos uso de url params, le cual lo obtenemos a partir de window, URLSearchParams recibe un parámetro el cual será la query string de la barra de direcciones
  const urlParams = new window.URLSearchParams(window.location.search)
  // Recuperaremos el detail id al que estamos navegando
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {/* Si tenemos un detail id, lo evaluaremos y mostraremos el componente requerido de acuerdo al query si no renderizaremso lo que ya teniamos previamente */}
      {/* Le pasaremos la id del detalle por parámetro a nuestro componente */}
      {detailId ? <PhotoCardWithQuery id={detailId} /> : <><ListOfCategories /><ContainerOfPhotoCards categoryId={1} /></>}
    </div>
  )
}
