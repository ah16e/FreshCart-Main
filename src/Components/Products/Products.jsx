import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
import axios from 'axios';
import RecentDataProduct from '../RecentProducts/RecentDataProduct';
import Loading from '../Loading/Loading';

export default function Products() {


    const [products, setProducts] = useState([]);

    async function getDataProduct() {
      try {
        
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      setProducts(data.data)

      } catch (error) {
        console.log(error);
        
      }
    }
    useEffect(()=> {
      getDataProduct()
    } , [])
  return <>
      {products.length?  <div className="grid sm:grid-cols-2 pb-32 grid-cols-1 xl:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 gap-6">
     {products.map((product , index)=> <RecentDataProduct key={index} product={product}/>)}
      </div> :<div className="text-center flex justify-center py-16">
      <Loading/>
    </div> }
  </>
}
