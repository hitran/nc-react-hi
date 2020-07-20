import React from 'react'
import StyledProduct from './Product.styled'
import { Layout } from '../../components/Layout'
import { ProductDetail } from '../../components/ProductDetail'
import { ProductCarousel } from '../../components/ProductCarousel'
import withApollo from '../../utils/withApollo'
import { GET_PRODUCT_DETAILS } from '../../graphql/product/product.query'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

export interface IProductDetail {
  description: string
  name: string
  images: string[]
}

export interface PropductDetailProps {
  product: IProductDetail
}

const Product: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: {
      input: {
        id: parseInt(id, 10),
      },
    },
  })

  const product = data?.getProductDetail
  if (!product) {
    return <p>Not found</p>
  }

  return (
    <Layout>
      <h1>{product?.name}</h1>
      <StyledProduct>
        <ProductCarousel media={product?.media} />
        <ProductDetail />
      </StyledProduct>
      <div dangerouslySetInnerHTML={{ __html: product?.description }} />
    </Layout>
  )
}

export default withApollo({ ssr: true })(Product)
