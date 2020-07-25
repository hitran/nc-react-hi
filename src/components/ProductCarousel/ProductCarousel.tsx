import React from 'react'
import { baseImgUrl } from '../../common/constants'
import Carousel from 'react-bootstrap/Carousel'
import { StyledProductCarousel, StyledCarouselImage } from './ProductCarousel.styled'

interface IProductCarouselProps {
  images: string[]
}

const ProductCarousel: React.FC<IProductCarouselProps> = (props) => {
  return (
    <StyledProductCarousel>
      <Carousel>
        {props.images?.map((item, i) => (
          <Carousel.Item key={i}>
            <StyledCarouselImage key={i} src={`${baseImgUrl}${item}`} alt="" />
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledProductCarousel>
  )
}

export default ProductCarousel
