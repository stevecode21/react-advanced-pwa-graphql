import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout/Layout'

// En este caso ya no exportaremos el componente de forma nombrada, si no por default, esto nos facilitará el uso de react lazy
export default () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus pets favoritos'>

    <FavsWithQuery />
  </Layout>
)
