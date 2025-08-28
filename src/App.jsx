import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import UserContextProvider from './Context/UserContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import CartContextProvider from './Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import Checkout from './Components/Checkout/Checkout.jsx'
import Allorders from './Components/Allorders/Allorders.jsx'
import Wishlist from './Context/Wishlist.jsx'
import Forgetpassword from './Components/Forgetpassword/Forgetpassword.jsx'


let routers = createBrowserRouter([
  {path: '' , element: <Layout/>, children :[
    {index:true , element: <ProtectedRoute><Home/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'products' , element: <ProtectedRoute><Products/></ProtectedRoute>},
    {path:'categories' , element: <ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'checkout' , element: <ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:'allorders' , element: <ProtectedRoute><Allorders/></ProtectedRoute>},
    {path:'wishlist' , element: <ProtectedRoute><Wishlist/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'productdetails/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'login' , element:<Login/>},
    {path:'forgetpassowrd' , element:<Forgetpassword/>},
    {path:"register" , element:<Register/>},
    {path:'*' , element:<Notfound/>},
  ]}
])

function App() {

  return <CartContextProvider>
    <UserContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    <Toaster />
    </UserContextProvider>
  </CartContextProvider>
  
}

export default App
