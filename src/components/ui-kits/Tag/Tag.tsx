import React from 'react'
import { StyledTagWrapper, StyledTag } from './Tag.styled'

const Tag = () => {
  const tags = ['Tivi', 'Điện Thoại', 'Máy Giặt']
  return (
    <StyledTagWrapper>
      {tags.map((tag, i) => (
        <StyledTag key={i}> {tag} </StyledTag>
      ))}
    </StyledTagWrapper>
  )
}

export default Tag
