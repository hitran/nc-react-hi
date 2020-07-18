import React from 'react'
import { StyledAddToCartButton, StyledAddToCartItem } from './AddToCartButton.styled'
import { ShoppingOutlined } from '@ant-design/icons'

interface AddToCartProps {
  isHeader?: boolean
  productId?: number
}
const AddToCartButton: React.FC<AddToCartProps> = (props) => {
  const handleCartButtonClick = () => {
    return
  }

  return (
    <StyledAddToCartButton onClick={handleCartButtonClick} isHeader={props.isHeader}>
      {props.isHeader ? 
      <ShoppingOutlined /> :
      <StyledAddToCartItem>Add To Cart</StyledAddToCartItem>
      }
      
    </StyledAddToCartButton>
  )
}

export default AddToCartButton
