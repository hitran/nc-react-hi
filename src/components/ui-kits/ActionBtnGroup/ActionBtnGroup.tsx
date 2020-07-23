import React from 'react'
import { StyledActionBtnGroup } from './ActionBtnGroup.styled'
import { FavoriteButton } from '../FavoriteButton'
import { AddToCartButton } from '../AddToCartButton'

interface IActionBtnGroup {
  productId: number
}
const ActionBtnGroup: React.FC<IActionBtnGroup> = (props) => {
  return (
    <StyledActionBtnGroup>
      <FavoriteButton />
      <AddToCartButton productId={props.productId}/>
    </StyledActionBtnGroup>
  )
}

export default ActionBtnGroup
