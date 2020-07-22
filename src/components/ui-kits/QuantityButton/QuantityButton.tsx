import React from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import {
  StyledQuantityButton,
  StyledAddButton,
  StyledSubtractButton,
  StyledQuantityText,
} from './QuantityButton.styled'

const QuantityButton = () => {
  return (
    <StyledQuantityButton>
      <StyledAddButton>
        <PlusOutlined />
      </StyledAddButton>

      <StyledQuantityText>1</StyledQuantityText>

      <StyledSubtractButton>
        <MinusOutlined />
      </StyledSubtractButton>
    </StyledQuantityButton>
  )
}

export default QuantityButton
