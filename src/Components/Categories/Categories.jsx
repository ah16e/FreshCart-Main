import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import axios from 'axios';
import RecentCategoris from '../RecentProducts/RecentCategoris';
import Loading from '../Loading/Loading';

export default function Categories() {

  const [category, setCategory] = useState([]);

  async function getRecentCategory() {
    try {
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
       console.log(data.data);
       
      setCategory(data.data)
    } catch (err) {
      console.log(err);
      
    }
    
  }

    useEffect(()=> {
      getRecentCategory()
    } , [])

    
  return <>
    
    {category.length? <div className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-6 md:grid-cols-4 lg:grid-cols-6">
     {category.map((categorys , index)=> <RecentCategoris key={index} categorys={categorys}/>)}
      </div> :<div className="text-center flex justify-center py-16">
      <Loading/>
    </div> }
    
  </>
}
