import React from 'react'
import logo from '../../assets/images/slider-image-1.jpeg'
import image from '../../assets/images/slider-image-2.jpeg'
import slide1 from '../../assets/images/slider-image-3.jpeg'
import slide2 from '../../assets/images/blog-img-2.jpeg'
import Slider from "react-slick";
export default function MianSlide() {




    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
      };


  return <>
  

      <div className="flex">
        <div className="w-3/4">
        <Slider {...settings}>
                <img src={slide1} className='w-full h-[500px]' alt="" />
                <img src={image} className='w-full h-[500px]' alt="" />
                <img src={slide1} className='w-full h-[500px]' alt="" />
        </Slider>
  
        </div>
        <div className="w-1/4">
        <img src={logo} className='w-full h-[250px]' alt="" />
        <img src={slide2} className='w-full h-[250px]' alt="" />
        </div>
      </div>
  
  
  </>
}
