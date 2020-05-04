import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

// Creamos un componente exportado el cual recibe props para usar el detailId
export const Detail = ({ detailId }) => (
  <PhotoCardWithQuery id={detailId} />
)
