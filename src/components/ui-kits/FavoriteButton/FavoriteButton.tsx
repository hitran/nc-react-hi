import React from 'react'
import { StyledFavoriteButton } from './FavoriteButton.styled'
import { HeartOutlined } from '@ant-design/icons'

interface FavoriteButtonProps {
  isHeader?: boolean
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
  return (
    <StyledFavoriteButton isHeader={props.isHeader}>
      <HeartOutlined />
    </StyledFavoriteButton>
  )
}

export default FavoriteButton
