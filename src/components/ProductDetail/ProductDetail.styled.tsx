import styled from 'styled-components'

export const StyledProductDetail = styled.div`
  @media screen and (max-width: 677px) {
    display: grid;
    grid-gap: 30px;
  }
`
export const StyledProductName = styled.p`
  font-size: 20px;
`
export const StyledPrice = styled.p`
  color: orangered;
  font-size: 20px;
`
export const StyledBtnGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  grid-gap: 20px;
`
