import React, { useState } from 'react'
import styled from 'styled-components'
import { Layout } from '../../components/Layout'
import { ProductDetail } from '../../components/ProductDetail'
import { ProductCarousel } from '../../components/ProductCarousel'
import { GET_PRODUCT_DETAILS } from '../../graphql/product/product.query'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import withApollo from '../../utils/withApollo'
import Head from 'next/head'

/* TODO: Move Styles to a separate file */
export const StyledContent = styled.div`
  @media screen and (min-width: 678px) {
    margin: 0 10%;
  }
`
export const StyledProduct = styled(StyledContent)`
  display: grid;
  grid-gap: 50px;
  @media screen and (min-width: 678px) {
    grid-template-columns: 1fr 1fr;
  }
`
export const StyledReadMoreBtn = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-in-out;
  }
`
export const StyledProductContent = styled(StyledContent)`
  height: ${(props) => (props.isReadMore ? '100%' : '600px')};
  overflow: hidden;
`
export interface IProductDetail {
  description: string
  name: string
  images: string[]
  price: number
}

interface PropductDetailProps {
  product: IProductDetail
}

const Product = () => {
  const [isReadMore, setIsReadMore] = useState(false)
  const router = useRouter()
  const { id } = router.query
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: {
      input: {
        id: id,
      },
    },
  })

  if (loading) return null
  if (error) return `Error! ${error}`
  const product = data?.getProductDetail
  if (!product) {
    return <p>Not found</p>
  }

  const toggleIsReadMore = () => {
    console.log(!isReadMore)
    const newIsReadMoreState = !isReadMore
    setIsReadMore(newIsReadMoreState)
  }
  return (
    <>
      <Head>
        <title>Lezada | {product?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StyledProduct>
          <ProductCarousel images={product?.images} />
          <ProductDetail
            productName={product?.name}
            productPrice={product?.price}
            sku={product?.sku}
          />
        </StyledProduct>
        <StyledProductContent
          dangerouslySetInnerHTML={{ __html: product?.description }}
          isReadMore={isReadMore}
        />
        <StyledReadMoreBtn onClick={toggleIsReadMore}>
          {isReadMore ? 'Show Less' : 'Show More'}
        </StyledReadMoreBtn>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: false })(Product)
