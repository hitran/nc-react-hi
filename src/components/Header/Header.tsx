import React, { useState } from 'react'
import Link from 'next/link'
import { DropdownMenu } from '../ui-kits/DropdownMenu'
import {
  StyledHeader,
  StyledMenuItem,
  StyledLink,
  StyledBurgerButton,
  StyledCloseButton,
  ButtonItem,
  StyledMenuLeft,
  StyledMenuRight,
  StyledMenuCenter,
} from './Header.styled'

const Header: React.FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const toggleMenu = () => {
    const newMenuState = !isMenuShown
    setIsMenuShown(newMenuState)
    console.log(isMenuShown)
  }

  const categoriesItems = [
    {
      label: 'Clothing',
      href: '/',
    },
    {
      label: 'Shoes',
      href: '/',
    },
  ]

  return (
    <StyledHeader>
      <StyledBurgerButton onClick={() => toggleMenu()}>
        <ButtonItem></ButtonItem>
        <ButtonItem></ButtonItem>
        <ButtonItem></ButtonItem>
      </StyledBurgerButton>

      <StyledMenuLeft isMenuShown={isMenuShown}>
        <StyledCloseButton isMenuShown={isMenuShown} onClick={() => toggleMenu()}>
          <ButtonItem></ButtonItem>
          <ButtonItem></ButtonItem>
          <ButtonItem></ButtonItem>
        </StyledCloseButton>
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>Home</StyledLink>
          </Link>
        </StyledMenuItem>
        <DropdownMenu label="Categories" dropdownItems={categoriesItems} />
      </StyledMenuLeft>

      <StyledMenuCenter>
        <img src="/logo.png" alt="logo" />
      </StyledMenuCenter>

      <StyledMenuRight>
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>Favorite</StyledLink>
          </Link>
        </StyledMenuItem>
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
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>Cart</StyledLink>
          </Link>
        </StyledMenuItem>
      </StyledMenuRight>
    </StyledHeader>
  )
}

export default Header
