'use client'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { CarrouselItem } from './CarrouselItem';
import { imagenesWeb } from '../../../../../public/ImagenesCarrousel/carrouselImagenes'

// Componente corrousel importado desde React Bootstrap
// Importa carrouselItem

function Carrousel() {
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <CarrouselItem
          imgSrc={imagenesWeb.Palacio.src}
          altText='palacio'
          firstSlide='Gobierno Abierto'
          secondSlide='Reafirmamos nuestro compromiso con el acceso a la informacion publica de calidad y en formato abierto ' />
      </Carousel.Item>
      <Carousel.Item >
        <CarrouselItem
          imgSrc={imagenesWeb.ArroyoTapalque.src}
          altText='arroyoTapalque'
          firstSlide='Turismo'
          secondSlide='Cicloturismo, Turismo Serrano, Propuestas Gatronomicas, Trekking, Espacios Verdes, Hoteleria, y muchas propuestas mas para su entretenimiento.' />
      </Carousel.Item>
      <Carousel.Item>
        <CarrouselItem
          imgSrc={imagenesWeb.Teatro.src}
          altText='teatro'
          firstSlide='Cultura'
          secondSlide='Somos personas motivadas en obtener y transmitir nuevas experiencias. Disponemos diferentes alternativas culturales para sorprendente.' />
      </Carousel.Item>
      <Carousel.Item>
        <CarrouselItem
          imgSrc={imagenesWeb.LomaNegra.src}
          altText='LomaNegra'
          firstSlide='Industria'
          secondSlide='Contamos con cinco parques industriales desarrollados con programas que incentivan la invercion productiva para la radicaion de nuevas empresas.' />
      </Carousel.Item>
      <Carousel.Item>
        <CarrouselItem
          imgSrc={imagenesWeb.Hospital.src}
          altText='Hospital'
          firstSlide='Salud'
          secondSlide='Desarrollamos el centro de salud público más importante del centro de la provincia de Buenos Aires, además de ser un referente regional.' />
      </Carousel.Item>

    </Carousel>
  );
}

export default Carrousel;