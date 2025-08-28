import React, { useContext, useEffect } from 'react'
import { CartContext } from './CartContext';
import Loading from '../Components/Loading/Loading';

export default function Wishlist() {

   let{heart , deletedHeart , addProductToCart , loading} = useContext(CartContext);
    console.log(heart);
    

    
  return <>

<<<<<<< HEAD
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
=======
    { loading ? <div className="flex justify-center items-center"><Loading/></div> : <div>
    {heart ?   <div className="relative pb-16 overflow-x-auto   w-3/4 mx-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right  text-gray-500 ">
    <thead className="text-xs uppercase bg-gray-500 text-white bg-white:bg-gray-800">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
      <tbody> 
       {heart?.data.map((product)=> <tr  className=" border-b ">
        <td className="p-4">
          <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 ">
          {product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div>
          <button onClick={()=> addProductToCart(product.id)} className='btn bg-main p-4 w-full text-white rounded'>Add To Cart</button>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 ">
          {product.price}
        </td>
        <td className="px-6 py-4">
          <button onClick={()=> deletedHeart(product.id)} className="font-medium text-red-600 hover:underline ">Remove<i class="fa-solid fa-trash m-3"></i></button>
        </td>
      </tr>)}
    </tbody>
  </table>
</div> : <h2 className='text-2xl pt-12 pb-12 text-black font-semibold text-center'>Cart Is Empty</h2> }
</div>}
>>>>>>> 128dc1ccdd92db96293a262f3e341c47e1044cc6
  
  
  </>
}
