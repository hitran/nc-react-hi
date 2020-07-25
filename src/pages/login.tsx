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
  border: ${(props) => (props.disabled ? '1px solid gray' : '1px solid black')};
  border-radius: 10px;
  width: 150px;
  padding: 10px;
  margin-top: 20px;
  cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
`
const StyledErrorMsg = styled.p`
  color: orangered;
  font-size: 12px;
`
const USER_NAME = 'Username'
const EMAIL = 'Email'
const PASSWORD = 'Password'

const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isUsernameValid, setIsUsernameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  const isValidInput = (inputVal, inputType) => {
    if (inputType === USER_NAME) {
      if (!inputVal.length) {
        setIsUsernameValid(false)
      } else {
        setIsUsernameValid(true)
      }
    }

    if (inputType === EMAIL) {
      if (!inputVal.length) {
        setIsEmailValid(false)
      } else {
        setIsEmailValid(true)
      }
    }

    if (inputType === PASSWORD) {
      if (!inputVal.length) {
        setIsPasswordValid(false)
      } else {
        setIsPasswordValid(true)
      }
    }
  }

  const handleInputChange = (e, inputType) => {
    const inputVal = e.target.value
    if (!inputType) {
      return
    }

    isValidInput(inputVal, inputType)

    if (inputType === USER_NAME) {
      setUsername(inputVal)
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
          {!isUsernameValid ? <StyledErrorMsg>* This field is required</StyledErrorMsg> : null}
          <StyledInput
            type="text"
            value={username}
            onChange={(e) => handleInputChange(e, USER_NAME)}
          />
          <p>Email *</p>
          {!isEmailValid ? <StyledErrorMsg>* This field is required</StyledErrorMsg> : null}
          <StyledInput type="email" value={email} onChange={(e) => handleInputChange(e, EMAIL)} />

          <p>Password *</p>
          {!isPasswordValid ? <StyledErrorMsg>* This field is required</StyledErrorMsg> : null}
          <StyledInput
            type="password"
            value={password}
            onChange={(e) => handleInputChange(e, PASSWORD)}
          />
        </form>
        <StyledLoginBtn
          disabled={!(username.length > 0 && email.length > 0 && password.length > 0)}
        >
          Login
        </StyledLoginBtn>
      </StyledLogin>
    </Layout>
  )
}

export default Login
