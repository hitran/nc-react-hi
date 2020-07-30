import React, { useContext } from 'react'
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
  const context = useContext(Context)
  return (
    <StyledAddToCartButton
      isHeader={props.isHeader}
      onClick={() => context.updateShoppingCart({ id: props.productId, quantity: 1 })}
    >
      {props.isHeader ? (
        <ShoppingOutlined />
      ) : (
        <StyledAddToCartItem>ADD TO CART</StyledAddToCartItem>
      )}
      {props.isHeader && context.shoppingCart.length > 0 ? (
        <StyledCartLabel>{context.shoppingCart.length}</StyledCartLabel>
      ) : null}
    </StyledAddToCartButton>
  )
}

export default AddToCartButton
