import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { Card } from '../components/ui-kits/Card'
import { baseUrl } from '../common/constants'

export const HomeContainer = styled.div``

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 15px;

  @media screen and (min-width: 678px) {
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 4%;
  }
`
interface IProduct {
  productId: number
  imgUrl: string
  name: string
  price: number
}

interface IHomeProps {
  data: [IProduct]
}

const Home: React.FC<IHomeProps> = (props) => {
  const products = props.data

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

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/product/?keyword="ao-so-mi-nu"`)
  const productList = await res.json()

  return {
    props: {
      data: productList.data,
    },
  }
}

export default Home
