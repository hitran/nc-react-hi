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

function Home(props) {
  const products = props.productList.data
  if (!products || !products.length) {
    return <p>Not found</p>
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
          {products.map((data) => (
            <Card
              key={data.id}
              imageURL={data.image}
              buttonGroups={
                <>
                  <Button onClick={() => Router.push(`/product/${data.id}`)}>View</Button>
                  <Button>Add to Cart</Button>
                </>
              }
            >
              {data.name}
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
      productList,
    },
  }
}

export default Home
