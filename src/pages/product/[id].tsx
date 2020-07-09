import React from 'react'
import { baseUrl } from '../../common/constants'
import StyledProduct from './Product.styled'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export interface IProductDetail {
  description: string
}
export interface PropductDetailProps {
  product: IProductDetail
}
const ProductDetail: React.FC<PropductDetailProps> = (props) => {
  return (
    <>
      <Header />
      <StyledProduct dangerouslySetInnerHTML={{ __html: props.product?.description }} />
      <Footer />
    </>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch(`${baseUrl}/product/`)
//   const productList = await res.json()

//   const paths = productList.data.map((product) => ({
//     params: { id: product.id },
//   }))

//   return { paths, fallback: true }
// }

export async function getStaticProps({ params }) {
  const { id } = params
  const res = await fetch(`${baseUrl}/product/${id}`)
  const product = await res.json()

  return {
    props: {
      product,
    },
  }
}

export default ProductDetail
