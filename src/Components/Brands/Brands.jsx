import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios';
import Loading from '../Loading/Loading';

export default function Brands() {

const [brand, setBrand] = useState([]);
async function getRecentBrand() {
  try {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
    console.log(data.data);
    setBrand(data.data)
  } catch (err) {
    console.log(err);
    
  }
  
}

  useEffect(()=> {
    getRecentBrand()
  } , [])



    
  return <>
    
    {brand.length? <div className="flex  flex-wrap items-center justify-center">
     {brand.map((brands , index)=> <div key={index} brands={brands}>
     <img src={brands.image} alt="" />
     </div>)}
      </div> :<div className="text-center flex justify-center py-16">
      <Loading/>
    </div> }
  
  </>
}
