import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const Slider = () => {
  return (
    <Carousel 
    autoPlay 
    interval={3000} 
    showThumbs={false} 
    swipeable={true} 
    infiniteLoop={true}
    showArrows={true}
    emulateTouch={true}
    >
        <div className='slider-img'>
            <img alt="" src={require('../../assets/images/slider/slideshow_1.webp')} />
        </div>
        <div className='slider-img'>
            <img alt="" src={require('../../assets/images/slider/slideshow_2.webp')} />
        </div>
        <div className='slider-img'>
            <img alt="" src={require('../../assets/images/slider/slideshow_3.webp')} />
        </div>
    </Carousel>
  )
}
