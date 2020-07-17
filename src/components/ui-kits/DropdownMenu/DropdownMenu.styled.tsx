import styled from 'styled-components'

export const StyledMenuItem = styled.div`
  border: 1px solid black;
  text-align: center;
  position: relative;
`

export const StyledDropdownWrapper = styled.div`
  position: absolute;
  top: 101%;
  left: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  opacity: 0;
`

export const StyledDropdown = styled(StyledMenuItem)`
  &:hover ${StyledDropdownWrapper} {
    opacity: 1;
  }
`

export const StyledDropdownItem = styled(StyledMenuItem)``
