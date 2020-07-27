import React, { useState } from 'react'
import { DropdownMenu } from '../ui-kits/DropdownMenu'
import { FavoriteButton } from '../ui-kits/FavoriteButton'
import { AddToCartButton } from '../ui-kits/AddToCartButton'
import { Anchor } from '../ui-kits/Anchor'
import SearchButton from '../SearchButton/SearchButton'
import { LoginButton } from '../ui-kits/LoginButton'
import { MenuButton } from '../ui-kits/MenuButton'
import {
  StyledHeader,
  StyledMenuItem,
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
          <Anchor to="/">Home</Anchor>
        </StyledMenuItem>

        <StyledMenuItem>
          <Anchor to="/">Clothing</Anchor>
        </StyledMenuItem>

        <StyledMenuItem>
          <Anchor to="/">Shoes</Anchor>
        </StyledMenuItem>

        <DropdownMenu label="Categories" dropdownItems={categoriesItems} />
      </StyledMenuLeft>

      <StyledMenuCenter>
        <Anchor to="/">
          <img src="/logo.png" alt="logo" />
        </Anchor>
      </StyledMenuCenter>

      <StyledMenuRight>
        <StyledMenuItem>
          <Anchor to="/">
            <FavoriteButton isHeader={true} />
          </Anchor>
        </StyledMenuItem>

        <StyledMenuItem onClick={() => onOpenSearch()}>
          <Anchor to="/">
            <SearchButton />
          </Anchor>
        </StyledMenuItem>

        <StyledMenuItem>
          <Anchor to="/login">
            <LoginButton />
          </Anchor>
        </StyledMenuItem>

        <StyledMenuItem>
          <Anchor to="/">
            <AddToCartButton isHeader={true} />
          </Anchor>
        </StyledMenuItem>
      </StyledMenuRight>
    </StyledHeader>
  )
}

export default Header
