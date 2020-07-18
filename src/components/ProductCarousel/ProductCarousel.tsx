import React from 'react'
import { baseImgUrl } from '../../common/constants'
import Carousel from 'react-bootstrap/Carousel'
import { StyledProductCarousel } from './ProductCarousel.styled'

interface IProductCarouselProps {
  imageList: string[]
}

const ProductCarousel: React.FC<IProductCarouselProps> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <StyledProductCarousel>
      <Carousel {...settings}>
        {props.imageList.map((imgUrl, i) => (
          <Carousel.Item key={i}>
            <img key={i} src={`${baseImgUrl}${imgUrl}`} alt="" />
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledProductCarousel>
  )
}

export default ProductCarousel
