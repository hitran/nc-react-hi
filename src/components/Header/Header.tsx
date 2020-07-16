import React, { useState } from 'react'
import Link from 'next/link'
import {
  StyledHeader,
  StyledMenu,
  StyledMenuItem,
  StyledLink,
  StyledTopMenu,
  StyledHeaderLogo,
  StyledHeaderButton,
  ButtonItem,
} from './Header.styled'

const Header: React.FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const toggleMenu = () => {
    const newMenuState = !isMenuShown
    setIsMenuShown(newMenuState)
    console.log(isMenuShown)
  }

  return (
    <StyledHeader>
      <StyledHeaderButton onClick={() => toggleMenu()} isMenuShown>
        <ButtonItem></ButtonItem>
        <ButtonItem></ButtonItem>
        <ButtonItem></ButtonItem>
      </StyledHeaderButton>
      <StyledTopMenu>
        <StyledHeaderLogo>
          <img src="/logo.png" alt="logo" />
        </StyledHeaderLogo>
        <StyledMenu>
          <StyledMenuItem>
            <Link href="/">
              <StyledLink>Home</StyledLink>
            </Link>
          </StyledMenuItem>

          <StyledMenuItem position="right">
            <Link href="/">
              <StyledLink>Product</StyledLink>
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link href="/">
              <StyledLink>Cart</StyledLink>
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link href="/">
              <StyledLink>Favorite</StyledLink>
            </Link>
          </StyledMenuItem>
        </StyledMenu>
      </StyledTopMenu>

      <StyledMenu>
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>Search</StyledLink>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>Login</StyledLink>
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </StyledHeader>
  )
}

export default Header
