import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import Router from 'next/router'
import Button from '../components/ui-kits/Button/Button'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
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
  id: number
  image: string
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
    Router.push(`/product/${product.id}`)
  }

  const onAddToCart = (id: number): void => {
    console.log(id)
  }

  return (
    <>
      <Head>
        <title>STRANGS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <StyledHomeBody>
          {products.map((product) => (
            <Card
              key={product.id}
              imageURL={product.image}
              buttonGroups={
                <>
                  <Button onClick={() => onViewProduct(product)}>View</Button>
                  <Button onClick={() => onAddToCart(product.id)}>Add to Cart</Button>
                </>
              }
            >
              {product.name}
            </Card>
          ))}
        </StyledHomeBody>
      </Layout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/product/`)
  const productList = await res.json()

  return {
    props: {
      data: productList.data,
    },
  }
}

export default Home
