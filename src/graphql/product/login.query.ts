import { gql } from 'apollo-boost'

export const SIGN_IN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
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
