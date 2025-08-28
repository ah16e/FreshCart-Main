import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

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
}
