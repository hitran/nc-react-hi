import React, { useState, useContext } from 'react'
import { StyledSearchButton, StyledInput, StyledButton, StyledForm } from './Search.styled'
import { SearchOutlined } from '@ant-design/icons'
import Context from '../../utils/context'

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const context = useContext(Context)

  const handleSearch = () => {
    if (searchQuery === '') {
      context.updateIsSearchCalled(false)
    }
    const filteredProduct = context.productList.filter((product) =>
      product.name.includes(searchQuery)
    )
    context.updateIsSearchCalled(true)
    context.updateProductList([...filteredProduct])
  }

  const onUpdateSearchQuery = (e) => {
    const query = e.target.value
    setSearchQuery(query)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    context.updateIsSearchCalled(false)
  }

  return (
    <StyledSearchButton>
      <StyledForm>
        <StyledInput
          type="text"
          placeholder="Search..."
          onChange={onUpdateSearchQuery}
          value={searchQuery}
        />
      </StyledForm>
      <StyledButton onClick={handleSearch}>
        <SearchOutlined />
      </StyledButton>
      <StyledButton onClick={handleClearSearch}>Clear</StyledButton>
    </StyledSearchButton>
  )
}

export default Search
