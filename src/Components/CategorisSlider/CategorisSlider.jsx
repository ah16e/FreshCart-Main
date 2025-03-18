import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategorisSlider() {


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows:false,
        autoplay:true,
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
        {categories?.map((category , index)=> <div key={index} className='py-4' >
            <img src={category.image} className='w-full h-[200px] pt-4-4'/>
            <h3>{category.name}</h3>
        </div>)}
    </Slider>
  
  
  </>
}
