import styled from 'styled-components'

export const StyledQuantityButton = styled.div`
  display: grid;
  grid-template-areas: 'subtractBtn quantityText addBtn';
`
export const StyledBtn = styled.div`
  padding: 10px 0;
  width: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`

export const StyledAddButton = styled(StyledBtn)`
  grid-area: addBtn;
  @media screen and (min-width: 678px) {
    justify-content: flex-end;
    margin: 0;
  }
`

export const StyledSubtractButton = styled(StyledBtn)`
  grid-area: subtractBtn;
  @media screen and (min-width: 678px) {
    justify-content: flex-start;
    margin: 0;
  }
`

export const StyledQuantityText = styled.div`
  grid-area: quantityText;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 678px) {
    justify-content: flex-start;
  }
`
