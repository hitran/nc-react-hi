import React from 'react'
import { StyledDropdown, StyledDropdownWrapper, StyledDropdownItem } from './DropdownMenu.styled'

interface DropdownItem {
  label: string
  href?: string
}

interface DropdownMenuProps {
  label: string
  dropdownItems: DropdownItem[]
}

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  return (
    <StyledDropdown>
      {props.label}
      <StyledDropdownWrapper>
        {props.dropdownItems.map((item, i) => (
          <StyledDropdownItem key={i}>{item.label}</StyledDropdownItem>
        ))}
      </StyledDropdownWrapper>
    </StyledDropdown>
  )
}

export default DropdownMenu
