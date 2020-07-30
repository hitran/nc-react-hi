import React from 'react'

interface IShoppingCartData {
  id: number
  quantity: number
}
const Context = React.createContext({
  shoppingCart: [],
  updateShoppingCart: (shoppingCartData: IShoppingCartData) => shoppingCartData,
  setCartFromStorage: (data) => data,
})

export default Context
