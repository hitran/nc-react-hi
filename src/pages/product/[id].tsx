import React from 'react'
import { baseUrl } from '../../common/constants'
import StyledProduct from './Product.styled'
import { Layout } from '../../components/Layout'

export interface IProductDetail {
  description: string
  name: string
}

export interface PropductDetailProps {
  product: IProductDetail
}

const ProductDetail: React.FC<PropductDetailProps> = (props) => {
  return (
    <Layout>
      <StyledProduct>
        <h1>{props.product?.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.product?.description }} />
      </StyledProduct>
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

export default ProductDetail
