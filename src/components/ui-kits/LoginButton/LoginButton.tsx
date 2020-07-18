import React from 'react'
import { StyledLoginButton } from './LoginButton.styled'
import { UserOutlined } from '@ant-design/icons'

const LoginButton: React.FC = () => {
  return (
    <StyledLoginButton>
      <UserOutlined />
    </StyledLoginButton>
  )
}

export default LoginButton
