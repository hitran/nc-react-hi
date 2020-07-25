import styled from 'styled-components'

export const StyledContent = styled.div`
  @media screen and (min-width: 678px) {
    margin: 0 10%;
  }
`

export const StyledProduct = styled(StyledContent)`
  display: grid;
  grid-gap: 50px;
  @media screen and (min-width: 678px) {
    grid-template-columns: 1fr 1fr;
  }
`
export const StyledReadMoreBtn = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-in-out;
  }
`
export const StyledProductContent = styled(StyledContent)`
  height: ${(props) => (props.isReadMore ? '100%' : '600px')};
  overflow: hidden;
`
