import React from 'react'
import { StyledAddToCartButton, StyledAddToCartItem } from './AddToCartButton.styled'
import { ShoppingOutlined } from '@ant-design/icons'
import { GET_SHOPPING_CART_DATA } from '../../../graphql/product/product.query'
import { useQuery, useApolloClient } from '@apollo/react-hooks'

interface AddToCartProps {
  isHeader?: boolean
  productId?: number
  onClick?(e?: React.MouseEvent<HTMLElement>)
}
const AddToCartButton: React.FC<AddToCartProps> = (props) => {
  // console.log(client)
  // const addToCart = (id) => {
  //   const { shoppingCart } = client.readQuery({ query: GET_SHOPPING_CART_DATA })
  //   console.log(shoppingCart)
  //   let quantity = 1

  //   const selectedProduct = {
  //     id: id,
  //     quantity: 1,
  //     __typename: 'ShoppingCart',
  //   }
  //   let updatedShoppingCart = [selectedProduct]
  //   if (shoppingCart.length > 0) {
  //     updatedShoppingCart = [...shoppingCart, selectedProduct]
  //   }
  //   client.writeData({
  //     data: {
  //       shoppingCart: updatedShoppingCart,
  //     },
  //   })
  //   console.log(shoppingCart)
  //   console.log(id)
  // }
  // onClick={() => addToCart(props.productId)} isHeader={props.isHeader}
  return (
    <StyledAddToCartButton>
      {props.isHeader ? (
        <ShoppingOutlined />
      ) : (
        <StyledAddToCartItem>ADD TO CART</StyledAddToCartItem>
      )}
    </StyledAddToCartButton>
  )
}

export default AddToCartButton
