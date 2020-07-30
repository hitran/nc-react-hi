import React, { useState } from 'react'
import Context from '../utils/context'

function MyApp({ Component, pageProps }) {
  const [shoppingCart, setShoppingCart] = useState([])
  const [productList, setProductList] = useState([])
  const [isSearchCalled, setIsSearchCalled] = useState(false)

  const updateShoppingCart = ({ id, quantity }) => {
    const index = shoppingCart.findIndex((item) => item.id === id)
    if (index === -1) {
      const updatedShoppingCart = [...shoppingCart, { id, quantity }]
      setShoppingCart(updatedShoppingCart)
    }
    return { id, quantity }
  }

  const setCartFromStorage = (cartFromSession) => {
    setShoppingCart(cartFromSession)
  }

  const updateProductList = (updatedProductList) => {
    setProductList(updatedProductList)
  }

  const updateIsSearchCalled = (status) => {
    setIsSearchCalled(status)
  }

  return (
    <Context.Provider
      value={{
        shoppingCart,
        productList,
        isSearchCalled,
        updateShoppingCart,
        setCartFromStorage,
        updateProductList,
        updateIsSearchCalled,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
