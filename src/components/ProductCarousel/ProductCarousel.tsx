import React from 'react'
import { baseImgUrl } from '../../common/constants'
import Carousel from 'react-bootstrap/Carousel'
import { StyledProductCarousel } from './ProductCarousel.styled'

interface IProductMedia {
  image: string
  type: string
}

interface IProductCarouselProps {
  media: IProductMedia[]
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
        {props.media?.map((item, i) => (
          <Carousel.Item key={i}>
            <img key={i} src={`${baseImgUrl}${item.image}`} alt="" />
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledProductCarousel>
  )
}

export default ProductCarousel
