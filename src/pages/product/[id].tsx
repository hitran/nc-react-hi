import React from 'react'
import { baseUrl } from '../../common/constants'
import StyledProduct from './Product.styled'
import { Layout } from '../../components/Layout'
import { ProductDetail } from '../../components/ProductDetail'
import { ProductCarousel } from '../../components/ProductCarousel'

export interface IProductDetail {
  description: string
  name: string
  images: string[]
}

export interface PropductDetailProps {
  product: IProductDetail
}

const Product: React.FC<PropductDetailProps> = (props) => {
  return (
    <Layout>
      <h1>{props.product?.name}</h1>
      <StyledProduct>
        <ProductCarousel imageList={props.product?.images} />
        <ProductDetail />
      </StyledProduct>
      <div dangerouslySetInnerHTML={{ __html: props.product?.description }} />
    </Layout>
  )
}
export async function getStaticPaths() {
  const res = await fetch(`${baseUrl}/product/?keyword="ao-so-mi-nu"`)
  const productList = await res.json()

  const paths = productList.data.map((product) => ({
    params: { id: product.productId.toString() },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const res = await fetch(`${baseUrl}/product/${id}/`)
  const product = await res.json()

  return {
    props: {
      product,
    },
  }
}

export default Product
