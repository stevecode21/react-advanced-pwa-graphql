// Añadimos el useEffect
import React, { useState, useEffect } from 'react'
import { Category } from '../Category/Category'
import { List, Item, Loading } from './styles'
import Skeleton from 'react-loading-skeleton'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-stevecode.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }
  , [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Loading><Skeleton circle height={75} width={75} duration={100} /><Skeleton height={20} width={75} duration={100} /></Loading>
          // Al componente Category vamos a pasarle una nueva prop llamada path en donde vamos a construir el path donde queremos navegar, esto con base a la prop que recibe el home envuelto en el router
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
