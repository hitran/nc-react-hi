import React from 'react'
import { StyledActionBtnGroup } from './ActionBtnGroup.styled'
import { FavoriteButton } from '../ui-kits/FavoriteButton'
import { AddToCartButton } from '../ui-kits/AddToCartButton'

interface IActionBtnGroup {
  productId?: number
}
const ActionBtnGroup: React.FC<IActionBtnGroup> = (props) => {
  return (
    <StyledActionBtnGroup>
      <FavoriteButton />
      <AddToCartButton productId={props.productId} />
    </StyledActionBtnGroup>
  )
}

export default ActionBtnGroup
