import React, { useState } from 'react'
import Link from 'next/link'
import { DropdownMenu } from '../ui-kits/DropdownMenu'
import { FavoriteButton } from '../ui-kits/FavoriteButton'
import { AddToCartButton } from '../ui-kits/AddToCartButton'
import { SearchButton } from '../ui-kits/SearchButton'
import { LoginButton } from '../ui-kits/LoginButton'
import { MenuButton } from '../ui-kits/MenuButton'
import {
  StyledHeader,
  StyledMenuItem,
  StyledLink,
  StyledMenuLeft,
  StyledMenuRight,
  StyledMenuCenter,
} from './Header.styled'

const Header: React.FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const [isSearchShown, setIsSearchShown] = useState(false)

  const toggleMenu = () => {
    const newMenuState = !isMenuShown
    setIsMenuShown(newMenuState)
    //console.log(isMenuShown)
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

  const onOpenSearch = () => {
    const newSearchState = !isSearchShown
    setIsSearchShown(newSearchState)
  }

  return (
    <StyledHeader>
      <MenuButton onClick={() => toggleMenu()} />

      <StyledMenuLeft isMenuShown={isMenuShown}>
        <MenuButton onClick={toggleMenu} isClosed={true} />

        <StyledMenuItem>
          <Link href="/">
            <StyledLink>Home</StyledLink>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>Clothing</StyledLink>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>Shoes</StyledLink>
          </Link>
        </StyledMenuItem>
        <DropdownMenu label="Categories" dropdownItems={categoriesItems} />
      </StyledMenuLeft>

      <StyledMenuCenter>
        <Link href="/">
          <StyledLink>
            <img src="/logo.png" alt="logo" />
          </StyledLink>
        </Link>
      </StyledMenuCenter>

      <StyledMenuRight>
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>
              <FavoriteButton isHeader={true} />
            </StyledLink>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={() => onOpenSearch()}>
          <Link href="">
            <StyledLink>
              <SearchButton />
            </StyledLink>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>
              <LoginButton />
            </StyledLink>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/">
            <StyledLink>
              <AddToCartButton isHeader={true} />
            </StyledLink>
          </Link>
        </StyledMenuItem>
      </StyledMenuRight>
    </StyledHeader>
  )
}

export default Header
