import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts';
import Loading from '../Loading/Loading';
import CategorisSlider from '../CategorisSlider/CategorisSlider';
import MianSlide from '../MainSlider/MainSlider';

export default function Home() {


  const [products, setProducts] = useState([]);

  async function getRecentProducts() {
    try {
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
       
        setProducts(data.data)
    } catch (err) {
      console.log(err);
      
    }
    
  }

    useEffect(()=> {
      getRecentProducts()
    } , [])

    
  return <>
    <MianSlide/>
    <CategorisSlider/>
      {products.length ? (
  <div className="grid pb-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6">
    {products.map((product, index) => (
      <RecentProducts key={index} product={product} />
    ))}
  </div>
) : (
  <div className="text-center flex justify-center py-16">
    <Loading />
  </div>
)}
    
  
  </>
}
