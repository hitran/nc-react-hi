import styled from 'styled-components'

const StyledProduct = styled.div`
  margin: 0 20px 0 20px;
  display: grid;
  grid-gap: 20px;
  @media screen and (min-width: 678px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default StyledProduct
