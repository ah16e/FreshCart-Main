import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Cart() {


 let {getCart ,cart , updateProductCount ,deleteProduct, loading} =  useContext(CartContext);

 useEffect(()=> {

    getCart();

 } , [])  
    
  return <>
    
    <h1 className="text-3xl py-4 font-bold mb-6 text-emerald-700 text-center">Shopping Cart</h1>
      {loading ? (
        <div className='flex justify-center items-center'><Loading /></div>
      ) : (
        <div>
          {cart ? (
            <>
              {/* Mobile Cards Design */}
              <div className="block md:hidden">
                {cart?.data.products.map((product) => (
                  <div key={product.product.id} className="bg-white rounded-xl shadow mb-4 p-4 flex flex-col">
                    <div className="flex gap-3 items-center">
                      <img src={product.product.imageCover} className="w-20 h-20 object-cover rounded-lg border" alt={product.product.title} />
                      <div className="flex-1">
                        <h2 className="font-bold text-base mb-1 text-gray-800">{product.product.title}</h2>
                        <div className="text-xs text-gray-500 mb-2">{product.price} EGP</div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateProductCount(product.product.id, product.count - 1)} className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold">-</button>
                          <span className="mx-2 font-bold">{product.count}</span>
                          <button onClick={() => updateProductCount(product.product.id, product.count + 1)} className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold">+</button>
                        </div>
                      </div>
                      <button onClick={() => deleteProduct(product.product.id)} className="text-red-500 text-xs font-semibold">Remove</button>
                    </div>
                  </div>
                ))}
                <div className="bg-white rounded-xl shadow p-4 mb-4 text-center font-bold text-lg text-emerald-700">
                  Total: {cart.data.totalCartPrice} EGP
                </div>
                <Link to={'/checkout'} className='bg-emerald-600 w-full block text-center text-white p-3 py-2 rounded-xl mb-4 font-bold'>Checkout</Link>
              </div>
              {/* Desktop Table Design */}
              <div className="hidden md:block">
                <div className="relative grid pt-4 pb-14 mx-auto shadow-md rounded-xl bg-white">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-8 py-3"><span className="sr-only">Image</span></th>
                        <th scope="col" className="px-6 py-3">Product</th>
                        <th scope="col" className="px-6 py-3">Quantity</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart?.data.products.map((product) => (
                        <tr key={product.product.id} className="bg-white border-b hover:bg-gray-50">
                          <td className="p-4">
                            <img src={product.product.imageCover} className="w-24 h-24 object-cover rounded-lg border" alt={product.product.title} />
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900">{product.product.title}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <button onClick={() => updateProductCount(product.product.id, product.count - 1)} className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold">-</button>
                              <span className="mx-2 font-bold">{product.count}</span>
                              <button onClick={() => updateProductCount(product.product.id, product.count + 1)} className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold">+</button>
                            </div>
                          </td>
                          <td className="px-3 py-4 font-semibold text-gray-900">{product.price} EGP</td>
                          <td className="px-6 py-4">
                            <button onClick={() => deleteProduct(product.product.id)} className="font-medium text-red-600 hover:underline">Remove</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className='text-xl text-emerald-700 font-bold'>
                        <td colSpan={2}>Total</td>
                        <td>{cart.data.totalCartPrice} EGP</td>
                      </tr>
                    </tfoot>
                  </table>
                  <Link to={'/checkout'} className='bg-emerald-600 max-w-96 text-center text-white p-3 py-2 rounded-xl font-bold mt-4'>Checkout</Link>
                </div>
              </div>
            </>
          ) : (
            <h2 className='text-2xl text-black font-semibold text-center'>Cart is empty</h2>
          )}
        </div>
      )}
  </>
}
