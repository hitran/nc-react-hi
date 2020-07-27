import React from 'react'

const Context = React.createContext({
  shoppingCart: [],
  updateShoppingCart: ({ id, quantity }) => {
    id, quantity
  },
})

export default Context
