import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { CartContext } from '../../Context/CartContext';

export default function RelatedProduct() {

    const [data, setData] = useState([]);
    const [relatedProduct, setrelatedProduct] = useState([]);
    let {addProductToCart} = useContext(CartContext);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        arrows:false,
        autoplay:true,
      };

    async function getProductDetails() {
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
        setData(data)
        }
      
        
        async function getRelatedProduct(categorytId) {
          let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products` , {
            params: {
              "category" : categorytId
            }
          })
          console.log(data);
          setrelatedProduct(data.data)
          }
          useEffect(()=> {
                getRelatedProduct()
                getProductDetails()


          } , [])
  return <>
        <Slider {...settings}>
            {relatedProduct?.map((product , index)=>  
             <div key={index} className="w-1/6 px-2 py-2 rounded-md ">
             <div>
               <Link to={`/productdetails/${product.id}`}>
               <img src={product.imageCover} className='w-full' alt={product.title} />
               <h2 className='text-main text-sm'>{product.brand.name}</h2>
               <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
               <div className="flex justify-between my-2">
                 <h3>{product.price} EGP</h3>
                 <h3><i className='fas fa-star rating-color'></i>{product.ratingsAverage}</h3>
               </div>
               </Link>
               <button onClick={()=> addProductToCart(product.id)} className='btn w-full bg-main text-white rounded-md py-1'>Add To Cart</button>
             </div>
            </div>
            )}
       </Slider>
  
  </>
}
