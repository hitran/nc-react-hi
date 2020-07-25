import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import styled from 'styled-components'

const StyledLogin = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`
const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  width: 300px;
  border: 1px solid gray;
  margin-bottom: 10px;
`
const StyledLoginBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  width: 150px;
  padding: 10px;
  margin-top: 20px;
`
const StyledErrorMsg = styled.p`
  color: orangered;
  font-size: 12px;
`
const USER_NAME = 'Username'
const EMAIL = 'Email'
const PASSWORD = 'Password'
const Login = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isInputValid, setIsInputValid] = useState(true)

  const isValidInput = (inputVal) => {
    if (!inputVal.length) {
      setIsInputValid(false)
    } else {
      setIsInputValid(true)
    }
  }

  const handleInputChange = (e, inputType) => {
    const inputVal = e.target.value
    if (!inputType) {
      return
    }

    isValidInput(inputVal)

    if (inputType === USER_NAME) {
      setUserName(inputVal)
    } else if (inputType === EMAIL) {
      setEmail(inputVal)
    } else if (inputType === PASSWORD) {
      setPassword(inputVal)
    }
  }

  return (
    <Layout>
      <StyledLogin>
        <h3>LOGIN</h3>
        <form>
          <p>Username *</p>
          {!isInputValid ? <StyledErrorMsg>This field is required</StyledErrorMsg> : null}
          <StyledInput
            type="text"
            value={userName}
            onChange={(e) => handleInputChange(e, USER_NAME)}
          />
          <p>Email *</p>
          {!isInputValid ? <StyledErrorMsg>This field is required</StyledErrorMsg> : null}
          <StyledInput type="email" value={email} onChange={(e) => handleInputChange(e, EMAIL)} />

          <p>Password *</p>
          {!isInputValid ? <StyledErrorMsg>This field is required</StyledErrorMsg> : null}
          <StyledInput
            type="password"
            value={password}
            onChange={(e) => handleInputChange(e, PASSWORD)}
          />
        </form>
        <StyledLoginBtn>Login</StyledLoginBtn>
      </StyledLogin>
    </Layout>
  )
}

export default Login
