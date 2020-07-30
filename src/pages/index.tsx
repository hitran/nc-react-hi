import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { Card } from '../components/ui-kits/Card'
import Context from '../utils/context'
import { useQuery } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import { GET_PRODUCTS } from '../graphql/product/product.query'
import Search from '../components/Search/Search'
import { Tag } from '../components/ui-kits/Tag'

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

const Home = () => {
  const context = useContext(Context)
  useEffect(() => {
    if (sessionStorage && sessionStorage.data) {
      const data = JSON.parse(sessionStorage.getItem('data'))
      context.setCartFromStorage([...data.shoppingCart])
    }
    console.log('home useEffect called')
  }, [])

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        keyword: 'samsung',
        page: 1,
      },
    },
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return null
  if (error) return context.updateProductList([])
  if (data && !context.isSearchCalled) {
    console.log('re update product list')
    context.updateProductList(data.getAllProduct?.data)
  }

  return (
    <>
      <Head>
        <title>Lezada | Biggest Online Ecommerce Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <Search />
          <Tag />
          <StyledHomeBody>
            {(!context.productList || !context.productList.length) && <p>Not found</p>}
            {context.productList &&
              context.productList.length > 0 &&
              context.productList.map((product) => (
                <Card
                  key={product.id}
                  imageURL={product.imgUrl}
                  name={product.name}
                  price={product.price}
                  productId={product.id}
                />
              ))}
          </StyledHomeBody>
        </>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
