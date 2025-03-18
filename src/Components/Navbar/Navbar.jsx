import { useContext, useState } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext';



export default function Navbar() {
  

  let {userData , setUserData}= useContext(UserContext);
  let {cart} =  useContext(CartContext);
  const Navigate = useNavigate()
  function logOut(){
    localStorage.removeItem('userToken');
    setUserData(null);
    Navigate('/login')
  }
    
  return <>
    <nav className='bg-gray-200 z-20  md:fixed top-0 inset-x-0 py-2 text-center capitalize'>
      <div className="container flex flex-col md:flex-row justify-between items-center text-gray-500">
        <div className='flex flex-col md:flex-row space-x-3'>
          <NavLink to={'/login'}>
          <img src={logo} width={120} alt="" />
          </NavLink>
          {userData && <ul className='flex flex-col md:flex-row space-x-2'>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="products">products</NavLink></li>
            <li><NavLink to="categories">categories</NavLink></li>
            <li><NavLink to="brands">brands</NavLink></li>
          </ul>}
         
        </div>
        
        <div className=''>
          <ul className='flex flex-col md:flex-row space-x-2'>
          <li className='space-x-2 text-black'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li>

            {userData?
            
              <>
            <li className='relative ' ><NavLink to="wishlist"><i className="fa-solid text-xl  fa-heart text-gray-500"></i></NavLink><span className='absolute text-white left-1/3 bottom-1'></span></li>
            <li className='relative' ><NavLink to="cart"><i className='fa-solid fa-cart-shopping text-xl text-slate-600'></i></NavLink><span className='absolute text-white left-1/3 bottom-1'>{cart? cart.numOfCartItems : 0}</span></li>
            <li className='cursor-pointer ' onClick={()=> logOut()}><span>logout</span></li> 
              
              </>
              : 
              <>
            <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="register">Register</NavLink></li>
              </>
              }
       
          </ul>
        </div>
      </div>
    </nav>
  
  </>
}
