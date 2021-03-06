import styled from 'styled-components'

export const StyledCard = styled.div`
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 10px;
`
export const StyledText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
`

export const StyledCardImage = styled.img`
  justify-self: center;
`

export const StyledCardBody = styled.div``

export const StyledTitle = styled(StyledText)`
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1.5;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`

export const StyledPrice = styled(StyledText)``
