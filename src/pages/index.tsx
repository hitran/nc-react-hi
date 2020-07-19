import React from 'react'
import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { Card } from '../components/ui-kits/Card'
import { GET_PRODUCTS } from '../graphql/product/product.query'

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
  // const products = props.data

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        keyword: 'samsung',
        page: 1,
      },
    },
  })

  const products = data?.getAllProduct?.data
  if (!products || !products.length) {
    return <p>Not found</p>
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
              key={product.productId}
              imageURL={product.imgUrl}
              url={`/product/${product.productId}`}
              name={product.name}
              price={product.price}
            />
          ))}
        </StyledHomeBody>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
