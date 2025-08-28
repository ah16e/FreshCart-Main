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
<<<<<<< HEAD
        slidesToShow: 2,
=======
        slidesToShow: 7,
>>>>>>> 128dc1ccdd92db96293a262f3e341c47e1044cc6
        slidesToScroll: 3,
        arrows:false,
        autoplay:true,
      };

<<<<<<< HEAD
      const settingsMobile = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      };

      const settingsDesktop = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3,
      arrows: false,
      autoplay: true,
    };

=======
>>>>>>> 128dc1ccdd92db96293a262f3e341c47e1044cc6
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
<<<<<<< HEAD
  return (
    <>
      {/* سلايدر للموبايل فقط */}
      <div className="block md:hidden">
        <Slider {...settingsMobile}>
          {relatedProduct?.map((product, index) =>
            <div key={index} className="px-2 py-2">
              <div className="bg-white rounded-lg shadow flex flex-col items-center p-2 h-full">
                <Link to={`/productdetails/${product.id}`} className="w-full flex flex-col items-center">
                  <img src={product.imageCover} className='w-full  rounded-md' alt={product.title} />
                  <h2 className='text-main text-xs font-bold text-center truncate w-full'>{product.brand.name}</h2>
                  <h2 className='font-medium text-xs text-center truncate w-full'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
                  <div className="flex justify-between items-center w-full my-1">
                    <h3 className="text-xs">{product.price} EGP</h3>
                    <h3 className="text-xs flex items-center"><i className='fas fa-star rating-color mr-1'></i>{product.ratingsAverage}</h3>
                  </div>
                </Link>
                <button onClick={() => addProductToCart(product.id)} className='w-full bg-main text-white rounded-md py-1 text-xs mt-1'>Add To Cart</button>
              </div>
            </div>
          )}
        </Slider>
      </div>
      {/* سلايدر للديسكتوب فقط */}
      <div className="hidden md:block">
        <Slider {...settingsDesktop}>
          {relatedProduct?.map((product, index) =>
            <div key={index} className="px-2 py-2">
              <div className="bg-white rounded-lg shadow flex flex-col items-center p-2 h-full">
                <Link to={`/productdetails/${product.id}`} className="w-full flex flex-col items-center">
                  <img src={product.imageCover} className='w-full rounded-md ' alt={product.title} />
                  <h2 className='text-main text-sm font-bold text-center truncate w-full'>{product.brand.name}</h2>
                  <h2 className='font-medium text-base text-center truncate w-full'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
                  <div className="flex justify-between items-center w-full my-1">
                    <h3 className="text-base">{product.price} EGP</h3>
                    <h3 className="text-base flex items-center"><i className='fas fa-star rating-color mr-1'></i>{product.ratingsAverage}</h3>
                  </div>
                </Link>
                <button onClick={() => addProductToCart(product.id)} className='w-full  text-white  bg-emerald-700 rounded-md py-1 text-base mt-1'>Add To Cart</button>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </>
  )
=======
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
>>>>>>> 128dc1ccdd92db96293a262f3e341c47e1044cc6
}
