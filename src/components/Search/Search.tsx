import React from 'react'
import { StyledSearchWrapper } from './Search.styled'

// interface ISearchProps {
//   isSearchShown: boolean
// }
const Search = (props) => {
  return <StyledSearchWrapper isSearchShown={props.isSearchShown}></StyledSearchWrapper>
}

export default Search
