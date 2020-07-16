import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import Router from 'next/router'
import Button from '../components/ui-kits/Button/Button'
import { Card } from '../components/ui-kits/Card'
import { baseUrl } from '../common/constants'

export const HomeContainer = styled.div``

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px;
`
interface IProduct {
  product_id: number
  img_url: string
  name: string
}

interface IHomeProps {
  data: [IProduct]
}

const Home: React.FC<IHomeProps> = (props) => {
  const products = props.data

  if (!products || !products.length) {
    return <p>Not found</p>
  }

  const onViewProduct = (product: IProduct): void => {
    Router.push(`/product/${product.product_id}`)
  }

  const onAddToCart = (id: number): void => {
    console.log(id)
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
              key={product.product_id}
              imageURL={product.img_url}
              buttonGroups={
                <>
                  <Button onClick={() => onViewProduct(product)}>View</Button>
                  <Button onClick={() => onAddToCart(product.product_id)}>Add to Cart</Button>
                </>
              }
            >
              {product.name} - {product.product_id}
            </Card>
          ))}
        </StyledHomeBody>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/product/`)
  const productList = await res.json()

  return {
    props: {
      data: productList,
    },
  }
}

export default Home
