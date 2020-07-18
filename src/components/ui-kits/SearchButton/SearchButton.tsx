import React from 'react'
import { StyledSearchButton } from './SearchButton.styled'
import { SearchOutlined } from '@ant-design/icons'

const SearchButton = () => {
  return (
    <StyledSearchButton>
      <SearchOutlined />
    </StyledSearchButton>
  )
}

export default SearchButton
