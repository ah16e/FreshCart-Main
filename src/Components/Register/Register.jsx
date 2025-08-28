import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'



export default function Register() {


    const [apiErorr, setApiErorr] = useState(null);
    const [loading, setLoading] = useState(false);
    let {setUserData} = useContext(UserContext);

    let navigate = useNavigate();
    
    

 async function handleRegister(values){
  try{
    setLoading(true)
    let {data} = await  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
    
    localStorage.setItem('userToken' , data.token)
    navigate('/')
    setUserData(data.token)


  }catch(err){
    console.log(err.response.data.message);
    setApiErorr(err.response.data.message);
    setLoading(false)
  }
 
  }


let validationSchema = Yup.object().shape({
  name: Yup.string().min(3 , "min length is 3").max(10 , 'max 10').required("Name is required"),
  email: Yup.string().email("email invalid").required('email is required'),
  password: Yup.string().matches(/^[A-Z]\w{5,10}$/ , 'password invalid ex(Ahmed123)').required('password is required'),
  rePassword: Yup.string().oneOf([Yup.ref('password')] , 'password and rePassword dont match').required('rePassword is required'),
  phone:Yup.string().matches(/^(002)?01[0125][0-9]{8}$/ , 'phone must be egyption number').required('Phone is required')
})

let formik = useFormik({
  initialValues:{
    name:'',
    email:'',
    password:'',
    rePassword:'',
    phone:''
  },
  validationSchema:validationSchema
  ,onSubmit:handleRegister
})
    
  return (
    <div className="pt-8 pb-8 w-full flex justify-center items-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <div className="mb-4 flex justify-center">
          <span className="bg-emerald-100 p-4 rounded-full">
            <i className="fas fa-user-plus text-emerald-500 text-3xl"></i>
          </span>
        </div>
        <h2 className="text-3xl py-4 text-emerald-500 font-bold text-center">Register Now</h2>
        <form onSubmit={formik.handleSubmit} className="w-full space-y-5">
          {apiErorr && (
            <div className="px-4 mb-2 py-2 text-sm text-red-800 rounded-lg bg-red-50 text-center" role="alert">
              {apiErorr}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-gray-200'}`}
              placeholder="Enter your name"
            />
            {formik.errors.name && formik.touched.name && (
              <div className="mt-1 text-xs text-red-600">{formik.errors.name}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-200'}`}
              placeholder="Enter your email"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="mt-1 text-xs text-red-600">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-200'}`}
              placeholder="Exampl:Ahmed123"
            />
            {formik.errors.password && formik.touched.password && (
              <div className="mt-1 text-xs text-red-600">{formik.errors.password}</div>
            )}
          </div>

          <div>
            <label htmlFor="rePassword" className="block mb-2 text-sm font-semibold text-gray-700">Re-Password</label>
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${formik.errors.rePassword && formik.touched.rePassword ? 'border-red-500' : 'border-gray-200'}`}
              placeholder="Repeat your password"
            />
            {formik.errors.rePassword && formik.touched.rePassword && (
              <div className="mt-1 text-xs text-red-600">{formik.errors.rePassword}</div>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition ${formik.errors.phone && formik.touched.phone ? 'border-red-500' : 'border-gray-200'}`}
              placeholder="Enter your phone"
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="mt-1 text-xs text-red-600">{formik.errors.phone}</div>
            )}
          </div>

          <div className="mt-4">
            {loading ? (
              <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-800 font-medium rounded-lg w-full px-3 py-2.5 text-center">
                <i className='fas fa-spinner fa-spin-pulse'></i>
              </button>
            ) : (
              <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 font-medium rounded-lg w-full px-5 py-2.5 text-center">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

