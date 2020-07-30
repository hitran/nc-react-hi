import styled from 'styled-components'

export const StyledAddToCartButton = styled.div`
  border: ${(props) => (props.isHeader ? 'none' : '1px solid black')};
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${(props) => (props.isHeader ? 'transparent' : 'black')};
  justify-content: center;
  position: relative;
`
export const StyledAddToCartItem = styled.div`
  color: white;
`

export const StyledCartLabel = styled.span`
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -9px;
  right: -6px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`
