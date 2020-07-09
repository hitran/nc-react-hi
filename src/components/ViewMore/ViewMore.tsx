import React from 'react'
import Router from 'next/router'
import { Button } from '../ui-kits/Button'

export interface ViewMoreProps {
  productId: number
}
const ViewMore: React.FC<ViewMoreProps> = ({ productId }) => {
  const viewMore = () => {
    Router.push({
      query: `/${productId}`,
    })
  }

  return <Button onClick={() => viewMore()}>View</Button>
}

export default ViewMore
