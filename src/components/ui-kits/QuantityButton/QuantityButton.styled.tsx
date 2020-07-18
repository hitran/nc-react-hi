import styled from 'styled-components'

export const StyledQuantityButton = styled.div`
  display: grid;
  grid-template-areas: 'subtractBtn quantityText addBtn';
`

export const StyledAddButton = styled.div`
  grid-area: addBtn;
`

export const StyledSubtractButton = styled.div`
  grid-area: subtractBtn;
`

export const StyledQuantityText = styled.div`
  grid-area: quantityText;
`
