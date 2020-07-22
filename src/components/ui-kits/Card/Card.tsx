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

import { ActionBtnGroup } from '../ActionBtnGroup'

interface CardProps {
  onClick?(e: any): void
  imageURL: string
  url: string
  name: string
  price: number
  // client: ApolloClient<any>
}

const Card: React.FC<CardProps> = (props) => {
  const onViewProduct = (): void => {
    Router.push(props.url)
  }
  //console.log(props.client)

  return (
    <StyledCard>
      <StyledCardImage src={props.imageURL} onClick={onViewProduct} />
      <StyledCardBody>
        <StyledTitle>{props.name}</StyledTitle>
        <StyledPrice>{props.price.toLocaleString()} VND</StyledPrice>
        <ActionBtnGroup />
      </StyledCardBody>
    </StyledCard>
  )
}

export default Card
