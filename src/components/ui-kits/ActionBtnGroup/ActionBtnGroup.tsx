import React from 'react'
import { StyledActionBtnGroup } from './ActionBtnGroup.styled'
import { FavoriteButton } from '../FavoriteButton'
import { AddToCartButton } from '../AddToCartButton'

const ActionBtnGroup: React.FC = () => {
  return (
    <StyledActionBtnGroup>
      <FavoriteButton />
      <AddToCartButton />
    </StyledActionBtnGroup>
  )
}

export default ActionBtnGroup
