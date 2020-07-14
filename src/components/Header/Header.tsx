import React from 'react'
import Link from 'next/link'
import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderButton,
  StyledHeaderMenuItem,
} from './Header.styled'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo>LOGO</StyledHeaderLogo>
      <StyledHeaderMenu>
        <StyledHeaderMenuItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <Link href="/product/4477805">
            <a>Products</a>
          </Link>
        </StyledHeaderMenuItem>
      </StyledHeaderMenu>
      <StyledHeaderButton>Login</StyledHeaderButton>
    </StyledHeader>
  )
}

export default Header
