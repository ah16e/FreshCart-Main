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


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
        <div className="max-w-lg w-full mx-auto bg-white rounded-xl border border-green-500 shadow-lg p-8 text-center">
          <div className="flex flex-col items-center gap-2 mb-6">
            <i className="fa-regular fa-circle-check text-green-600 text-5xl mb-2"></i>
            <h1 className="text-2xl md:text-3xl font-bold text-green-700">Payment Successful!</h1>
            <p className="text-gray-600 mt-2">Your payment process is completed successfully.</p>
          </div>
          <NavLink to={'/'}>
            <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition'>
              Back to Home
            </button>
          </NavLink>
        </div>
      </div>
    </>
  )
}
