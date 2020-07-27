import React, { useState, useEffect } from 'react'
import Context from '../utils/context'
import { baseUrl } from '../common/constants'

function MyApp({ Component, pageProps }) {
  const [shoppingCart, setShoppingCart] = useState([])

  useEffect(() => {
    console.log('initialize app')
  }, [])

  const updateShoppingCart = ({ id, quantity }) => {
    const updatedShoppingCart = [...shoppingCart, { id, quantity }]
    setShoppingCart(updatedShoppingCart)
  }

  return (
    <Context.Provider value={{ shoppingCart, updateShoppingCart }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export async function getStaticPaths() {
  const res = await fetch(baseUrl)
  const products = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => ({
    params: { id: product.id },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default MyApp
