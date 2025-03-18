import React, { useContext, useEffect, useState } from 'react'
import style from './Allorders.module.css'
import { CartContext } from '../../Context/CartContext'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

export default function Allorders() {

  let {clearCart} = useContext(CartContext);
  useEffect(()=> {
    clearCart()
  } , [])


  return <>
   <div className="pt-24 pb-24">
   <div className="pt-16 pb-24 rounded-md border border-green-500 text-center">
    <h1 className="text-3xl">your payment process is successful <i class="fa-regular text-green-600 fa-circle-check"></i></h1>
      <div className="pt-4">
    <button className='bg-main p-3 rounded-md '><NavLink to={'/'}>Home</NavLink></button>
      </div>
     </div>
   </div>
  
  </>
}
