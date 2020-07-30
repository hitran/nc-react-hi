import React, { useState } from 'react'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { SIGN_UP } from '../graphql/product/login.query'
import withApollo from '../utils/withApollo'
import Router from 'next/router'

/* TODO: Move Styles to a separate file */
const StyledRegister = styled.div`
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
const StyledRegisterBtn = styled.button`
  border: ${(props) => (props.disabled ? '1px solid gray' : '1px solid black')};
  border-radius: 10px;
  width: 150px;
  padding: 10px;
  margin: 20px 0;
  cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
`
const StyledErrorMsg = styled.p`
  color: orangered;
  font-size: 12px;
`

const StyledSignUp = styled.p`
  text-align: center;
  text-decoration: underline;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`

const StyledRegisterMsg = styled(StyledErrorMsg)`
  font-size: 16px;
`
const FULLNAME = 'Fullname'
const EMAIL = 'Email'
const PASSWORD = 'Password'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isUsernameValid, setIsUsernameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [isRegisterError, setIsRegisterError] = useState(false)

  const [register] = useMutation(SIGN_UP, {
    variables: {
      input: {
        fullName: fullName,
        email: email,
        password: `${password}`,
      },
    },
  })

  const isValidInput = (inputVal, inputType) => {
    if (inputType === FULLNAME) {
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

    if (inputType === FULLNAME) {
      setFullName(inputVal)
    } else if (inputType === EMAIL) {
      setEmail(inputVal)
    } else if (inputType === PASSWORD) {
      setPassword(inputVal)
    }
  }

  const onRegister = async () => {
    try {
      await register()
      Router.push('/')
    } catch (err) {
      setIsRegisterError(true)
    }
  }

  return (
    <>
      <Head>
        <title>Lezada | Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StyledRegister>
          {isRegisterError ? (
            <StyledRegisterMsg>Something went wrong... Register again?</StyledRegisterMsg>
          ) : null}
          <h3>REGISTER</h3>
          <form>
            <p>Username *</p>
            {!isUsernameValid ? <StyledErrorMsg>* This field is required</StyledErrorMsg> : null}
            <StyledInput
              type="text"
              value={fullName}
              onChange={(e) => handleInputChange(e, FULLNAME)}
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
          <StyledRegisterBtn
            disabled={!(fullName.length > 0 && email.length > 0 && password.length > 0)}
            onClick={onRegister}
          >
            Register
          </StyledRegisterBtn>
        </StyledRegister>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Register)
