import React from 'react'
// Importamos mi componente FavsWithQuery desde donde estoy realizando la query
import { FavsWithQuery } from '../container/GetFavorites'
export const Favs = () => (
  <>
    <h1>Favs</h1>
    {/* Aquí usaré mi componente */}
    <FavsWithQuery />
  </>
)
