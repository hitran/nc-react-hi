import { gql } from 'apollo-boost'

export const SIGN_IN = gql`
  query SignIn($input: SignInInput!) {
    SignIn(input: $input) {
      accessToken
    }
  }
`
export const SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    SignUp(input: $input) {
      fullName
      email
      accessToken
    }
  }
`
