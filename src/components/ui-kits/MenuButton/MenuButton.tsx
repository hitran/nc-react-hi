import React from 'react'
import { StyledMenuButton } from './MenuButton.styled'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

interface MenuButtonProps {
  isClosed?: boolean
  onClick(e: React.MouseEvent<HTMLElement>)
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <StyledMenuButton onClick={props.onClick} isClosed={props.isClosed}>
      {props.isClosed ? (
        <CloseOutlined style={{ fontSize: '25px' }} />
      ) : (
        <MenuOutlined style={{ fontSize: '25px' }} />
      )}
    </StyledMenuButton>
  )
}

export default MenuButton
