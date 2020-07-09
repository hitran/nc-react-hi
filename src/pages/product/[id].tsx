import React from 'react'
import { useRouter } from 'next/router'

const ProductDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return <p>ProductDetail: {id}</p>
}

export default ProductDetail