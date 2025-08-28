import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

<<<<<<< HEAD
export default function RecentProducts({ product }) {
  let { addProductToCart, AddHeartList } = useContext(CartContext);
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-200 border border-gray-100">
      <div className="relative">
        <Link to={`productdetails/${product.id}`}>
          <img
            src={product.imageCover}
            alt={product.title}
            className="w-full h-40 object-cover"
          />
        </Link>
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-emerald-100 transition" onClick={() => AddHeartList(product.id)}>
          <i className="fa fa-heart text-black"></i>
        </button>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <span className="text-xs text-emerald-600 font-semibold mb-1">{product.category?.name}</span>
        <h3 className="font-bold text-base text-gray-800 mb-1 truncate">{product.title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-emerald-600 font-bold text-base">{product.price} EGP</span>
          <span className="flex items-center gap-1 text-yellow-500 text-sm">
            <i className="fa fa-star"></i>
            {product.ratingsAverage}
          </span>
        </div>
        <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition w-full" onClick={() => addProductToCart(product.id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
=======
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
>>>>>>> 128dc1ccdd92db96293a262f3e341c47e1044cc6
}
