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

    
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 my-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            {details.images && details.images.length > 1 ? (
              <Slider {...settings}>
                {details.images.map((image, index) => (
                  <img key={index} src={image} className="w-full object-cover rounded-lg" alt={details.title} />
                ))}
              </Slider>
            ) : (
              <img src={details.imageCover} className="w-full h-64 object-cover rounded-lg" alt={details.title} />
            )}
          </div>
          <div className="w-full md:w-2/3 flex flex-col">
            <h2 className="text-2xl font-bold text-emerald-700 mb-2">{details.title}</h2>
            <h3 className="text-sm text-gray-400 mb-2">{details.category?.name}</h3>
            <p className="my-4 text-gray-600">{details.description}</p>
            <div className="flex items-center justify-between my-4">
              <span className="text-xl font-bold text-emerald-600">{details.price} EGP</span>
              <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                <i className="fas fa-star"></i>
                {details.ratingsAverage}
              </span>
            </div>
            <button
              onClick={() => addProductToCart(details.id)}
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition mt-4"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <RelatedProduct />
    </>
  )
}
