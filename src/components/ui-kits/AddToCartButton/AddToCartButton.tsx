import React from 'react'
import {
  StyledAddToCartButton,
  StyledAddToCartItem,
  StyledCartLabel,
} from './AddToCartButton.styled'
import { ShoppingOutlined } from '@ant-design/icons'
import Context from '../../../utils/context'

interface IAddToCartProps {
  isHeader?: boolean
  productId?: number
}

const AddToCartButton: React.FC<IAddToCartProps> = (props) => {
  return (
    <Context.Consumer>
      {({ shoppingCart, updateShoppingCart }) => {
        console.log('header context', shoppingCart, updateShoppingCart)
        return (
          <StyledAddToCartButton
            isHeader={props.isHeader}
            onClick={() => updateShoppingCart({ id: props.productId, quantity: 1 })}
          >
            {props.isHeader ? (
              <ShoppingOutlined />
            ) : (
              <StyledAddToCartItem>ADD TO CART</StyledAddToCartItem>
            )}
            {props.isHeader && shoppingCart.length > 0 ? (
              <StyledCartLabel>{shoppingCart.length}</StyledCartLabel>
            ) : null}
          </StyledAddToCartButton>
        )
      }}
    </Context.Consumer>
  )
}

export default AddToCartButton
