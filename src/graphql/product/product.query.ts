import { gql } from 'apollo-boost'

export const GET_PRODUCTS = gql`
  query getAllProduct($input: GetAllProductInput!) {
    getAllProduct(input: $input) {
      data {
        id
        sku
        name
        price
        finalPrice
        promotionPercent
        namePath
        imgUrl
      }
    }
  }
`
export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetail($input: GetProductDetailInput!) {
    getProductDetail(input: $input) {
      id
      name
      imgUrl
      description
    }
  }
`

export const QUERY_TODO = gql`
  query ReadTodo($id: Int!) {
    todo(id: $id) {
      id
      text
      completed
    }
  }
`
