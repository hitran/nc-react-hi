import React from 'react'
import { StyledText } from './Text.styled'

interface TextProps {
  children: string
  role?: string
  onClick?(e: React.MouseEvent<HTMLElement>)
}

const Text: React.FC<TextProps> = (props) => {
  return <StyledText onClick={props.onClick}>{props.children}</StyledText>
}

export default Text
