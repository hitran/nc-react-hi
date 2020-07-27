import React from 'react'
import Link from 'next/link'
import {
  StyledCard,
  StyledCardImage,
  StyledCardBody,
  StyledTitle,
  StyledPrice,
} from './Card.styled'

import { ActionBtnGroup } from '../../ActionBtnGroup'
import { Anchor } from '../Anchor'

interface CardProps {
  onClick?(e: any): void
  imageURL: string
  name: string
  price: number
  productId: number
}

const Card: React.FC<CardProps> = (props) => {
  // const onViewProduct = (): void => {
  //   Router.push(props.url)
  // }
  //console.log(props.client)

  return (
    <StyledCard>
      <Link href={`/product/${props.productId}`} replace>
        <a>
          <StyledCardImage src={props.imageURL} />
        </a>
      </Link>

      <StyledCardBody>
        <StyledTitle>{props.name}</StyledTitle>
        <StyledPrice>{props.price.toLocaleString()} VND</StyledPrice>
        <ActionBtnGroup productId={props.productId} />
      </StyledCardBody>
    </StyledCard>
  )
}

export default Card
