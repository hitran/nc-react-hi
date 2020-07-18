import React from 'react'
import { StyledLoginButton } from './LoginButton.styled'
import { UserOutlined } from '@ant-design/icons'

const LoginButton = () => {
  return (
    <StyledLoginButton>
      <UserOutlined />
    </StyledLoginButton>
  )
}

export default LoginButton
