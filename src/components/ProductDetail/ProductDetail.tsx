import React from 'react'
import {
  StyledProductDetail,
  StyledProductName,
  StyledPrice,
  StyledBtnGroup,
} from './ProductDetail.styled'
import { QuantityButton } from '../QuantityButton'
import { ActionBtnGroup } from '../ui-kits/ActionBtnGroup'

interface IProductDetailProps {
  productName: string
  productPrice: string
  sku: string
}
const ProductDetail: React.FC<IProductDetailProps> = (props) => {
  return (
    <StyledProductDetail>
      <StyledProductName>{props.productName}</StyledProductName>
      <p>SKU: {props.sku}</p>
      <hr />
      <StyledPrice>{props.productPrice.toLocaleString()} đ</StyledPrice>
      <p>Quantity: </p>
      <StyledBtnGroup>
        <QuantityButton />
        <ActionBtnGroup />
      </StyledBtnGroup>
    </StyledProductDetail>
  )
}

export default ProductDetail
