import React from 'react'
import Router from 'next/router'
import { StyledAnchor } from './Anchor.styled'

interface TextProps {
  children: string
  to?: string
}

const Anchor: React.FC<TextProps> = (props) => {
  const onLinkClick = (destinationURL: string): void => {
    Router.push(destinationURL)
  }
  return <StyledAnchor onClick={() => onLinkClick(props.to)}>{props.children}</StyledAnchor>
}

export default Anchor
