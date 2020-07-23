import React from 'react'
import Head from 'next/head'
import { useQuery, useApolloClient, ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { Card } from '../components/ui-kits/Card'
import { GET_PRODUCTS, GET_SHOPPING_CART } from '../graphql/product/product.query'

export const HomeContainer = styled.div``

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 15px;

  @media screen and (min-width: 678px) {
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 30px;
  }
`

const Home: React.FC = () => {
  const client = useApolloClient()
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        keyword: 'samsung',
        page: 1,
      },
    },
  })

  if (loading) return null
  if (error) return `Error! ${error}`
  const products = data?.getAllProduct?.data

  if (!products || !products.length) {
    return <p>Not found</p>
  }

  const updateCurrentProduct = (id) => {
    sessionStorage.setItem("currentProductId", id)
  }

  return (
    <>
      <Head>
        <title>Lezada | Biggest Online Ecommerce Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StyledHomeBody>
          {products.map((product) => (
            <Card
              key={product.id}
              imageURL={product.imgUrl}
              url={`/product/${product.id}`}
              name={product.name}
              price={product.price}
              onClick={() => updateCurrentProduct(product.id)}
              productId={product.id}
            />
          ))}
        </StyledHomeBody>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
