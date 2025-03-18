import { useContext, useState } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext';



export default function Navbar() {
  

  let {userData , setUserData}= useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let {cart} =  useContext(CartContext);
  const Navigate = useNavigate()
  function logOut(){
    localStorage.removeItem('userToken');
    setUserData(null);
    Navigate('/login')
  }
    
  return <>
            
  <nav className='bg-gray-200 z-20 md:fixed top-0 inset-x-0 py-2 text-center capitalize shadow-md'>
      <div className='container mx-auto flex flex-wrap justify-between items-center px-4'>
        {/* Logo and Menu Toggle */}
        <div className='flex items-center justify-between w-full md:w-auto'>
          <NavLink to='/'>
            <img src={logo} width={120} alt='logo' />
          </NavLink>
          <button className='md:hidden text-gray-600 text-2xl' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          {userData && (
            <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 text-gray-700'>
              <li><NavLink to='/' className='hover:text-blue-500'>Home</NavLink></li>
              <li><NavLink to='/products' className='hover:text-blue-500'>Products</NavLink></li>
              <li><NavLink to='/categories' className='hover:text-blue-500'>Categories</NavLink></li>
              <li><NavLink to='/brands' className='hover:text-blue-500'>Brands</NavLink></li>
            </ul>
          )}
        </div>

        {/* User Actions & Social Icons */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-gray-700 mt-4 md:mt-0'>
            <li className='space-x-3 flex justify-center md:justify-start'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li>
            {userData ? (
              <>
                <li className='relative'>
                  <NavLink to='/wishlist'>
                    <i className='fa-solid fa-heart text-xl text-gray-500'></i>
                  </NavLink>
                </li>
                <li className='relative'>
                  <NavLink to='/cart'>
                    <i className='fa-solid fa-cart-shopping text-xl text-slate-600'></i>
                  </NavLink>
                  <span className='absolute text-xs bg-red-500 text-white px-2 rounded-full -top-2 -right-2'>{cart?.numOfCartItems || 0}</span>
                </li>
                <li className='cursor-pointer' onClick={logOut}>
                  <span>Logout</span>
                </li>
              </>
            ) : (
              <>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>  
  </>
}
