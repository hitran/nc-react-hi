import React from 'react'

interface IShoppingCartData {
  id: number
  quantity: number
}
const Context = React.createContext({
  productList: [],
  shoppingCart: [],
  isSearchCalled: false,
  updateShoppingCart: (shoppingCartData: IShoppingCartData) => shoppingCartData,
  setCartFromStorage: (data) => data,
  updateProductList: (productList) => productList,
  updateIsSearchCalled: (status) => status,
})

export default Context
