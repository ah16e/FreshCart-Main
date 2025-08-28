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


  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 relative">
          {/* شريط خصم أحمر أعلى السلايدر */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-11/12 ">
            <div className="bg-red-500 text-white text-center py-2 rounded-xl shadow font-bold text-lg md:text-2xl tracking-wider">
              20% OFF on all products!
            </div>
          </div>
          <Slider {...settings}>
            <img src={slide1} className='w-full h-[220px] md:h-[500px] rounded-xl object-cover' alt="" />
            <img src={image} className='w-full h-[220px] md:h-[500px] rounded-xl object-cover' alt="" />
            <img src={slide1} className='w-full h-[220px] md:h-[500px] rounded-xl object-cover' alt="" />
          </Slider>
        </div>
        <div className="hidden md:flex flex-col w-1/4 gap-4 pl-4">
          <img src={logo} className='w-full h-[250px] rounded-xl object-cover mb-2' alt="" />
          <img src={slide2} className='w-full h-[250px] rounded-xl object-cover' alt="" />
        </div>
      </div>
    </>
  )
}
