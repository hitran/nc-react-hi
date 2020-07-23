import React from 'react'
import { shoppingCartVar } from '../../../utils/cache'
import { StyledAddToCartButton, StyledAddToCartItem, StyledCartLabel } from './AddToCartButton.styled'
import { ShoppingOutlined } from '@ant-design/icons'
import { makeVar } from '@apollo/client';
import { useApolloClient, useMutation, useQuery  } from '@apollo/react-hooks';
import { GET_SHOPPING_CART, SET_SHOPPING_CART } from '../../../graphql/product/product.query'

interface IAddToCartProps {
  isHeader?: boolean
  onClick?(e?: React.MouseEvent<HTMLElement>)
  productId?: number
}

const AddToCartButton: React.FC<IAddToCartProps> = (props) => {
  // const client = useApolloClient()
  // client.writeData({
  //   data: {
  //     shoppingCart: []
  //   }
  // })
  // const shoppingCart = useQuery(GET_SHOPPING_CART);
  // const addToCart = () => {
  //   const currentCart = JSON.parse(sessionStorage.getItem("shoppingCart")) || []
  //   const selectedProduct =  {id: props.productId, quantity: 1}
  //   const updatedCart = [...currentCart, selectedProduct]
  //   sessionStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  //   setShoppingCart(updatedCart.length)
  //   console.log(sessionStorage.getItem("shoppingCart"))
  // }

  // const updateCart = () => {
  //   console.log(data)
  //   client.writeData({
  //     data: {
  //       shoppingCart: [...data.shoppingCart, { id: `${props.productId}`, quantity: "1" }]
  //     }
  //   })
  //   console.log(client)
  // }

  // const [
  //   updateCart, { data }
  // ] = useMutation(
  //   SET_SHOPPING_CART,
  //   {
  //     variables: { launchIds: shoppingCart.data.shoppingCart },
  //     refetchQueries: shoppingCart.data.shoppingCart.map(id => ({
  //       query: GET_SHOPPING_CART,
  //       variables: { id },
  //     })),
  //     update(cache) {
  //       cache.writeData({ data: { shoppingCart: [] } });
  //     }
  //   }
  // );

  return (
    <StyledAddToCartButton isHeader={props.isHeader}>
      {props.isHeader ? (
        <ShoppingOutlined />
      ) : (
        <StyledAddToCartItem>ADD TO CART</StyledAddToCartItem>
      )}
      {/* {props.isHeader && shoppingCart().length > 0 ? 
       <StyledCartLabel>
        {shoppingCart().length}
       </StyledCartLabel>: 
      null} */}
    </StyledAddToCartButton>
  )
}

export default AddToCartButton
