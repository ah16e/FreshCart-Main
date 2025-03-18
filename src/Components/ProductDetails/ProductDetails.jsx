import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import RelatedProduct from '../CategorisSlider/RelatedProduct';
import { CartContext } from '../../Context/CartContext';



export default function ProductDetails() {

  let {id} = useParams()
  const [details, setDetails] = useState({});
  let {addProductToCart} = useContext(CartContext);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  };

  async function getProductDetails(id) {
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    console.log(data);
    setDetails(data.data);
  }

  
 

  useEffect(()=> {
    getProductDetails(id);

  } , [id])

    
  return <>
    
    <h1 className="text-3xl">ProductDetails</h1>
    <div className="flex py-10 items-center">
      <div className="w-1/4 p-4">
     {details.images > 1 ?  <Slider {...settings}>
        {details.images.map((image , index)=> <img key={index} src={image} className='w-full'/>)}
       </Slider> : <img src={details.imageCover} className='w-full'/>}
      </div>
      <div className="w-3/4">
      <div>
        <h2>{details.title}</h2>
        <p className='my-6 text-gray-500'>{details.description}</p>
        <h3>{details.category?.name}</h3>
        <div className="flex justify-between my-2">
            <h3>{details.price} EGP</h3>
            <h3><i className='fas fa-star rating-color'></i>{details.ratingsAverage}</h3>
        </div>
        <button onClick={()=> addProductToCart(details.id)} className='btn bg-main w-full text-white rounded'>Add To Cart</button>
      </div>
      </div>
    </div>
    <RelatedProduct/>
  </>
}
