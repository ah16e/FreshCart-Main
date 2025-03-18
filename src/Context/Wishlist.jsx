import React, { useContext, useEffect } from 'react'
import { CartContext } from './CartContext';
import Loading from '../Components/Loading/Loading';

export default function Wishlist() {

   let{heart , deletedHeart , addProductToCart , loading} = useContext(CartContext);
    console.log(heart);
    

    
  return <>

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
  
  
  </>
}
