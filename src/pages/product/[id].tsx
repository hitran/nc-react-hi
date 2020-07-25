import React, { useState } from 'react'
import { StyledProduct, StyledProductContent, StyledReadMoreBtn } from './Product.styled'
import { Layout } from '../../components/Layout'
import { ProductDetail } from '../../components/ProductDetail'
import { ProductCarousel } from '../../components/ProductCarousel'
import withApollo from '../../utils/withApollo'
import { GET_PRODUCT_DETAILS, GET_SHOPPING_CART } from '../../graphql/product/product.query'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

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
  // const shoppingCart = useQuery(GET_SHOPPING_CART)
  // console.log(shoppingCart)

  const toggleIsReadMore = () => {
    console.log(!isReadMore)
    const newIsReadMoreState = !isReadMore
    setIsReadMore(newIsReadMoreState)
  }
  return (
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
  )
}

export default withApollo({ ssr: true })(Product)
