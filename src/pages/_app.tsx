import React, { useState } from 'react'
import Context from '../utils/context'
import { baseUrl } from '../common/constants'

function MyApp({ Component, pageProps }) {
  const [shoppingCart, setShoppingCart] = useState([])

  const updateShoppingCart = ({ id, quantity }) => {
    const updatedShoppingCart = [...shoppingCart, { id, quantity }]
    setShoppingCart(updatedShoppingCart)
    return { id, quantity }
  }

  const setCartFromStorage = (cartFromSession) => {
    setShoppingCart(cartFromSession)
  }

  return (
    <Context.Provider value={{ shoppingCart, updateShoppingCart, setCartFromStorage }}>
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
