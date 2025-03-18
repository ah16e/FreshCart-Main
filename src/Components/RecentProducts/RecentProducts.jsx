import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export default function RecentProducts({product}) {


  let {addProductToCart , AddHeartList} = useContext(CartContext);
  return<>

  <div className="mx-auto product rounded-md p-2">
    <div>
      <Link to={`productdetails/${product.id}`}>
      <img src={product.imageCover} className='w-full' alt={product.title} />
        <h2 className='text-main text-sm'>{product.category.name}</h2>
        <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join('')}</h2>
        <div className="flex justify-between my-2">
            <h3>{product.price} EGP</h3>
            <h3><i className='fas fa-star rating-color'></i>{product.ratingsAverage}</h3>
        </div></Link>
          <div className="flex justify-between gap-4">
          <button onClick={()=> addProductToCart(product.id)} className='btn bg-main w-full p-3 text-white rounded'>Add To Cart</button>
        <button className='list-none' onClick={()=> AddHeartList(product.id)}><li><i className='fa-solid text-3xl fa-heart hover:text-red-600 '></i></li></button>

          </div>
    </div>
  </div>
  
  </>
}
