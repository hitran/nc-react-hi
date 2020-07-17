import styled from 'styled-components'

export const StyledMenuItem = styled.li`
  text-align: center;
  position: relative;
  padding: 10px;
  list-style-type: none;
`

export const StyledDropdownWrapper = styled.ul`
  position: absolute;
  top: 101%;
  left: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  opacity: 0;
`

export const StyledDropdown = styled(StyledMenuItem)`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #7e7e7e;
`

export const StyledDropdownItem = styled.li``
