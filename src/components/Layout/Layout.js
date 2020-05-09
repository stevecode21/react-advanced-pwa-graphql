import React from 'react'
// Importo Helmet para el SEO
import { Helmet } from 'react-helmet'
// Importo los styled components para mi Layout
import { Div, Title, Subtitle } from './styles'
// Exportaremos un Layout la cual va a recibir diferentes props, una de las mas importantes es el children ya que servierá como de 'envoltorio', tenderemos un title y un subtitle
export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      {/* Vamos a tener Helmet */}
      <Helmet>
        {/* Tendremos el title y subtitle para cambiar los metas  */}
        {/* Si tenemos un title lo que haremos es cambiar el tile, y aprovecharemos la posibilidad de fusionar strings por lo cual al final del title  siempre irá la palabra Petgram */}
        {title && <title>{title} | Petgram 🐶</title>}
        {/* Si tenemos un subtitle, este será la meta de la descripción */}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      {/* Como es un Layout aqui tendremos algo de estilo renderizando los datos */}
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}

      </Div>
    </>
  )
}
