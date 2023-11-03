import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carrousel.css'


export const CarrouselItem = (props: any) => {
  const { imgSrc,altText, firstSlide, secondSlide } = props;
  return (
    <>
    
      <img
        className="imagenCarrousel d-block w-100"
        src={imgSrc}
        alt={altText}
      />

      <Carousel.Caption>
        <h5>{firstSlide}</h5>
        <p>{secondSlide}</p>
      </Carousel.Caption>

    </>
  )
}