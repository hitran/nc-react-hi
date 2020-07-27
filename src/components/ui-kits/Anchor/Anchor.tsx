import React from 'react'
import Router from 'next/router'
import { StyledAnchor } from './Anchor.styled'

interface TextProps {
  children: React.ReactChild
  to?: string
  as?: string
}

const Anchor: React.FC<TextProps> = (props) => {
  const onLinkClick = () => {
    const href = props.to
    const as = props.as || href
    Router.push(href, as, { shallow: true })
  }
  return <StyledAnchor onClick={onLinkClick}>{props.children}</StyledAnchor>
}

export default Anchor
