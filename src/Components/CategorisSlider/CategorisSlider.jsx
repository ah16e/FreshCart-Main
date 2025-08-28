import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategorisSlider() {


    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px"
        }
      }
    ]
  };
      const [categories, setCategories] = useState([]);

      async function getRecentProducts() {
        try {
          let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
            setCategories(data.data)
        } catch (err) {
          console.log(err);
          
        }
        
      }
    
        useEffect(()=> {
          getRecentProducts()
        } , [])

      

  return <>
    <Slider {...settings}>
        {/* أوفر 1 */}
        <div className="py-4 px-2">
          <div className="bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-xl flex flex-col items-center justify-center h-[180px] md:h-[200px] text-white p-4">
            <h2 className="text-lg md:text-xl font-bold mb-2">20% OFF</h2>
            <p className="mb-2 text-sm md:text-base">Use code: <span className="bg-white text-emerald-700 px-2 py-1 rounded font-bold">FRESH20</span></p>
            <span className="text-xs md:text-sm">On all fashion</span>
          </div>
        </div>
        {/* أوفر 2 */}
        <div className="py-4 px-2">
          <div className="bg-gradient-to-r from-pink-400 to-pink-700 rounded-xl flex flex-col items-center justify-center h-[180px] md:h-[200px] text-white p-4">
            <h2 className="text-lg md:text-xl font-bold mb-2">Buy 1 Get 1</h2>
            <p className="mb-2 text-sm md:text-base">Use code: <span className="bg-white text-pink-700 px-2 py-1 rounded font-bold">BOGO</span></p>
            <span className="text-xs md:text-sm">Selected items only</span>
          </div>
        </div>
        {/* أوفر 3 */}
        <div className="py-4 px-2">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-xl flex flex-col items-center justify-center h-[180px] md:h-[200px] text-gray-900 p-4">
            <h2 className="text-lg md:text-xl font-bold mb-2">Extra 10% OFF</h2>
            <p className="mb-2 text-sm md:text-base">Use code: <span className="bg-white text-yellow-700 px-2 py-1 rounded font-bold">SAVE10</span></p>
            <span className="text-xs md:text-sm">On electronics</span>
          </div>
        </div>
        {/* أوفر 4 */}
        <div className="py-4 px-2">
          <div className="bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl flex flex-col items-center justify-center h-[180px] md:h-[200px] text-white p-4">
            <h2 className="text-lg md:text-xl font-bold mb-2">Free Shipping</h2>
            <p className="mb-2 text-sm md:text-base">Use code: <span className="bg-white text-blue-700 px-2 py-1 rounded font-bold">SHIPFREE</span></p>
            <span className="text-xs md:text-sm">On orders over 500 EGP</span>
          </div>
        </div>
      </Slider>
  
  
  </>
}
