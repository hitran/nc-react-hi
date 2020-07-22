import React from 'react'
import { StyledProductDetail } from './ProductDetail.styled'
import { QuantityButton } from '../ui-kits/QuantityButton'
import { ActionBtnGroup } from '../ui-kits/ActionBtnGroup'

interface IProductDetailProps {
  productName: string
  productPrice: string
  sku: string
}
const ProductDetail: React.FC<IProductDetailProps> = (props) => {
  return (
    <StyledProductDetail>
      <h2>{props.productName}</h2>
      <h5>{props.productPrice.toLocaleString()} VND</h5>
      <QuantityButton />
      <ActionBtnGroup />
    </StyledProductDetail>
  )
}

export default ProductDetail
