import React from 'react'
import StyledProduct from './Product.styled'
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
  const shoppingCart = useQuery(GET_SHOPPING_CART)
  console.log(shoppingCart)

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
      <div dangerouslySetInnerHTML={{ __html: product?.description }} />
    </Layout>
  )
}

export default withApollo({ ssr: true })(Product)
