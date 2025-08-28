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
    


  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-2">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-600 mb-8">Login</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {apiErorr && (
            <div className="mb-4 py-2 px-4 text-sm text-red-800 rounded bg-red-50">{apiErorr}</div>
          )}

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="example@email.com"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="mt-1 text-xs text-red-600">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="مثال: Ahmed123"
            />
            {formik.errors.password && formik.touched.password && (
              <div className="mt-1 text-xs text-red-600">{formik.errors.password}</div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Link to={'/forgetpassowrd'} className="text-sm text-emerald-500 hover:underline">Forget Passowrd</Link>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition disabled:bg-gray-400 flex items-center gap-2"
              disabled={loading}
            >
              Login
              {loading && <i className="fas fa-spinner fa-spin-pulse"></i>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
