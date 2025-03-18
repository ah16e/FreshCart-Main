import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'


export default function Login() {


    const [apiErorr, setApiErorr] = useState(null);
    const [loading, setLoading] = useState(false);
    let {setUserData} =  useContext(UserContext);

     let navigate =   useNavigate()
    

 async function Login(values){
  try{
    setLoading(true)
    let {data} = await  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values);

    localStorage.setItem('userToken' , data.token)
    navigate('/')
    setLoading(false)
    setUserData(data.token)

  }catch(err){
    setApiErorr(err.response.data.message);
    setLoading(false)
  }
 
  }


let validationSchema = Yup.object().shape({
  email: Yup.string().email("email invalid").required('email is required'),
  password: Yup.string().matches(/^[A-Z]\w{5,10}$/ , 'password invalid ex(Ahmed123)').required('password is required'),
})

let formik = useFormik({
  initialValues:{
    email:'',
    password:'',

  },
  validationSchema:validationSchema
  ,onSubmit:Login
})
    


  return <>

  <div className='pt-8 pb-28 w-1/2 mx-auto'>
    <h2 className="text-3xl py-6 text-emerald-500 font-bold">Login  Now</h2>
  <form onSubmit={formik.handleSubmit} className=" mx-auto">

  {apiErorr && 
  <div className="px-4 mb-4 py-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {apiErorr}
  </div>
}


  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email:</label>
  </div>
  
  {formik.errors.email && formik.touched.email &&<div className="px-4 mb-4 py-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.email}
  </div>}

  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Passowrd:</label>
  </div>

  
  {formik.errors.password && formik.touched.password &&<div className="px-4 mb-4 py-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {formik.errors.password}
  </div>}
  

    <div className="flex justify-between">
      <Link to={'/forgetpassowrd'}>Forget password ?</Link>
        <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 disabled:bg-gray-600" disabled={loading}>Submit {loading && <i className='fas fa-spinner fa-spin-pulse'></i>}</button>
    </div>
  </form>
  </div>
  
  </>
}
    