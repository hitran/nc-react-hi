import styled from 'styled-components'

export const StyledAddToCartButton = styled.div`
  border: ${(props) => (props.isHeader ? 'none' : '1px solid black')};
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${(props) => (props.isHeader ? 'transparent' : 'black')};
  justify-content: center;
`
export const StyledAddToCartItem = styled.div`
  color: white;
`
