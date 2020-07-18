import styled from 'styled-components'

export const StyledFavoriteButton = styled.div`
  border: ${(props) => (props.isHeader ? 'none' : '1px solid black')};
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  box-sizing: border-box;
`
