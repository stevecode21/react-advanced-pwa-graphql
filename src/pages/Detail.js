import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
// Importaré mi Layout para usar mi SEO y asimismo renderizar esa información
import { Layout } from '../components/Layout/Layout'

export const Detail = ({ detailId }) => (
  // Layout lo vamos a utilizar para envolver todo el contenido que  teniamos en el detalle, le pasamos por props el title y el subtitle
  <Layout title={`Fotografía ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
