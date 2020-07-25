import styled from 'styled-components'

export const StyledActionBtnGroup = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr;
  height: 40px;
  @media screen and (min-width: 678px) {
    width: 250px;
    margin: 30px 0;
  }
`
