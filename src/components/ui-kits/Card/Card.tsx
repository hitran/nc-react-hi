import React from 'react'
import Router from 'next/router'
import { ApolloClient } from 'apollo-boost'
import {
  StyledCard,
  StyledCardImage,
  StyledCardBody,
  StyledTitle,
  StyledPrice,
} from './Card.styled'

import { ActionBtnGroup } from '../../ActionBtnGroup'

interface CardProps {
  onClick?(e: any): void
  imageURL: string
  url: string
  name: string
  price: number
  productId: number
}

const Card: React.FC<CardProps> = (props) => {
  const onViewProduct = (): void => {
    Router.push(props.url)
  }
  //console.log(props.client)

  return (
    <StyledCard onClick={props.onClick}>
      <StyledCardImage src={props.imageURL} onClick={onViewProduct} />
      <StyledCardBody>
        <StyledTitle>{props.name}</StyledTitle>
        <StyledPrice>{props.price.toLocaleString()} VND</StyledPrice>
        <ActionBtnGroup productId={props.productId} />
      </StyledCardBody>
    </StyledCard>
  )
}

export default Card
