import React from 'react'
import {
  StyledCard,
  StyledCardImage,
  StyledCardBody,
  StyledTitle,
  StyledPrice,
  StyledButtonGroup,
} from './Card.styled'

import { FavoriteButton } from '../FavoriteButton'
import Router from 'next/router'
import { AddToCartButton } from '../AddToCartButton'

interface CardProps {
  onClick?(e: any): void
  imageURL: string
  url: string
  name: string
  price: number
}

const Card: React.FC<CardProps> = (props) => {
  const onViewProduct = (): void => {
    Router.push(props.url)
  }

  return (
    <StyledCard onClick={() => onViewProduct()}>
      <StyledCardImage src={props.imageURL} />
      <StyledCardBody>
        <StyledTitle>{props.name}</StyledTitle>
        <StyledPrice>{props.price.toLocaleString()} VND</StyledPrice>
        <StyledButtonGroup>
          <FavoriteButton></FavoriteButton>
          <AddToCartButton></AddToCartButton>
        </StyledButtonGroup>
      </StyledCardBody>
    </StyledCard>
  )
}

export default Card
