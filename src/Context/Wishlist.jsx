import React, { useContext, useEffect } from 'react'
import { CartContext } from './CartContext';
import Loading from '../Components/Loading/Loading';

export default function Wishlist() {

   let{heart , deletedHeart , addProductToCart , loading} = useContext(CartContext);
    console.log(heart);
    

    
  return <>

    {loading ? (
  <div className="flex justify-center items-center"><Loading /></div>
) : (
  <div>
    {heart && heart.data.length > 0 ? (
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">My Wishlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {heart.data.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src={product.imageCover} className="w-32 h-32 object-cover rounded-lg mb-3" alt={product.title} />
              <h3 className="font-bold text-base text-gray-800 mb-1 text-center">{product.title}</h3>
              <div className="text-sm text-gray-500 mb-2">{product.price} EGP</div>
              <div className="flex gap-2 w-full">
                <button
                  onClick={() => addProductToCart(product.id)}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-2 font-semibold transition"
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => deletedHeart(product.id)}
                  className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg py-2 font-semibold transition flex items-center justify-center"
                >
                  <i className="fa-solid fa-trash mr-2"></i> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <h2 className="text-2xl pt-12 pb-12 text-gray-700 font-semibold text-center">Wishlist is empty</h2>
    )}
  </div>
)}
  
  
  </>
}
