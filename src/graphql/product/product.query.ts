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
      images
      price
      sku
    }
  }
`
export const GET_SHOPPING_CART = gql`
  query GetShoppingCart {
    shoppingCart @client
  }
`

export const SET_SHOPPING_CART = gql`
  mutation UpdateCart($id: String!, $quantity: String!) {
    updateCart(id: $id, quantity: $quantity) {
      id
      quantity
    }
  }
`