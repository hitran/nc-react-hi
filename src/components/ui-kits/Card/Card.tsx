import React, { useContext } from 'react'
import Link from 'next/link'
import {
  StyledCard,
  StyledCardImage,
  StyledCardBody,
  StyledTitle,
  StyledPrice,
} from './Card.styled'

import { ActionBtnGroup } from '../../ActionBtnGroup'
import Router from 'next/router'
import Context from '../../../utils/context'

interface CardProps {
  onClick?(e: any): void
  imageURL: string
  name: string
  price: number
  productId: number
}

const Card: React.FC<CardProps> = (props) => {
  const context = useContext(Context)
  const onViewProduct = (): void => {
    sessionStorage && sessionStorage.setItem('data', JSON.stringify(context))
    Router.push(`/product/${props.productId}`)
  }

  return (
    <StyledCard>
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
