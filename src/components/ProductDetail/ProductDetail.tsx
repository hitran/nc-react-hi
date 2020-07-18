import React from 'react'
import { StyledProductDetail } from './ProductDetail.styled'
import { QuantityButton } from '../ui-kits/QuantityButton'

const ProductDetail: React.FC = () => {
  return (
    <StyledProductDetail>
      <p>Rating</p>
      <p>Product Title</p>
      <p>Price</p>
      <p>Description</p>
      <QuantityButton />
      <p>Add To Cart - Favorite</p>
      <hr />
      <p>SKU:</p>
      <p>Category:</p>
      <p>Tags:</p>
    </StyledProductDetail>
  )
}

export default ProductDetail
